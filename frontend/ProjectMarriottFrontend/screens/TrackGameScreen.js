import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import StandardHeader from "../components/StandardHeader";
import {colorGold, colorGreen, colorMahjongPaper} from "../StyleConstants";
import { connect } from 'react-redux';

const styles = require('../StandardStyle');
const screenWidth = Dimensions.get('window').width;

class TrackGameScreen extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <StandardHeader headerText={this.props.roundName}/>
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
                                }}
                            >

                                <Text
                                    style={{
                                        color: colorGreen,
                                        fontWeight: 'bold',
                                        fontSize: 64
                                    }}
                                >
                                    东
                                </Text>

                            </View>
                        </View>

                        <Text
                            style={{
                                fontSize: 24,
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
                                    { rotate: '-90deg' }
                                ],
                            }}
                        >
                            DHo
                        </Text>

                        <Text
                            style={{
                                fontSize: 24,
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
                            Jarvin
                        </Text>

                        <Text
                            style={{
                                fontSize: 24,
                                textAlign: 'center',
                                color: colorGreen,
                                fontWeight: 'bold',
                                alignSelf: 'flex-start',
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
                                    { rotate: '90deg' }
                                ],
                            }}
                        >
                            Muthukumar
                        </Text>

                        <Text
                            style={{
                                fontSize: 24,
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
                            TestTest
                        </Text>

                        <Text
                            style={{
                                fontSize: 24,
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
                                transform: [ { rotate: '180deg' } ]
                            }}
                        >
                            Steph
                        </Text>

                    </View>

                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ currentUserId, currentRoundId, currentWindId, currentGameId }) => ({ currentUserId, currentGameId });

export default connect(mapStateToProps)(TrackGameScreen);