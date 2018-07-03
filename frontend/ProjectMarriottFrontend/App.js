import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import NewGameScreen from "./screens/NewGameScreen";

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        NewGame: {
            screen: NewGameScreen
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });