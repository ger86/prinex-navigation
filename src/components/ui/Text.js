import {useModeContext} from '#/contexts/ModeContext';
import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

const styles = StyleSheet.create({
  light: {
    color: 'black'
  },
  dark: {
    color: 'white'
  },
  text: {
    fontSize: 14,
    fontFamily: 'OpenSans'
  }
});

export default function Text({...rest}) {
  const {mode} = useModeContext();
  return <RNText style={[styles.text, mode === 'light' ? styles.light : styles.dark]} {...rest} />;
}
