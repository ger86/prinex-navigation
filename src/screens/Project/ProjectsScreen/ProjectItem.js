import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import Text from '#/components/ui/Text';
import {PROJECT} from '#/consts/screens';

const containerStyle = {
  backgroundColor: '#c2fff9',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16
};

export default function ProjectItem({project}) {
  const navigation = useNavigation();
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={function () {
          navigation.navigate(PROJECT, {projectId: project.id});
        }}
      >
        <Text>{project.email}</Text>
      </TouchableOpacity>
    </View>
  );
}
