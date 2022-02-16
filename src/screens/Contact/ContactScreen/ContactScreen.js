import React from 'react';
import {Button, Text, View} from 'react-native';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

export default function ContactScreen({navigation}) {
  return (
    <View style={style}>
      <Text>Contact</Text>
      <Button onPress={() => navigation.navigate('Thanks')} title="Enviar" />
    </View>
  );
}
