import React, {useState} from 'react';
import {
  Button,
  View,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import {insertTask} from '#/utils/db';
import {useDbContext} from '#/contexts/DbContext';

function CreateTask({navigation, route}) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const db = useDbContext();

  function handleTitleChange(text) {
    setTitle(text);
  }

  async function createTask() {
    if (title === '') {
      setError('A title for task is required');
      return;
    }
    try {
      await insertTask(db, title);
      Alert.alert(
        'Success',
        'Task created',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('ViewTasks')
          }
        ],
        {cancelable: false}
      );
      setError(null);
    } catch (e) {
      setError(`An error occurred saving the task: ${e.message}`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
            <TextInput
              placeholder="Enter title"
              onChangeText={handleTitleChange}
              style={styles.textInput}
              value={title}
            />
            <Button title="Create task" onPress={createTask} />
            {error && <Text>{error}</Text>}
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  form: {flex: 1},
  keyboardAvoidingView: {flex: 1, justifyContent: 'space-between'},
  textInput: {
    padding: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    borderColor: '#EAB83E',
    borderWidth: 1
  }
});

export default CreateTask;
