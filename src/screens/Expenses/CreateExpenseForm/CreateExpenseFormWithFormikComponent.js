import React, {useEffect} from 'react';
import * as Yup from 'yup';
import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {EXPENSE_CREATED} from '#/consts/screens';
import useFetch from '#/hooks/useFetch';
import {useNavigation} from '@react-navigation/native';

const style = {flex: 1};

const initialValues = {
  title: '',
  amount: '',
  category: ''
};

const ValidationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too short').max(255, 'Too long').required('Required'),
  amount: Yup.number().required('Required').positive(),
  category: Yup.string().required('Required')
});

export default function CreateExpenseForm({navigation, route}) {
  const fetchStatus = useFetch('https://reqres.in/api/users');
  const params = route.params;
  const categoryId = params?.categoryId;

  function handleSubmit(values) {
    navigation.navigate(EXPENSE_CREATED, values);
  }

  if (fetchStatus.state === 'loading') {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (fetchStatus.state === 'error') {
    return (
      <View>
        <Text>Error!</Text>
      </View>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {(formik) => (
        <CreateExpenseFormFormik
          formik={formik}
          categoryId={categoryId}
          categories={fetchStatus.data.data}
        />
      )}
    </Formik>
  );
}

function CreateExpenseFormFormik({formik, categoryId, categories}) {
  const {setFieldValue} = formik;
  const navigation = useNavigation();

  useEffect(
    function () {
      if (categoryId) {
        setFieldValue('category', categoryId);
      }
    },
    [categoryId, setFieldValue]
  );

  function gotoSelectCategory() {
    navigation.navigate('ExpensesSelectCategory', {categories});
  }

  return (
    <View style={style}>
      <Text>Add expense</Text>
      <View>
        <View>
          <Text>Title:</Text>
          <TextInput
            value={formik.values.title}
            onChangeText={formik.handleChange('title')}
            onBlur={formik.handleBlur('title')}
          />
          {formik.touched.title && <Text>{formik.errors.title}</Text>}
        </View>
        <View>
          <Text>Amount:</Text>
          <TextInput
            keyboardType="numeric"
            value={formik.values.amount}
            onChangeText={formik.handleChange('amount')}
            onBlur={formik.handleBlur('amount')}
          />
          {formik.touched.amount && <Text>{formik.errors.amount}</Text>}
        </View>
        <View>
          <TouchableOpacity onPress={gotoSelectCategory}>
            <Text>Seleccionar categoría</Text>
          </TouchableOpacity>
          {formik.values.category !== '' && <Text>{formik.values.category}</Text>}
        </View>
        <View>
          <Button onPress={formik.handleSubmit} title="Enviar" />
        </View>
      </View>
    </View>
  );
}
