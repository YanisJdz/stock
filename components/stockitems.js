import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert, View} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


class StockItems extends React.Component {

  render() {
    const {item, deleteOneQuantity, addOneQuantity, deleteItem} = this.props

    return (
          <View style={styles.item_container}>
            <TouchableOpacity style={styles.items} onPress={() => alertBtn({item}, {deleteItem}) }>
                <Text style={styles.article_text}>{item.article} (Qte:{item.quantity})</Text>
                
                <View style={styles.icon__container}>
                  <TouchableOpacity  onPress={() => deleteOneQuantity(item.key -1)}>
                    <Ionicons style={styles.icon__style} name="remove-circle-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => addOneQuantity(item.key -1)}>
                    <Ionicons style={styles.icon__style} name="add-circle-outline" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                
            </TouchableOpacity>
            
          </View>
    )
  }          
}
const alertBtn = ({item}, {deleteItem}) =>
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
    { text: "Supprimer", onPress: () => deleteItem(item.key - 1) }
  ],
  { cancelable: false }
);


const styles = StyleSheet.create({
    
    items:{
      width: 300,
      textAlign: 'center',
      paddingTop: 25,
      paddingBottom: 0,
    },
    item_container: {
      flex: 1,
      marginBottom: 20,
      textAlign: 'center',
      borderColor:'#ccc2a6',
      borderWidth: 1,
    },

    article_text: {
      textAlign: 'center'
    },
  
    icon__container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingLeft: 10,
      paddingRight: 0,
      paddingBottom: 5
    },

    icon__style: {
      paddingRight: 13
    }
})

export default StockItems