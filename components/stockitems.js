import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function stockitems({item}) {
    return (
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 10,
        marginTop:16,
        borderColor:'#ccc2a6',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})