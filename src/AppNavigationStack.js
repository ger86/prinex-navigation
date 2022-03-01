import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-ionicons';
import CreateExpenseForm from './screens/Expenses/CreateExpenseForm';
import SelectCategory from './screens/Expenses/CreateExpenseForm/SelectCategory';
import ExpenseCreated from './screens/Expenses/ExpenseCreated';
import ProjectsScreen from './screens/Project/ProjectsScreen';
import ProjectScreen from './screens/Project/ProjectScreen';
import ContactScreen from './screens/Contact/ContactScreen';
import SettingsScreen from './screens/SettingsScreen';
import ThanksScreen from './screens/Contact/ThanksScreen';
import {EXPENSE_CREATED, PROJECT, PROJECTS} from './consts/screens';
import LoginScreen from './screens/LoginScreen';
import {useUserContext} from './contexts/UserContext';
import {Text, View} from 'react-native';
import ViewTasks from './screens/Tasks/ViewTasks';
import CreateTask from './screens/Tasks/CreateTask';

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

const TasksStack = createNativeStackNavigator();

function TasksStackScreen() {
  return (
    <TasksStack.Navigator>
      <TasksStack.Screen name="ViewTasks" component={ViewTasks} />
      <TasksStack.Screen name="CreateTask" component={CreateTask} />
    </TasksStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function LoggedScreen() {
  return (
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
        name="TaskTab"
        component={TasksStackScreen}
        options={{
          headerShown: false,
          title: 'Tasks',
          tabBarIcon: ({color, size}) => <Icon name="cog" size={size} color={color} />
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
  );
}

const AnonymousStackNavigator = createNativeStackNavigator();

function AnonymousStackScreen() {
  return (
    <AnonymousStackNavigator.Navigator>
      <AnonymousStackNavigator.Screen name="Login" component={LoginScreen} />
    </AnonymousStackNavigator.Navigator>
  );
}

export default function AppNavigationStack() {
  const {user, isLoading} = useUserContext();
  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user === null && <AnonymousStackScreen />}
      {user !== null && <LoggedScreen />}
    </NavigationContainer>
  );
}
