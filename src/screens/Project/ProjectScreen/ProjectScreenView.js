import React from 'react';
import {Text} from 'react-native';
import useSetHeaderTitle from '#hooks/useSetHeaderTitle';
import ApiStatus from '#/components/ApiStatus';

export default function ProjectScreenView({fetchStatus}) {
  useSetHeaderTitle(fetchStatus.state === 'success' ? fetchStatus.data.data.first_name : null);

  return (
    <ApiStatus fetchStatus={fetchStatus}>
      {(data) => <Text>Hola, soy el proyecto {data.data.email}</Text>}
    </ApiStatus>
  );
}
