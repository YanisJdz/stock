import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Stocks from './screens/stocks';
import Header from './components/header';
import StockItems from "./components/StockItems"


const App = () => {

  const stocks = [
    { key: '1', article: 'Bouteille de lait', quantity: 5 },
    { key: '2', article: 'Pain de mie', quantity: 3 },
    { key: '3', article: 'Mikados', quantity: 10 },
    { key: '4', article: "Huile d'olive", quantity: 3 },
    { key: '5', article: "Papier toilette", quantity: 4 },
    { key: '6', article: "Céréales", quantity: 2 },
    { key: '7', article: "Pack d'eau", quantity: 4 }
  ]

  return (

    <View>
      <Header title="App title" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Stocks />
          <View style={styles.list}>
            {stocks.map((e, i) => {
              return (
                <StockItems item={e} key={i} />
              )
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 30
  },
  items: {
    padding: 25,
    marginTop: 16,
    borderColor: '#ccc2a6',
    borderWidth: 1,
    color: "black"
  }
});

export default App
