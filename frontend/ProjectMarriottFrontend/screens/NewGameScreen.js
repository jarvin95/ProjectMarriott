import React, {Component} from 'react';
import {View} from 'react-native';
import StandardTextInput from "../components/StandardTextInput";
import StandardHeader from "../components/StandardHeader";
import StandardSwitcher from "../components/StandardSwitcher";
import StandardSlider from "../components/StandardSlider";
import BigGreenButton from "../components/BigGreenButton";
import {colorGold} from "../StyleConstants";
import StandardPicker from "../components/StandardPicker";

const playerList = require('../reducers/player_list');
const styles = require('../StandardStyle');

const choicePlayers = playerList.map((player) => {
    return {
        value: player.id,
        label: player.name,
    }
});

export default class NewGameScreen extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
                <StandardHeader headerText="NEW GAME"/>
                <View style={styles.mainContainer}>
                    <StandardTextInput
                        ref={ (textInputRoundTitle) => { this.textInputRoundTitle = textInputRoundTitle; } }
                        fieldName="ROUND TITLE"
                    />
                    <StandardSwitcher
                        ref={ (switcherShooterPay) => { this.switcherShooterPay = switcherShooterPay; } }
                        fieldName="SHOOTER PAY"
                        trueVal="Shooter Pay"
                        falseVal="Non Shooter Pay"
                        default={false}
                    />
                    <StandardSlider
                        ref={ (sliderBetAmount) => { this.sliderBetAmount = sliderBetAmount; } }
                        fieldName="BET AMOUNT"
                        minVal="0.10"
                        maxVal="5.00"
                        initVal="0.50"
                        step="0.10"
                        prefix="$"
                    />
                    <StandardSlider
                        ref={ (sliderZimoBonus) => { this.sliderZimoBonus = sliderZimoBonus; }}
                        fieldName="ZIMO BONUS"
                        minVal="0.10"
                        maxVal="5.00"
                        initVal="2.00"
                        step="0.10"
                        prefix="$"
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
                            ref={ (pickerNorth) => { this.pickerNorth = pickerNorth; } }
                            fieldName="North Player"
                            choices={ choicePlayers }
                            defaultId={1}
                        />

                        <StandardPicker
                            ref={ (pickerEast) => { this.pickerEast = pickerEast; } }
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
                            ref={ (pickerWest) => { this.pickerWest = pickerWest; } }
                            fieldName="West Player"
                            choices={ choicePlayers }
                            defaultId={1}
                        />

                        <StandardPicker
                            ref={ (pickerSouth) => { this.pickerSouth = pickerSouth; } }
                            fieldName="South Player"
                            choices={ choicePlayers }
                            defaultId={1}
                        />
                    </View>

                    <BigGreenButton
                        text="CREATE NEW GAME"
                        textColor={colorGold}
                        width={300}
                        trigger={() => {
                            const payload = {
                                settings: {
                                    roundTitle: this.textInputRoundTitle.state.inputText,
                                    shooterPay: this.switcherShooterPay.state.switch,
                                    betAmount: this.sliderBetAmount.state.value,
                                    zimoBonus: this.sliderZimoBonus.state.value,
                                },
                                players: {
                                    eastUser: {
                                        userId: this.pickerEast.state.selectedValue
                                    },
                                    southUser: {
                                        userId: this.pickerSouth.state.selectedValue
                                    },
                                    westUser: {
                                        userId: this.pickerWest.state.selectedValue
                                    },
                                    northUser: {
                                        userId: this.pickerNorth.state.selectedValue
                                    }
                                },
                                status: {
                                    currentWind: 'east',
                                    currentGameInWind: 'east',
                                    repeat: 0
                                },
                            };
                            this.props.navigation.navigate("TrackGame", payload);
                        }}
                    />
                </View>
            </View>
        );
    }
}