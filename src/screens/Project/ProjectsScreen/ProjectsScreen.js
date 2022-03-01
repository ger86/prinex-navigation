import React from 'react';
import {FlatList} from 'react-native';
import useFetch from '#/hooks/useFetch';
import ProjectItem from './ProjectItem';
import ApiStatus from '#/components/ApiStatus';

function renderProjectItem({item}) {
  return <ProjectItem project={item} />;
}

export default function ProjectsScreen() {
  const fetchStatus = useFetch('https://reqres.in/api/users');

  return (
    <ApiStatus fetchStatus={fetchStatus}>
      {(data) => (
        <FlatList
          data={data.data}
          keyExtractor={(item) => item.id}
          renderItem={renderProjectItem}
        />
      )}
    </ApiStatus>
  );
}
