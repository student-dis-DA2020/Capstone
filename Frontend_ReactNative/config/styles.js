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
      alignSelf: 'stretch',
      paddingVertical: 4,
      margin: 2,
      color: 'white'
    },
    innerText:{
      padding: 6,
      color: 'black',
      fontSize: 18
    },
    listContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: colors.OFF_WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8
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
});

export default styles;