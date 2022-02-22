import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-ionicons';
import ProjectsScreen from './screens/Project/ProjectsScreen';
import ProjectScreen from './screens/Project/ProjectScreen';
import ContactScreen from './screens/Contact/ContactScreen';
import SettingsScreen from './screens/SettingsScreen';
import ThanksScreen from './screens/Contact/ThanksScreen';
import {PROJECT, PROJECTS} from './consts/screens';

const ProjectsStack = createNativeStackNavigator();

function ProjectsStackScreen() {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen
        name={PROJECTS}
        component={ProjectsScreen}
        options={{
          headerTitle: 'Projects'
        }}
      />
      <ProjectsStack.Screen
        name={PROJECT}
        component={ProjectScreen}
        options={{
          headerTitle: 'Project'
        }}
      />
    </ProjectsStack.Navigator>
  );
}

const ContactStack = createNativeStackNavigator();

function ContactStackScreen() {
  return (
    <ContactStack.Navigator>
      <ContactStack.Group>
        <ContactStack.Screen name="Contact" component={ContactScreen} />
      </ContactStack.Group>
      <ContactStack.Group screenOptions={{presentation: 'modal'}}>
        <ContactStack.Screen name="Thanks" component={ThanksScreen} />
      </ContactStack.Group>
    </ContactStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigationStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#264653'
          },
          tabBarActiveTintColor: '#FFFFFF'
        }}
      >
        <Tab.Screen
          name="ProjectsTab"
          component={ProjectsStackScreen}
          options={{
            headerShown: false,
            title: 'Usuarios',
            tabBarIcon: ({color, size}) => <Icon name="folder-open" size={size} color={color} />
          }}
        />
        <Tab.Screen
          name="ContactTab"
          component={ContactStackScreen}
          options={{
            headerShown: false,
            title: 'Contacto',
            tabBarIcon: ({color, size}) => <Icon name="send" size={size} color={color} />
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsScreen}
          options={{
            title: 'Ajustes',
            tabBarIcon: ({color, size}) => <Icon name="cog" size={size} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
