import React, { Component } from 'react';
import { View } from 'react-native';

export class RoundedRectangle extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View
                backgroundColor={ this.props.backgroundColor }
                borderRadius={12}
                borderColor={"#F9C375"}
                borderStyle={"solid"}
                borderWidth={3}
            >
                { this.props.children }
            </View>
        );
    }
}
