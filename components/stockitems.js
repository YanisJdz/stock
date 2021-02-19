import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert, View} from 'react-native'

const StockItems = ({navigation, item}) => {
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
  "Nom article",
  "Quatité = ",
  [
    {
      text: "Modifier",
      onPress: () => console.log("Modify Pressed")
    },
    {
      text: "Annuler",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "Supprimer", onPress: () => console.log("Delete Pressed") }
  ],
  { cancelable: false }
);

const styles = StyleSheet.create({
    container: {
        height: 50, 
        width: 300,
        margin: 10
    },
    items:{
        padding: 25,
        textAlign: 'center',
        borderColor:'#ccc2a6',
        borderWidth: 1
    }
})

export default StockItems