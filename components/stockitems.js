import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert, View} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { connect } from 'react-redux';



class StockItems extends React.Component {
  

  _alertBtn = (item, deleteItem) =>
  Alert.alert(
    item.article,
    "Quantité = "+item.quantity,
    [
      {
        text: "Annuler",
        onPress: () => {},
        style: "cancel"
      },
      {
        text: "Ajouter à la liste de course",
        onPress: () => {this._addItem(item.article)},
      },
      { text: "Supprimer", onPress: () => deleteItem(item.key) }
    ],
    { cancelable: false }
  );

  _addItem = (itemName) => {
    const action = { type: "ADD_TO_CART", value: this._createItem(itemName, this.props.cart)}
    this.props.dispatch(action)
  }

  _createItem = (itemName, cart) => {
    var item = {
        //Convert key to string, since we determine the right based on the old stock list's length
        id: (cart.length + 1).toString(), 
        nom_produit: itemName, 
    }  
    return item
  }

  render() {
    const {item, deleteOneQuantity, addOneQuantity, deleteItem} = this.props

    return (
          <View style={styles.item_container}>
            <TouchableOpacity style={styles.items} onPress={() => this._alertBtn(item, deleteItem) }>
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

const mapStateToProps = (state) => {
  return {cart: state.cart}
}


export default connect(mapStateToProps)(StockItems);