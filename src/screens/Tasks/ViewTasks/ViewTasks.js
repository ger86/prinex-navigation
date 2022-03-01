import {getDbConnection, getTasks} from '#/utils/db';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Button, FlatList, Text} from 'react-native';
import TaskItem from './components/TaskItem';
import {useFocusEffect} from '@react-navigation/native';
import {useDbContext} from '#/contexts/DbContext';

function renderTaskItem({item}) {
  return <TaskItem task={item} />;
}

export default function ViewTasks({navigation}) {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);
  const db = useDbContext();

  useLayoutEffect(
    function () {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => navigation.navigate('CreateTask')} title="Create" />
        )
      });
    },
    [navigation]
  );

  useFocusEffect(
    useCallback(
      function () {
        async function fetchDatabase() {
          try {
            if (db.current === null) {
              return;
            }
            const tasksFromDatabase = await getTasks(db);
            setTasks(tasksFromDatabase);
          } catch (e) {
            setError(e);
          }
        }
        fetchDatabase();
      },
      [db]
    )
  );

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return <FlatList data={tasks} renderItem={renderTaskItem} keyExtractor={(item) => item.id} />;
}
