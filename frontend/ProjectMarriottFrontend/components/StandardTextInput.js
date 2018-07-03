import React, { Component } from 'react';
import { Text, TextInput, ImageBackground, StyleSheet} from 'react-native';

export default class StandardTextInput extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { text: "" };
    }

    render() {
        return (
            <ImageBackground
                source={require("../graphics/text_input.png")}
                style={styles.imageBackgroundStyle}>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    underlineColorAndroid="transparent"
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
        marginLeft: 16
    },
    textInputStyle: {
        textAlign: "center",
        fontSize: 16,
        color: "#333333"
    }
});