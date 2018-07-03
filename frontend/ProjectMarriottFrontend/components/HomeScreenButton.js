import React, { Component } from 'react';
import { Text, TouchableOpacity , ImageBackground, StyleSheet} from 'react-native';

export default class HomeScreenButton extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.trigger}
                style={style.touchableOpacityStyle}>
                <ImageBackground
                    source={require('../graphics/homescreen_button.png')}
                    style={style.imageBackgroundStyle}>
                    <Text style={style.buttonTextStyle}>{this.props.text}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    touchableOpacityStyle: {
        margin: 8,
        alignItems: "center"
    },
    imageBackgroundStyle: {
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonTextStyle: {
        textAlign: "center",
        fontSize: 16,
        color: "#F2F2F2",
        fontWeight: "bold"
    }
});