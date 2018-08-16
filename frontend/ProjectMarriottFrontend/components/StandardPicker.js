import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';
import {colorFadedGreen, colorGold, colorGreen, colorMahjongPaper} from "../StyleConstants";

export default class StandardPicker extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { selectedValue: this.props.defaultId };
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    flex: 1,
                    padding: 8,
                    width: this.props.width
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
                        zIndex: 2,
                        paddingLeft: 12
                    }}
                >
                    <Picker
                        prompt={ this.props.fieldName }
                        selectedValue={ this.state.selectedValue }
                        style={{
                            flex: 1,
                        }}
                        mode='dropdown'
                        itemStyle={{
                            backgroundColor: colorGreen,
                            alignSelf: 'center',
                        }}
                        itemTextStyle={{
                            color: colorGreen,
                            textAlign: 'center',
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({ selectedValue: itemValue });
                        }}
                    >

                        {
                            this.props.choices.map((item) => {
                                return (
                                    <Picker.Item
                                        key={item.value}
                                        label={item.label}
                                        value={item.value}
                                    />
                                );
                            })
                        }

                    </Picker>
                </View>
            </View>
        );
    }
}

