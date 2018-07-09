import React, { Component } from 'react';
import { View } from 'react-native';
import StandardTextInput from "../components/StandardTextInput";
import StandardHeader from "../components/StandardHeader";
import StandardSwitch from "../components/StandardSwitch";
import StandardSlider from "../components/StandardSlider";

const styles = require('../StandardStyle');

export default class NewGameScreen extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
                <StandardHeader headerText="NEW GAME"/>
                <View style={styles.mainContainer}>
                    <StandardTextInput title="GAME TITLE"/>
                    <StandardSwitch
                        title="SHOOTER PAY"
                        trueVal="Shooter Pay"
                        falseVal="Non Shooter Pay"
                    />
                    <StandardSlider
                        title="BET AMOUNT"
                        minVal="0.10"
                        maxVal="10.00"
                        step="0.10"
                    />
                </View>
            </View>
        );
    }
}