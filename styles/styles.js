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
        color: "black"
    },

    gameImage: {
        width: "100%",
        height: "100%",
        aspectRatio: 1,
    },

});