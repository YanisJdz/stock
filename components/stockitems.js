import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert, View} from 'react-native'

class StockItems extends React.Component {

  render() {
    const {item, deleteOneQuantity} = this.props

    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => alertBtn({item}, {deleteOneQuantity}) }>
              <Text style={styles.items}>{item.article} (Qte:{item.quantity})</Text>
          </TouchableOpacity>
      </View>
    )
  }          
}
const alertBtn = ({item}, {deleteOneQuantity}) =>
Alert.alert(
  item.article,
  "Quantité = "+item.quantity,
  [
    {
      text: "Modifier",
      onPress: () => console.log(item)
    },
    {
      text: "Annuler",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "Supprimer", onPress: () => deleteOneQuantity(item.key -1) }
  ],
  { cancelable: false }
);


const styles = StyleSheet.create({
    container: {
        width: 300,
    },
    items:{
        marginBottom: 30,
        padding: 25,
        textAlign: 'center',
        borderColor:'#ccc2a6',
        borderWidth: 1
    }
})

export default StockItems