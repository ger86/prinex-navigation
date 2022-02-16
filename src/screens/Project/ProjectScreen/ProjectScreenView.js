import React from 'react';
import {Text, View} from 'react-native';
import useSetHeaderTitle from '#hooks/useSetHeaderTitle';

export default function ProjectScreenView({fetchStatus}) {
  useSetHeaderTitle(fetchStatus.state === 'success' ? fetchStatus.data.data.first_name : null);

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

  return <Text>Hola, soy el proyecto {fetchStatus.data.data.email}</Text>;
}
