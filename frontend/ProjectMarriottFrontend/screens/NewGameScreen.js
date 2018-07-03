import React, { Component } from 'react';
import { View } from 'react-native';
import StandardTextInput from "../components/StandardTextInput";
import StandardHeader from "../components/StandardHeader";

const styles = require('../StandardStyle');

export default class NewGameScreen extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
                <StandardHeader headerText="NEW GAME"/>
                <View style={styles.mainContainer}>
                    <StandardTextInput title="GAME TITLE"/>
                </View>
            </View>
        );
    }
}