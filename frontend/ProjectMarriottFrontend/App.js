import React, { Component } from 'react';
import {createStackNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import NewGameScreen from "./screens/NewGameScreen";
import TrackGameScreen from "./screens/TrackGameScreen";

import { Provider } from "react-redux";
import store from './store';

export default class App extends Component {
    render() {
        const MainNavigator = createStackNavigator(
            {
                Home: {
                    screen: HomeScreen
                },
                NewGame: {
                    screen: NewGameScreen
                },
                TrackGame: {
                    screen: TrackGameScreen
                }
            },
            {
                initialRouteName: 'Home',
                headerMode: 'none',
                navigationOptions: {
                    headerVisible: false,
                }
            });

        return (
            <Provider
                store={store}
            >
                <MainNavigator/>
            </Provider>
        );
    }
}



/*
export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        NewGame: {
            screen: NewGameScreen
        },
        GameTrack: {
            screen: TrackGameScreen
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
*/

