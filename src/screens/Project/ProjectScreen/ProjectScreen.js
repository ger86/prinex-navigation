import React from 'react';
import useFetch from '#hooks/useFetch';
import ProjectScreenView from './ProjectScreenView';

export default function ProjectScreen({route}) {
  const {projectId} = route.params;
  const fetchStatus = useFetch(`https://reqres.in/api/users/${projectId}`);

  return <ProjectScreenView fetchStatus={fetchStatus} />;
}
