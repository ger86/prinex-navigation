import React from 'react';
import * as Yup from 'yup';
import {Alert} from 'react-native';
import {Formik} from 'formik';
import ContactScreenView from './ContactScreenView';

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {(formik) => <ContactScreenView formik={formik} />}
    </Formik>
  );
}
