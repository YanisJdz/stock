import React from "react";
import { StyleSheet, View, Text} from "react-native";

const footer = () =>  {   
    return (
        <View style={styles.footer}>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      height: 10,
      backgroundColor: '#ccc2a6',
      paddingTop: 40,
      marginTop: 20
    }
})

export default footer;