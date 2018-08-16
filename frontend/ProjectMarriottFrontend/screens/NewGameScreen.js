import React, {Component} from 'react';
import {View} from 'react-native';
import StandardTextInput from "../components/StandardTextInput";
import StandardHeader from "../components/StandardHeader";
import StandardSwitcher from "../components/StandardSwitcher";
import StandardSlider from "../components/StandardSlider";
import BigGreenButton from "../components/BigGreenButton";
import {colorGold} from "../StyleConstants";
import StandardPicker from "../components/StandardPicker";

const styles = require('../StandardStyle');

const choicePlayers =
    [
        {
            value: '1',
            label: 'Jarvin',
        },
        {
            value: '2',
            label: 'DHo',
        },
        {
            value: '3',
            label: 'Rach',
        },
        {
            value: '4',
            label: 'Steph',
        }
    ];


export default class NewGameScreen extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
                <StandardHeader headerText="NEW GAME"/>
                <View style={styles.mainContainer}>
                    <StandardTextInput fieldName="GAME TITLE"/>
                    <StandardSwitcher
                        fieldName="SHOOTER PAY"
                        trueVal="Shooter Pay"
                        falseVal="Non Shooter Pay"
                        default={false}
                    />
                    <StandardSlider
                        fieldName="BET AMOUNT"
                        minVal="0.10"
                        maxVal="5.00"
                        initVal="0.50"
                        step="0.10"
                    />
                    <StandardSlider
                        fieldName="ZIMO BONUS"
                        minVal="0.10"
                        maxVal="5.00"
                        initVal="2.00"
                        step="0.10"
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'stretch',
                            justifyContent: 'space-between',
                            alignItems: 'stretch'
                        }}
                    >
                        <StandardPicker
                            fieldName="North Player"
                            choices={ choicePlayers }
                            defaultId={1}
                        />

                        <StandardPicker
                            fieldName="East Player"
                            choices={ choicePlayers }
                            defaultId={1}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'stretch',
                            justifyContent: 'space-between',
                            alignItems: 'stretch'
                        }}
                    >
                        <StandardPicker
                            fieldName="West Player"
                            choices={ choicePlayers }
                            defaultId={1}
                        />

                        <StandardPicker
                            fieldName="South Player"
                            choices={ choicePlayers }
                            defaultId={1}
                        />
                    </View>

                    <BigGreenButton
                        text="CREATE NEW GAME"
                        textColor={colorGold}
                        width={300}
                        trigger={() => this.props.navigation.navigate("TrackGame",
                            {
                                newGame: true,
                                players: {
                                    eastUser: {
                                        userId: 1,
                                        userName: 'Jarvin'
                                    },
                                    southUser: {
                                        userId: 2,
                                        userName: 'DHo'
                                    },
                                    westUser: {
                                        userId: 3,
                                        userName: 'Rach'
                                    },
                                    northUser: {
                                        userId: 4,
                                        userName: 'Steph'
                                    }
                                },
                                status: {
                                    currentWind: 'north',
                                    currentGameInWind: 'north',
                                    repeat: 0
                                },
                                settings: {
                                    gameTitle: 'Hello'
                                }
                            })}
                    />
                </View>
            </View>
        );
    }
}