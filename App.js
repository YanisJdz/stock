import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Stocks from './screens/stocks';
import Header from './components/header';
import Items from './components/stockitems';

export default function App() {

  const stocks = useState([
    {id:'1', article: 'Bouteille de lait', quantity:5},
    {id:'2', article: 'Pain de mie', quantity:3},
    {id:'3', article: 'Mikados', quantity:10},
    {id:'4', article: "Huile d'olive", quantity:3}
  ])
  return (
    <View>
      <Header title="App title"/>
      <View style={styles.container}>
        <View style={styles.content}>
          <Stocks/>
          <View>
            <FlatList
            data={stocks}
            renderItem={({ item }) => (
              <Items item={item}/>
              )
            }      
            keyExtractor={(item,id)=>id.toString()}
            />
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
  content : {
    padding: 40,
  },
  list:{
    marginTop: 20
  }
});
