import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";

import Header from '../components/header';
import Footer from '../components/footer';

const tab_Course = [ 
  { id: "1", nom_produit: "Barre de Chocolat" }, 
  { id: "2", nom_produit: "Paquet de Lait" }, 
  { id: "3", nom_produit: "Shamppoing anti-pelliculaire" },
  { id: "4", nom_produit: "Sèche-Cheveux" },
  { id: "5", nom_produit: "Coca-cola" },
  { id: "6", nom_produit: "Jus de pomme" },
  { id: "7", nom_produit: "Biscuits" },
  { id: "8" , nom_produit: "Produit Linge" },
  { id: "9", nom_produit: "Orange" },
  { id: "10" , nom_produit: "Pain" },
  { id: "11", nom_produit: "Salade" }
];

const Cart = ({navigation}) => {

  const [cart, SetTab_Course] = useState(tab_Course)
  const removeItem = id => {
    console.log("vous avez supprimé "+id)
    const newList = cart.filter((item) => item.id !== id)

    SetTab_Course(newList);
  };
  
  const showDialog = (id) => {
    Alert.prompt(
      "La quantité du produit acheté :",
      "",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Annulé")
        },
        { text: "OK", onPress: (number) =>  {
          var ceNombre = parseInt(number)
          if (Number.isInteger(ceNombre) && ceNombre !== 0) {
            removeItem(id);
          }
        },
          style: "cancel"
        }
      ],
    );
  };

  const confirmBeforeDelete = (id) => {
    Alert.alert(
      "Suppression",
      "Voulez-vous supprimer ce produit ?",
      [
        {
          text: "Laisser dans la liste de course",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => removeItem(id) }
      ],
      { cancelable: false }
    );
  }

  if (cart.length == 0) {
    return (
      <View style={styles.clearView}>
        <Header title='Mes courses' />
        <View style={styles.container}>
            <Text>La liste de course est vide</Text>
        </View>
        <Footer/>
      </View>
    )
  }

  else {
    return (
      <View style={styles.clearView}>
        <Header title='Mes courses' navigation={navigation} />
        <View style={styles.container}>
          <FlatList data={cart} 
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id} 
              renderItem={({item}) =>
              <View style={styles.item__container}>
                <TouchableOpacity style={styles.del__button} onPress={() => confirmBeforeDelete(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text>{item.nom_produit}</Text>
                <Pressable onPress={() => showDialog(item.id)}><Text>  ✅   </Text></Pressable>
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
    }
});

export default Cart;