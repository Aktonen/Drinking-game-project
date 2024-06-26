import { StyleSheet, Dimensions } from 'react-native';

let fullWidth = Dimensions.get('window').width; // full width
let fullHeight = Dimensions.get('window').height; // full height

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

  startScreenWrapper: {
    marginTop: 40,
  },

  title: {
    padding: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    backgroundColor: '#ffbb3ec5',
    borderRadius: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },

  handlePlayerContainer: {
    alignItems: 'center',
  },

  textInput: {
    backgroundColor: '#ffbb3ec5',
    borderRadius: 10,
    borderColor: 'red',
    height: 50,
    color: 'white',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    width: 200,
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
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
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
    width: fullWidth,
    height: fullHeight,
    paddingBottom: 61,
  },

  cardTitle: {
    color: 'white',
    fontFamily: 'TitanOne',
    fontSize: 40,
    paddingLeft: 15,
    paddingRight: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Subtle black shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    top: -30,
  },

  gameText: {
    color: 'white',
    fontFamily: 'TitanOne',
    fontSize: 25,
    paddingLeft: 15,
    paddingRight: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Subtle black shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  cardPressable: {
    height: '100%',
    width: fullWidth,
    justifyContent: 'center',
    alignItems: 'center',
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

  // Animation

  beerContainer: {
    backgroundColor: 'gold',
    width: fullWidth,
    bottom: 0,
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
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    paddingLeft: 2,
    paddingRight: 2,
  },


  // Card styles

  cardsUrgent: {
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },

  cardsCategory: {
    color: 'orange',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },

  cardsYouchoose: {
    color: 'white',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontSize: 30,
    textAlign: 'center',
  },

  cardsWaterfall: {
    color: '#31f5f5',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
});
