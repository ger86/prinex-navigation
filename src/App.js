import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-ionicons';
import ProjectsScreen from './screens/Project/ProjectsScreen';
import ProjectScreen from './screens/Project/ProjectScreen';
import ContactScreen from './screens/ContactScreen';
import SettingsScreen from './screens/SettingsScreen';

const ProjectsStack = createNativeStackNavigator();

function ProjectsStackScreen() {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          headerTitle: 'Projects',
        }}
      />
      <ProjectsStack.Screen
        name="Project"
        component={ProjectScreen}
        options={{
          headerTitle: 'Project',
        }}
      />
    </ProjectsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#264653',
          },
          tabBarActiveTintColor: '#FFFFFF',
        }}>
        <Tab.Screen
          name="ProjectsTab"
          component={ProjectsStackScreen}
          options={{
            headerShown: false,
            title: 'Proyectos',
            tabBarIcon: ({color, size}) => (
              <Icon name="folder-open" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ContactTab"
          component={ContactScreen}
          options={{
            title: 'Contacto',
            tabBarIcon: ({color, size}) => (
              <Icon name="send" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsScreen}
          options={{
            title: 'Ajustes',
            tabBarIcon: ({color, size}) => (
              <Icon name="cog" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
