import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Expo from 'expo';
import { Constants } from 'expo';
import BigGreenButton from "../components/BigGreenButton";
import {colorMahjongPaper} from "../StyleConstants";
import bigZhong from '../graphics/homescreen_zhong.png';

const cacheImages = (images) => {
    return images.map(image => {
        if (typeof(image) === 'string') {
            return Image.prefetchImage(image)
        }
        else {
            return Expo.Asset.fromModule(image).downloadAsync();
        }
    })
};

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            appIsReady: false,
        };
    }

    componentWillMount() {
        this._loadAssetAsync();
    }

    async _loadAssetAsync() {
        const imageAssets = cacheImages([bigZhong]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true});
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
                    source={bigZhong}
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
                    <BigGreenButton
                        text="NEW GAME"
                        textColor={colorMahjongPaper}
                        trigger={() => this.props.navigation.navigate("NewGame")}
                    />
                    <BigGreenButton
                        text="HISTORY"
                        textColor={colorMahjongPaper}
                        trigger={() => console.log("History")}
                    />
                    <BigGreenButton
                        text="PLAYERS"
                        textColor={colorMahjongPaper}
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
        padding: 16,
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