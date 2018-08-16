import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import StandardHeader from "../components/StandardHeader";
import {colorGold, colorGreen, colorMahjongPaper} from "../StyleConstants";
import { connect } from 'react-redux';
import {resolveDirection, resolvePlayer} from "../StandardFunctionalities";

const styles = require('../StandardStyle');
const screenWidth = Dimensions.get('window').width;

class TrackGameScreen extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(JSON.stringify(this.props.navigation.state.params));
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <StandardHeader headerText={this.props.navigation.state.params.settings.roundTitle}/>
                <View style={styles.mainContainer}>

                    <View
                        style={{
                            padding: 0,
                            margin: 0,
                            flexDirection: 'column'
                        }}
                    >

                        <View
                            style={{
                                height: screenWidth*0.8,
                                width: screenWidth*0.8,
                                borderColor: colorGold,
                                borderWidth: 2,
                                borderRadius: 18,
                                marginVertical: screenWidth*0.08,
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2,
                            }}
                        >
                            <View
                                style={{
                                    height: screenWidth*0.40,
                                    width: screenWidth*0.40,
                                    borderColor: colorGold,
                                    borderWidth: 8,
                                    borderRadius: screenWidth*0.20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 4,
                                }}
                            >

                                <Text
                                    style={{
                                        color: colorGreen,
                                        fontWeight: 'bold',
                                        fontSize: 64
                                    }}
                                >
                                    { resolveDirection(this.props.navigation.state.params.status.currentWind) }
                                </Text>

                            </View>
                        </View>

                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: colorGreen,
                                fontWeight: 'bold',
                                alignSelf: 'flex-end',
                                position: 'absolute',
                                backgroundColor: colorMahjongPaper,
                                zIndex: 3,
                                borderColor: colorGold,
                                borderWidth: 1.5,
                                borderRadius: 16,
                                paddingLeft: 8,
                                paddingRight: 8,
                                transform: [
                                    { translateY: screenWidth*0.45 },
                                    { translateX: screenWidth*0.08 },
                                ],
                            }}
                        >
                            { resolvePlayer(this.props.navigation.state.params.players.eastUser.userId) }
                        </Text>

                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: colorGreen,
                                fontWeight: 'bold',
                                bottom: 0,
                                alignSelf: 'center',
                                position: 'absolute',
                                backgroundColor: colorMahjongPaper,
                                marginBottom:  screenWidth*0.044,
                                zIndex: 3,
                                borderColor: colorGold,
                                borderWidth: 1.5,
                                borderRadius: 16,
                                paddingLeft: 8,
                                paddingRight: 8
                            }}
                        >
                            { resolvePlayer(this.props.navigation.state.params.players.southUser.userId) }
                        </Text>

                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: colorGreen,
                                fontWeight: 'bold',
                                left: -this.leftOffset,
                                position: 'absolute',
                                backgroundColor: colorMahjongPaper,
                                zIndex: 3,
                                borderColor: colorGold,
                                borderWidth: 1.5,
                                borderRadius: 16,
                                paddingLeft: 8,
                                paddingRight: 8,
                                transform: [
                                    { translateY: screenWidth*0.45 },
                                    { translateX: -screenWidth*0.08 },
                                ],
                            }}
                        >
                            { resolvePlayer(this.props.navigation.state.params.players.westUser.userId) }
                        </Text>

                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: colorGreen,
                                fontWeight: 'bold',
                                alignSelf: 'center',
                                position: 'absolute',
                                backgroundColor: colorMahjongPaper,
                                marginTop: screenWidth*0.044,
                                zIndex: 3,
                                borderColor: colorGold,
                                borderWidth: 1.5,
                                borderRadius: 16,
                                paddingLeft: 8,
                                paddingRight: 8,
                            }}
                        >
                            { resolvePlayer(this.props.navigation.state.params.players.northUser.userId) }
                        </Text>

                    </View>

                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ currentUserId, currentRoundId, currentWindId, currentGameId }) => ({ currentUserId, currentGameId });

export default connect(mapStateToProps)(TrackGameScreen);