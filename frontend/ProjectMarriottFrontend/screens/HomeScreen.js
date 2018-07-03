import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Constants } from 'expo';
import HomeScreenButton from "../components/HomeScreenButton";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 16,
                        color: "#F9C375",
                        marginBottom: 36
                    }}>
                    MAHJONG
                </Text>
                <Image
                    style={styles.zhong}
                    source={require('../graphics/homescreen_zhong.png')}
                />
                <Text
                    style={styles.lastGame}>
                    LAST GAME
                </Text>
                <Text
                    style={styles.lastGameTime}>
                    8 HOURS AGO
                </Text>
                <View
                    style={styles.buttonContainerViewStyle}>
                    <HomeScreenButton
                        text="NEW GAME"
                        trigger={() => this.props.navigation.navigate("NewGame")}
                    />
                    <HomeScreenButton
                        text="HISTORY"
                        trigger={() => console.log("History")}
                    />
                    <HomeScreenButton
                        text="PLAYERS"
                        trigger={() => console.log("Players")}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#217E76",
        flexDirection: "column",
        alignItems: "center",
        padding: 12,
        paddingTop: Constants.statusBarHeight + 12
    },
    zhong: {
        height: 240,
        width: 240,
        marginBottom: 36
    },
    lastGame: {
        fontSize: 18,
        color: 'white'
    },
    lastGameTime: {
        fontSize: 16,
        color: "#F9C375",
        marginBottom: 36
    },
    buttonContainerViewStyle: {
        height: 240,
        width: 340,
        backgroundColor: "#F2F2F2",
        borderRadius: 24,
        elevation: 1,
        flexDirection: "column",
        padding: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonStyle: {
        height: 40,
        width: 200,
        color: "#217E76",
        margin: 8
    }
});