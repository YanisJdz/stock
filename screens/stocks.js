import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, SafeAreaView } from 'react-native';
import Form from '../components/Form';
import Header from '../components/header';
import StockItems from "../components/stockitems"
import Footer from '../components/footer'
import { FlatList } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import { LogBox } from 'react-native';




class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      stocks : [
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
        { key: '13', article: "Pack d'eau", quantity: 4 }
      ],
    }
    this._deleteOneQuantity = this._deleteOneQuantity.bind(this)

  }

  quantityDown(key){
    return {type: 'QTY_DOWN', key}
  }
  

  _deleteOneQuantity(key){
    var stateCopy = [...this.state.stocks];  
    stateCopy[key].quantity -= 1;
    this.setState({stocks : stateCopy })
  }

  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }

  render(){

    return (

      <View style={{flex: 1}}>
        <Header title='Liste de stocks' style={styles.main_container} navigation={this.props.navigation}/>
        <View style={styles.container}>
          <View style={styles.content}>
              <Form />
              <View style={styles.addItem} >
                <Button color='#ccc2a6' title="Ajouter un article dans vos stocks"/>

              </View>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={this.state.stocks}
                  renderItem={({item}) => 
                  <StockItems item={item} navigation={this.props.navigation} deleteOneQuantity={this._deleteOneQuantity}/> 
              }
                  keyExtractor={item => item.key}
              />
        </View>
        </View>
        <Footer/>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    paddingTop: 30,
  },
  view:{
      backgroundColor: '#fff'
  },

  addItem: {
    marginBottom: 40,
    marginTop: 15
  }
});



export default App

