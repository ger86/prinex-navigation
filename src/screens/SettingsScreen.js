import React from 'react';
import {Button, Text, View} from 'react-native';
import {PROJECT} from '#/consts/screens';
import {useModeContext} from '#/contexts/ModeContext';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

export default function SettingsScreen({navigation}) {
  const {setCount} = useModeContext();

  console.log('Render Settings Screen');

  return (
    <View style={style}>
      <View>
        <Text>Settings</Text>
        <Button
          onPress={() =>
            navigation.navigate(PROJECT, {
              projectId: '4'
            })
          }
          title="Proyecto 4"
        />
        <Button onPress={() => setCount((c) => c + 1)} title="Cambiar modo" />
      </View>
    </View>
  );
}
