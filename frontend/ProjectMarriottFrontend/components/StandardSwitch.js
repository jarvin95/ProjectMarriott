import React, {Component} from 'react';
import {Text, Switch, View, StyleSheet } from 'react-native';

export default class StandardSwitch extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { switch: false };
    }

    gameModeText = () => {
        return this.props.title + ": " + (this.state.switch ? this.props.trueVal : this.props.falseVal);
    };

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.gameModeText()}</Text>
                <Switch
                    tintColor={styles.switchStyle.color}
                    onTintColor={styles.switchStyle.color}
                    value={ this.state.switch }
                    onValueChange={ () => { this.setState({ switch: !this.state.switch }) } }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 4,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    switchStyle: {
        color: "#217E76"
    },
    textStyle: {
        color: "#217E76",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left"
    }
});