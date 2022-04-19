import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './activity/src/screens/LoginScreen';
import SearchScreen from './activity/src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigattionOptions: {
      title: 'Login '
    }
  }
);

export default createAppContainer(navigator);
