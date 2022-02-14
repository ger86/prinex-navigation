import React from 'react';
import {FlatList} from 'react-native';
import ProjectItem from './ProjectItem';

const projects = [
  {
    id: '1',
    title: 'First item',
  },
  {
    id: '2',
    title: 'Second item',
  },
  {
    id: '3',
    title: 'Third item',
  },
];

function renderProjectItem({item, navigation}) {
  return <ProjectItem project={item} navigation={navigation} />;
}

export default function ProjectsScreen({navigation}) {
  return (
    <FlatList
      data={projects}
      keyExtractor={item => item.id}
      renderItem={function ({item}) {
        return renderProjectItem({item, navigation});
      }}
    />
  );
}
