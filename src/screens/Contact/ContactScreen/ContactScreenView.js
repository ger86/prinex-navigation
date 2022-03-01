import React, {useRef, useState} from 'react';
import {
  Button,
  Image,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  View,
  Platform
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BorderedView from '#/components/ui/BorderedView';
import TextInput from '#/components/ui/TextInput';
import {useModeContext} from '#/contexts/ModeContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue'
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center'
  },
  image: {width: 200, height: 200}
});

export default function ContactScreenView({formik}) {
  const {mode} = useModeContext();
  const [responseFromImageLibrary, setResponseFromImageLibrary] = useState(null);
  const textInputName = useRef();
  const textInputEmail = useRef();

  function showImageLibrary() {
    async function launch() {
      const result = await launchImageLibrary({
        mediaType: 'photo'
      });
      setResponseFromImageLibrary(result);
    }
    launch();
  }

  function showCamera() {
    async function launch() {
      const result = await launchCamera({
        mediaType: 'photo'
      });
      setResponseFromImageLibrary(result);
    }
    launch();
  }

  return (
    <View style={styles.container}>
      <Text>Contact {mode}</Text>
      <BorderedView>
        <View>
          <Text>Name:</Text>
          <TextInput
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            ref={textInputName}
          />
          {formik.touched.name && <Text>{formik.errors.name}</Text>}
        </View>
        <View>
          <Text>Email:</Text>
          <RNTextInput
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            ref={textInputEmail}
          />
          {formik.touched.email && <Text>{formik.errors.email}</Text>}
        </View>
        <View>
          {responseFromImageLibrary?.assets &&
            responseFromImageLibrary.assets.map((asset) => (
              <View key={asset.id} style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri: asset.uri}}
                  resizeMode="cover"
                  resizeMethod="scale"
                />
              </View>
            ))}
        </View>
        <Button onPress={showImageLibrary} title="Seleccionar imagen" />
        <View>
          <Button onPress={formik.handleSubmit} title="Enviar" />
        </View>
      </BorderedView>
      <Button onPress={() => textInputName.current.focus()} title="Haz focus sobre name" />
      <Button onPress={() => textInputEmail.current.focus()} title="Haz focus sobre email" />
    </View>
  );
}
