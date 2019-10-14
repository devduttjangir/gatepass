import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Login from './Login';
import UserList from './UserList';
import AuthLoadingScreen from './AuthLoadingScreen';
import Theme from '../Utility/Theme';
import AddUser from './AddUser';
// const Root = _ => <Login />;
//export default Root;

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(
  {Home: UserList},
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
const AddUserStack = createStackNavigator(
  {AddUser: AddUser},
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
const AuthStack = createStackNavigator(
  {SignIn: Login},
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
const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppStack,
    },
    AddUser: {
      screen: AddUserStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: RootStack,
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
