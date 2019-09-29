import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Login from './Login';
import UserList from './UserList';
import AuthLoadingScreen from './AuthLoadingScreen';
import Theme from '../Utility/Theme';
// const Root = _ => <Login />;
//export default Root;

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({Home: Home});
const AuthStack = createStackNavigator(
  {SignIn: UserList},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Theme.PRIMARY_BACKGROUND_COLOR,
      },
      headerTintColor: Theme.PRIMARY_COLOR,
      headerTitleStyle: {
        fontWeight: '200',
        fontSize: 22,
      },
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'red', // Theme.PRIMARY_BACKGROUND_COLOR,
        },
        headerTitle: 'Home',
        headerTintColor: Theme.PRIMARY_BACKGROUND_COLOR,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  ),
);
