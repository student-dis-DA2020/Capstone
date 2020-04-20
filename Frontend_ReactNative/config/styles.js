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
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingVertical: 4,
      margin: 2,
      color: 'white'
    },
    textRow: {
      flexDirection: 'row',
    },
    rowItem: {
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      fontSize: 18
    },
    innerText:{
      padding: 6,
      color: 'black',
      fontSize: 18
    },
    listContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: colors.OFF_WHITE,
      padding: 5,
    },
    addCarFormContainer: {
      flexDirection: 'row',
      padding: 5,
      flexWrap: 'wrap',
      backgroundColor: colors.LIGHT_BLUE,
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
    cardButton:{
      borderRadius: 16, 
      elevation: 6,
      backgroundColor: 'white',
      shadowOffset: { width: 3, height: 3 },
      shadowColor: colors.BLUE,
      shadowOpacity: 0.3,
      shadowRadius: 2,    
      marginHorizontal: 4,
      marginVertical: 6,
      padding:8
    },
    buttonText:{
      color:'white',
      textAlign:'center',
      fontSize: 20,
      padding: 5,
    }
});

export default styles;