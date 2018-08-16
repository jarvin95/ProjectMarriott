import React, {Component} from 'react';
import {Text, Switch, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colorFadedGreen, colorGold, colorGreen, colorMahjongPaper} from "../StyleConstants";

export default class StandardSwitcher extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {switch: this.props.default};

        if (this.props.trueVal === undefined) {
            this.props.trueVal = 'trueVal';
        }

        if (this.props.falseVal === undefined) {
            this.props.falseVal = 'falseVal';
        }
    }

    trigger(boolButtonPressed) {
        this.setState({ switch: boolButtonPressed});
    }

    buttonBackgroundColor(boolButtonPressed) {
        if (boolButtonPressed === this.state.switch) {
            return colorGreen;
        }
        else {
            return 'transparent';
        }
    }

    buttonTextColor(boolButtonPressed) {
        if (boolButtonPressed === this.state.switch) {
            return colorGold;
        }
        else {
            return colorGreen;
        }
    }

    buttonFontWeight(boolButtonPressed) {
        if (boolButtonPressed === this.state.switch) {
            return "bold";
        }
        else {
            return "normal";
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                alignSelf: 'stretch',
                padding: 8
            }}>
                <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'center',
                        color: colorGreen,
                        fontWeight: 'bold',
                        borderColor: colorGold
                    }}
                >
                    {this.props.fieldName}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'stretch',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        onPress={() => this.trigger(true)}

                    >
                        <Text
                            style={{
                                borderColor: colorGold,
                                borderRadius: 12,
                                borderWidth: 1.5,
                                fontSize: 16,
                                textAlign: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                alignSelf: 'center',
                                textAlignVertical: 'center',
                                height: 40,
                                backgroundColor: this.buttonBackgroundColor(true),
                                color: this.buttonTextColor(true),
                                fontWeight: this.buttonFontWeight(true)
                            }}
                        >
                            {this.props.trueVal}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        onPress={() => this.trigger(false)}
                    >
                        <Text
                            style={{
                                borderColor: colorGold,
                                borderRadius: 12,
                                borderWidth: 1.5,
                                fontSize: 16,
                                textAlign: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                alignSelf: 'center',
                                textAlignVertical: 'center',
                                height: 40,
                                backgroundColor: this.buttonBackgroundColor(false),
                                color: this.buttonTextColor(false),
                                fontWeight: this.buttonFontWeight(false)
                            }}
                        >
                            {this.props.falseVal}
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: 40,
    }
});
