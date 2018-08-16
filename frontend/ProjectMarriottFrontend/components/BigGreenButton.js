import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {colorGreen, colorMahjongPaper} from "../StyleConstants";

export default class BigGreenButton extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.trigger}
                style={style.touchableOpacityStyle}>
                <View
                    style={{
                        flexDirection: 'row',
                        borderRadius: 25,
                        height: 50,
                        width: this.props.width,
                        alignItems: 'center',
                        backgroundColor: colorGreen
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 16,
                            color: this.props.textColor,
                            fontWeight: "bold",
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    touchableOpacityStyle: {
        margin: 8,
        marginLeft: 12,
        marginRight: 12,
        alignItems: "center"
    },
    imageBackgroundStyle: {
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});