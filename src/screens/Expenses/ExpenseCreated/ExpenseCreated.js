import React, {useLayoutEffect} from 'react';
import {Button, Text, View} from 'react-native';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

export default function ExpenseCreated({navigation, route}) {
  const values = route.params;

  useLayoutEffect(
    function () {
      navigation.setOptions({
        headerLeft: () => <Button onPress={() => navigation.goBack()} title="Cerrar" />
      });
    },
    [navigation]
  );
  return (
    <View style={style}>
      <Text>Gasto añadido!!</Text>
      <Text>Title: {values.title}</Text>
      <Text>Amount: {values.amount}</Text>
      <Text>Category: {values.category}</Text>
    </View>
  );
}
