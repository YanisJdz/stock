import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Form from '../components/form';
import Header from '../components/header';
import StockItems from "../components/stockitems"
import Footer from '../components/footer'
import { FlatList } from 'react-native-gesture-handler';


const App = ({navigation}) => {

  const stocks = [
    { key: '1', article: 'Bouteille de lait', quantity: 5 },
    { key: '2', article: 'Pain de mie', quantity: 3 },
    { key: '3', article: 'Mikados', quantity: 10 },
    { key: '4', article: "Huile d'olive", quantity: 3 },
    { key: '5', article: "Papier toilette", quantity: 4 },
    { key: '6', article: "Céréales", quantity: 2 },
    { key: '7', article: "Pack d'eau", quantity: 4 },
    { key: '8', article: "Pack d'eau", quantity: 4 },
    { key: '9', article: "Pack d'eau", quantity: 4 },
    { key: '10', article: "Pack d'eau", quantity: 4 },
    { key: '11', article: "Pack d'eau", quantity: 4 },
    { key: '12', article: "Pack d'eau", quantity: 4 },
    { key: '13', article: "Pack d'eau", quantity: 4 },
  ]

  return (

    <ScrollView style={styles.view}>
      <Header title='Liste de stocks' navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.content}>
            <Form />
            <View style={styles.list}>
                <FlatList
                    data={stocks}
                    renderItem={({item}) => 
                    <StockItems item={item} /> 
                }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    paddingTop: 50,
  },
  view:{
      backgroundColor: '#fff'
  }
});

export default App
