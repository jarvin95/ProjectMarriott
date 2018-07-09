import React, { Component } from 'react';
import { Text, ImageBackground, StyleSheet, Slider } from 'react-native';

export default class StandardSlider extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { value: 1 };
    }

    render() {
        return (
                <ImageBackground
                    source={require("../graphics/text_input.png")}
                    style={styles.imageBackgroundStyle}>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    <Slider
                        style={ styles.sliderStyle }
                        thumbTintColor={ styles.sliderStyle.color }
                        value={ this.state.value }
                        minimumValue={ this.props.minVal }
                        maximumValue={ this.props.maxVal }
                        step={ this.props.step }
                        onValueChange={(value) => { this.setState({value: value}) }}
                    />
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imageBackgroundStyle: {
        width: 360,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 8
    },
    titleStyle: {
        textAlign: "left",
        fontSize: 12,
        color: "#217E76",
        fontWeight: "bold",
        alignSelf: "flex-start",
        alignContent: "flex-start",
        backgroundColor: "#F2F2F2",
        paddingLeft: 4,
        paddingRight: 4,
        marginLeft: 20
    },
    sliderStyle: {
        color: "#F9C375"
    }
});