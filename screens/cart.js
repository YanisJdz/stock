import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
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

const Cart = () => {

  const [curt_array, SetTab_Course] = useState(tab_Course)
  const removeItem = id => {
    console.log("vous avez supprimé "+id)
    const newList = curt_array.filter((item) => item.id !== id)

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

  if (curt_array.length == 0) {
    return (
      <ScrollView style={styles.view}>
      <Header title='Mes courses' />
      <View style={styles.container}>
          <Text>La liste de course est vide</Text>
      </View>
      <Footer/>
    </ScrollView>
    )
  }

  
  <ScrollView style={styles.view}>
    <Header title='Mes courses' navigation={navigation} />
    <View style={styles.container}>
      <View>
          <View style={styles.list}>
          <FlatList data={curt_array} 
              keyExtractor={(item) => item.id} 
              renderItem={({item}) => <Text style={{fontSize : 15, padding: 9}}>
              <Pressable onPress={() => confirmBeforeDelete(item.id)}><Text> X  </Text></Pressable>{item.nom_produit}
              <Pressable onPress={() => showDialog(item.id)}><Text>  ✅   </Text>
              </Pressable></Text>
              }/>
          </View>  
      </View>
    </View>
    <Footer/>
  </ScrollView>
}


const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      paddingTop: 30, 
      alignItems: "center",
      justifyContent: "center",
    }
});

export default Cart;