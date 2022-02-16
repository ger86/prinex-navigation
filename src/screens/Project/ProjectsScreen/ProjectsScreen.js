import React from 'react';
import {FlatList, Text, View} from 'react-native';
import useFetch from '#hooks/useFetch';
import ProjectItem from './ProjectItem';

function renderProjectItem({item}) {
  return <ProjectItem project={item} />;
}

export default function ProjectsScreen() {
  const fetchStatus = useFetch('https://reqres.in/api/users');

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
  return (
    <FlatList
      data={fetchStatus.data.data}
      keyExtractor={(item) => item.id}
      renderItem={renderProjectItem}
    />
  );
}
