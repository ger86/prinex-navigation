import React from 'react';
import {Button, Text, View} from 'react-native';
import {PROJECT} from '../consts/screens';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

export default function SettingsScreen({navigation}) {
  return (
    <View style={style}>
      <Text>Settings</Text>
      <Button
        onPress={() =>
          navigation.navigate(PROJECT, {
            projectId: '4'
          })
        }
        title="Proyecto 4"
      />
    </View>
  );
}
