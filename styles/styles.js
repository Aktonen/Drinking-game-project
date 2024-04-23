import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbc3e',
    height: '100%',
    width: '100%',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    padding: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    backgroundColor: '#ffbb3ec5',
    borderRadius: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  textInput: {
    backgroundColor: '#ffbb3ec5',
    borderRadius: 10,
    height: 50,
    color: 'white',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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

  // Game screen styles

  gameWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gameScreen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  gameImage: {
    width: '70%',
    height: '50%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  gameArrow: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  gameArrowRight: {
    right: 20,
  },

  gameArrowLeft: {
    left: 20,
  },

  playerNameWrapperGame: {
    margin: 10,
    borderColor: 'white',
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 5,
    borderRadius: 7,
    minWidth: 70,
  },

  // PlayerList styles

  flatListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
  },

  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  headerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },

  playerNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    paddingLeft: 15,
    marginRight: 5,
    borderRadius: 7,
    minWidth: 100,
  },

  playerName: {
    fontSize: 20,
    marginVertical: 5,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

});
