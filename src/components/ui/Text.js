import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

const styles = StyleSheet.create({
  light: {
    color: '#333'
  },
  dark: {
    color: '#fff'
  }
});

export default function Text({mode, ...rest}) {
  return <RNText style={mode === 'light' ? styles.light : styles.dark} {...rest} />;
}
