import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppDrawerNavigator from './DrawerContainer';
import AuthLoadingScreen from './AuthLoadingScreen';
import Login from '../../views/Login/Login';

const AppStack = createStackNavigator(
  { AppDrawerNavigator },
  {
    headerMode: 'none'
  }
);
const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      path: 'login'
    }
  },
  {
    headerMode: 'none'
  }
);
export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
