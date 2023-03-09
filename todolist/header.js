import react from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
  return (
    <View style={styles.headerContainer}>
<Text style={styles.heading}>My Todos</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'black',
        margin:30,
        textAlign:'center',
padding:20,

    },
    heading:{
        color:"white",
        fontSize:25,
        textAlign:'center',

        
    }
})
