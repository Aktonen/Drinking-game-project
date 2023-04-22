import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        padding: 10
    },

    startButton: {
        borderWidth: 2,
        borderRadius: 10,
        margin: 20,
        width: 160,
        height: 50,
        justifyContent: "center",
    },

    buttonText: {
        color: "white",
        padding: 5,
        textAlign: "center",
        fontSize: 20

    },

    playerInput: {
        borderWidth: 1,
        width: 200,
        height: 50,
        justifyContent: "center"
    },

    enterPlayer: {
        textAlign: "center",
        fontSize: 20
    },

    gameScreen: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },

    gameImage: {
        width: "50%",
        height: "50%",
        aspectRatio: 1,
        resizeMode: "stretch",
    },

    gameArrowRight: {
        position: "absolute", right: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    gameArrowLeft: {
        position: "absolute", left: 20,
        justifyContent: "center",
        alignItems: "center"
    },

});