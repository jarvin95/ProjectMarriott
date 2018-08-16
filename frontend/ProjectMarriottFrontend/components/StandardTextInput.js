import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { colorGold, colorGreen, colorMahjongPaper } from "../StyleConstants";

export default class StandardTextInput extends Component {
    constructor(props) {
        super(props);
        this.props = props;;
    }

    state = {
        inputText: ""
    };

    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    padding: 8
                }}
                margin={5}
                marginTop={10}
            >
                <Text
                    style={{
                        fontSize: 12,
                        textAlign: 'left',
                        color: colorGreen,
                        fontWeight: 'bold',
                        alignContent: 'flex-start',
                        alignSelf: 'flex-start',
                        position: 'absolute',
                        backgroundColor: colorMahjongPaper,
                        paddingLeft: 4,
                        paddingRight: 4,
                        marginLeft: 20,
                        paddingTop: 1.5,
                        zIndex: 3
                    }}
                >
                    { this.props.fieldName }
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: colorGold,
                        borderWidth: 1.5,
                        borderRadius: 12,
                        height: 48,
                        alignSelf: 'stretch',
                        alignItems: 'center',
                        flex: 1,
                        zIndex: 2
                    }}
                >
                    <TextInput
                        style={{
                            textAlign: 'center',
                            fontSize: 18,
                            flexDirection: 'row',
                            flex: 1,
                            color: colorGreen
                        }}
                        underlineColorAndroid="transparent"
                        placeholder={ this.props.placeholder }
                        onChangeText={(text) => { this.setState({ inputText: text })}}
                    />
                </View>
            </View>
        );
    }
}
