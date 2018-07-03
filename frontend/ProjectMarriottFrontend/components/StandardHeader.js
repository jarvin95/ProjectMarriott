import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StandardTextInput from "../components/StandardTextInput";

const styles = require('../StandardStyle');

export default class StandardHeader extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.headerText}</Text>
            </View>
        );
    }
}