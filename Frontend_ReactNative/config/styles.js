import { StyleSheet } from 'react-native'
import colors from './colors';
 

const styles = StyleSheet.create({
    card: {
      borderRadius: 6, 
      elevation: 6,
      backgroundColor: 'white',
      shadowOffset: { width: 3, height: 3 },
      shadowColor: colors.BLUE,
      shadowOpacity: 0.3,
      shadowRadius: 2,    
      marginHorizontal: 4,
      marginVertical: 6
    },
    mainContainer: {
      flex: 1,
      backgroundColor: colors.OFF_WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    listItem:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 4,
      margin: 2,
      color: 'white'
    },
    textRow: {
      flex: 10,
      flexDirection: 'row',
      alignSelf: 'stretch'
    },
    rowItem: {
      flex: 3,
      alignSelf: 'stretch',
      padding: 6,
      color: 'black',
      fontSize: 18
    },
    innerText:{
      padding: 6,
      color: 'black',
      fontSize: 18
    },
    listContainer: {
      flex: 8,
      flexDirection: 'row',
      backgroundColor: colors.OFF_WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
    addCarFormContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      padding: 5,
      flexWrap: 'wrap',
      backgroundColor: colors.OFF_WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    toolbarContainer: {
      flex: 1,
      backgroundColor: '#F1FAEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    addCarButton:{
      alignContent: 'center',
      justifyContent: 'center',
      marginRight:5,
      marginLeft:5,
      marginTop:5,
      marginBottom:5,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor: colors.BLUE,
      borderRadius:5,
      borderWidth: 1,
      borderColor:colors.DARK_BLUE 
    },
    buttonText:{
      color:'white',
      textAlign:'center',
      fontSize: 20,
      padding: 5,
    }
});

export default styles;