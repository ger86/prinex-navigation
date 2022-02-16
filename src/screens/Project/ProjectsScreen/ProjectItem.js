import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PROJECT} from '../../../consts/screens';

const titleStyle = {
  fontSize: 32,
};

const containerStyle = {
  backgroundColor: '#c2fff9',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
};

export default function ProjectItem({project}) {
  const navigation = useNavigation();
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={function () {
          navigation.navigate(PROJECT, {projectId: project.id});
        }}>
        <Text style={titleStyle}>{project.email}</Text>
      </TouchableOpacity>
    </View>
  );
}
