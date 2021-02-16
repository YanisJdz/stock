import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert, View} from 'react-native'

const StockItems = ({item}) => {
    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={alertBtn}>
                    <Text style={styles.items}>{item.article} (Qte:{item.quantity})</Text>
                </TouchableOpacity>
            </View>
            )
}
const alertBtn = ({item}) =>
Alert.alert(
  "Salut",
  "Mélyne",
  [
    {
      text: "Ask me later",
      onPress: () => console.log("Ask me later pressed")
    },
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);

const styles = StyleSheet.create({
    container: {
        height: 50
    },
    items:{
        padding: 25,
        marginTop:16,
        borderColor:'#ccc2a6',
        borderWidth: 1
    }
})

export default StockItems