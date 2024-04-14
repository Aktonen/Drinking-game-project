import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbc3e',
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
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
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

  // PlayerList styles

  flatListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#ffbc3e',
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
    backgroundColor: '#fdd282', // This is also tied to playerList.js icon.button
    minWidth: 100,
  },

  playerName: {
    fontSize: 20,
    marginVertical: 5,
  },

  // playerNameButton: {
  //   fontWeight: '500', // Fix this
  // },

});
