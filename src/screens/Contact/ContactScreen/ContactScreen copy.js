import React from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {useFormik} from 'formik';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

const initialValues = {
  name: '',
  email: ''
};

export default function ContactScreen({navigation}) {
  function handleSubmit(values) {
    Alert.alert('Formulario enviado', `Name: ${values.name}. Email: ${values.email}`, [
      {text: 'OK'}
    ]);
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit
  });

  return (
    <View style={style}>
      <Text>Contact</Text>
      <View>
        <View>
          <Text>Name:</Text>
          <TextInput
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
          />
          <Text>{formik.values.name}</Text>
        </View>
        <View>
          <Text>Email:</Text>
          <TextInput
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
          />
          <Text>{formik.values.email}</Text>
        </View>
        <View>
          <Button onPress={formik.handleSubmit} title="Enviar" />
        </View>
      </View>
    </View>
  );
}
