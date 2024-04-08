import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  startButton: {
    borderWidth: 2,
    margin: 20,
    width: 160,
    height: 50,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    padding: 5,
    textAlign: 'center',
    fontSize: 20,
  },

  playerInput: {
    borderWidth: 1,
    width: 200,
    height: 50,
    justifyContent: 'center',
  },

  enterPlayer: {
    textAlign: 'center',
    fontSize: 20,
  },

  gameScreen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  gameImage: {
    width: '50%',
    height: '50%',
    aspectRatio: 1,
    resizeMode: 'stretch',
  },

  gameArrowRight: {
    position: 'absolute',
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gameArrowLeft: {
    position: 'absolute',
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  playerName: {
    fontSize: 16,
    marginVertical: 5,
  },
});
