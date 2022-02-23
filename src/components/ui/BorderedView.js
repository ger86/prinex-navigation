import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useModeContext} from '#/contexts/ModeContext';

const styles = StyleSheet.create({
  light: {
    borderColor: '#333',
    borderWidth: 5,
    borderStyle: 'solid'
  },
  dark: {
    borderColor: 'blue',
    borderWidth: 5,
    borderStyle: 'solid'
  }
});

export default function BorderedView({children}) {
  const {mode} = useModeContext();
  return <View style={mode === 'light' ? styles.light : styles.dark}>{children}</View>;
}
