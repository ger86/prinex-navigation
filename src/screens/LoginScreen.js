import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useUserContext} from '#/contexts/UserContext';

const initialValues = {
  email: '',
  password: ''
};

const ValidationSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
});

export default function LoginScreen() {
  const {login} = useUserContext();

  function handleLogin(values) {
    login(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleLogin}
    >
      {(formik) => (
        <View>
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
            <Text>Password:</Text>
            <TextInput
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              secureTextEntry
            />
            {formik.touched.password && <Text>{formik.errors.password}</Text>}
          </View>
          <Button title="Login" onPress={formik.handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
