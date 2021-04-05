import React from "react";
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import Form from '../components/Form'
import Header from '../components/header';
import Footer from '../components/footer';
import AddItemCart from '../components/addItemToCart'
import { connect } from 'react-redux';



class Cart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  _romveItem = (item) => {
    const action = { type: "DELETE_FROM_CART", value: item}
    this.props.dispatch(action)
  };
  
  _showDialog = (item) => {
    Alert.prompt(
      "La quantité du produit acheté :",
      "",
      [
        {
          text: "Annuler",
          onPress: () => {}
        },
        { text: "OK", onPress: (number) =>  {
          var ceNombre = parseInt(number)
          if (Number.isInteger(ceNombre) && ceNombre !== 0) {
            this._romveItem(item);
          }
        },
          style: "cancel"
        }
      ],
    );
  };

  _confirmBeforeDelete = (item) => {
    Alert.alert(
      "Suppression",
      "Voulez-vous supprimer ce produit ?",
      [
        {
          text: "Laisser dans la liste de course",
          onPress: () => {},
          style: "cancel"
        },
        { text: "OK", onPress: () => this._romveItem(item) }
      ],
      { cancelable: false }
    );
  }

  render() {
    console.log(this.props.cart)
    return (
      <View style={styles.clearView}>
        <Header title='Mes courses' navigation={this.props.navigation} />
        <View style={styles.container}>
          <Form title="Cherchez dans vos stocks"/>
          <View style={styles.addItem}>
            <AddItemCart></AddItemCart>
          </View>
          <FlatList data={this.props.cart} 
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id} 
              renderItem={({item}) =>
              <View style={styles.item__container}>
                <TouchableOpacity style={styles.del__button} onPress={() => this._confirmBeforeDelete(item)}>
                  <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text>{item.nom_produit}</Text>
                <Pressable onPress={() => this._showDialog(item)}><Text>  ✅   </Text></Pressable>
              </View> 
              }
          />
        </View>
        <Footer/>
      </View>
    ) 
  }
}  

const styles = StyleSheet.create({ 
    clearView: {
      flex: 1
    },
  
    container: { 
      flex: 1, 
      paddingTop: 30, 
      alignItems: "center",
      justifyContent: "center",
    },
    
    item__container : {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 20,
      padding: 20,
      paddingLeft: 40,
      paddingRight: 40,
      textAlign: 'center',
      borderColor:'#ccc2a6',
      borderWidth: 1,
    },

    del__button: {
      alignSelf: 'flex-start',
    },

    addItem: {
      marginBottom: 40,
      marginTop: 15,
    },
});


const mapStateToProps = (state) => {
  return {cart: state.cart}
}


export default connect(mapStateToProps)(Cart);