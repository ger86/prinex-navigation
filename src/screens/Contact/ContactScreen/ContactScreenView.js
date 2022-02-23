import BorderedView from '#/components/ui/BorderedView';
import {useModeContext} from '#/contexts/ModeContext';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

export default function ContactScreenView({formik}) {
  const {mode} = useModeContext();
  console.log('ContactScreenView');
  return (
    <View style={style}>
      <Text>Contact {mode}</Text>
      <BorderedView>
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
      </BorderedView>
    </View>
  );
}
