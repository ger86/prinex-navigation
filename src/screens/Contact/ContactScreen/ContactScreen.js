import React from 'react';
import * as Yup from 'yup';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

const initialValues = {
  name: '',
  email: ''
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short').max(255, 'Too long').required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
});

export default function ContactScreen({navigation}) {
  function handleSubmit(values) {
    Alert.alert('Formulario enviado', `Name: ${values.name}. Email: ${values.email}`, [
      {text: 'OK'}
    ]);
  }

  return (
    <View style={style}>
      <Text>Contact</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        {(formik) => (
          <View>
            <View>
              <Text>Name:</Text>
              <TextInput
                value={formik.values.name}
                onChangeText={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
              />
              {formik.touched.name && <Text>{formik.errors.name}</Text>}
            </View>
            <View>
              <Text>Email:</Text>
              <TextInput
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
              {formik.touched.email && <Text>{formik.errors.email}</Text>}
            </View>
            <View>
              <Button onPress={formik.handleSubmit} title="Enviar" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
