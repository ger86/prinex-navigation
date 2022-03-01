import React, {forwardRef} from 'react';
import {TextInput as RNTextInput} from 'react-native';

export default forwardRef(function TextInput(props, ref) {
  return <RNTextInput {...props} ref={ref} />;
});
