import React, {useLayoutEffect} from 'react';
import {Button, Text, View} from 'react-native';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

export default function ThanksScreen({navigation}) {
  useLayoutEffect(
    function () {
      navigation.setOptions({
        headerLeft: () => (
          <Button onPress={() => navigation.goBack()} title="Cerrar" />
        ),
      });
    },
    [navigation],
  );
  return (
    <View style={style}>
      <Text>Gracias!!</Text>
    </View>
  );
}
