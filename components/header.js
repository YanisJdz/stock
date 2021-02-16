import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      backgroundColor: '#ccc2a6',
      paddingTop: 40
    },
    title:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})