import React, {Component} from 'react';
import {Text, StyleSheet, Slider, View} from 'react-native';
import {colorGold, colorGreen, colorMahjongPaper} from "../StyleConstants";

export default class StandardSlider extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { value: 1 };
    }

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
                    {this.props.fieldName}
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

                    <Slider
                        thumbTintColor={colorGreen}
                        value={this.state.value}
                        minimumValue={parseFloat(this.props.minVal)}
                        maximumValue={parseFloat(this.props.maxVal)}
                        step={parseFloat(this.props.step)}
                        value={parseFloat(this.props.initVal)}
                        onValueChange={(value) => {
                            this.setState({value: value})
                        }}
                        style={{
                            flexDirection: 'row',
                            flex: 7
                        }}
                    />

                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'right',
                            flex: 1,
                            flexDirection: 'row',
                            alignSelf: 'center',
                            textAlignVertical: 'center',
                            height: 40,
                            color: colorGreen,
                            fontWeight: 'bold',
                            marginRight: 8
                        }}
                    >
                        {this.props.prefix}{(this.state.value).toFixed(2)}{this.props.suffix}
                    </Text>
                </View>
            </View>
        )
    }
}
