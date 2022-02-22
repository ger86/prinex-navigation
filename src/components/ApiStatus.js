import React from 'react';
import {Text, View} from 'react-native';

export default function ApiStatus({fetchStatus, children}) {
  if (fetchStatus.state === 'loading') {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (fetchStatus.state === 'error') {
    return (
      <View>
        <Text>Error!</Text>
      </View>
    );
  }

  return children(fetchStatus.data);
}
