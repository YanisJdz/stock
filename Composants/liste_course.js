import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const tab_Course = [ 
  { id: "1", nom_produit: "Barre de Chocolat" }, 
  { id: "2", nom_produit: "Paquet de Lait" }, 
  { id: "3", nom_produit: "Shamppoing anti-pelliculaire" },
  { id: "4", nom_produit: "Sèche-Cheveux" },
  { id: "5", nom_produit: "Coca-cola" },
  { id: "6", nom_produit: "Jus de pomme" },
  { id: "7", nom_produit: "Biscuits" },
  { id: "8", nom_produit: "Produit Linge" },
  { id: "9", nom_produit: "Orange" }
]

function showDialog() {
  let number = Number(prompt("La quantité du produit acheté :"));
  if(typeof number === "number") {
    console.log("Vous avez acheté "+number+" quantité");
  }
};

const Liste_Course = () => {
  return (
    <View style={styles.container}>        
      <Text style={{ fontSize: 30, marginBottom: 25 }}>La liste de course</Text>
      <FlatList data={tab_Course} 
      keyExtractor={(item) => item.id} 
      renderItem={({item}) => <Text style={{fontSize : 22, padding: 9}}>{item.nom_produit}
      <Pressable onPress={this.showDialog}><Text>  ✅   </Text>
      </Pressable></Text>
      }/>
    </View>
  );
}


const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      paddingTop: 90, 
      alignItems: "center",
      justifyContent: "center",
    },
    dialog: {
      position:"absolute"
    }
})

export default Liste_Course;