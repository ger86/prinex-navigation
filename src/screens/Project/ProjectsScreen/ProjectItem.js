import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const titleStyle = {
  fontSize: 32,
};

const containerStyle = {
  backgroundColor: '#c2fff9',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
};

export default function ProjectItem({project, navigation}) {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={function () {
          navigation.navigate('Project');
        }}>
        <Text style={titleStyle}>{project.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
