import {StyleSheet} from 'react-native';
import {Constants} from "expo";

module.exports = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    header: {
        backgroundColor: "#217E76",
        padding: 8,
        paddingTop: Constants.statusBarHeight,
        height: Constants.statusBarHeight + 50,
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontSize: 16,
        color: "#F9C375",
        textAlign: "center"
    },
    playerNameText: {
        fontSize: 18,
        color: "#217E76",
        textAlign: "center"
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        flexDirection: "column",
        alignItems: "center",
        padding: 16
    }
});