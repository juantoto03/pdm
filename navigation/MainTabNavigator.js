import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AddUserScreen from '../screens/AddUserScreen';
import AddDeviceScreen from '../screens/AddDeviceScreen';
import RegisterDeviceScreen from '../screens/RegisterDeviceScreen';
import AssignScreen from '../screens/AssignScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DeleteScreen from '../screens/DeleteScreen';

const AddUserStack = createStackNavigator({
  AddUser: AddUserScreen,
});

AddUserStack.navigationOptions = {
  tabBarLabel: 'Add User',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const RegisterDeviceStack = createStackNavigator({
  RegisterDevice: RegisterDeviceScreen,
});

RegisterDeviceStack.navigationOptions = {
  tabBarLabel: 'Register Device',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AddDeviceStack = createStackNavigator({
  AddDevice: AddDeviceScreen,
});

AddDeviceStack.navigationOptions = {
  tabBarLabel: 'Add Device',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AssignStack = createStackNavigator({
  Assign: AssignScreen,
});

AssignStack.navigationOptions = {
  tabBarLabel: 'To Assign',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const DeleteStack = createStackNavigator({
  Delete: DeleteScreen,
});

DeleteStack.navigationOptions = {
  tabBarLabel: 'Delete Device',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  RegisterDeviceStack,
  AddDeviceStack,
  AssignStack,
  DeleteStack,
  AddUserStack,
  SettingsStack,
});
