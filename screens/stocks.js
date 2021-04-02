import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button, Dimensions } from 'react-native';
import Form from '../components/Form';
import Header from '../components/header';
import StockItems from "../components/stockitems"
import Footer from '../components/footer'
import AddItem from '../components/additem'
import { FlatList } from 'react-native-gesture-handler';
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
      ],
      modal: false,
    }
    this._deleteOneQuantity = this._deleteOneQuantity.bind(this)
    this._addOneQuantity = this._addOneQuantity.bind(this)

    this._changeBackgroundOpacity = this._changeBackgroundOpacity.bind(this)
    this._addItem = this._addItem.bind(this)

  }

  _addItem(item){
    var stateCopy = [...this.state.stocks];  
    var newStocks = [...stateCopy, item];
    this.setState({stocks: newStocks})
  }

  _addOneQuantity(key){
    var stateCopy = [...this.state.stocks];  
    stateCopy[key].quantity += 1;
    this.setState({stocks : stateCopy })
  }


  _deleteOneQuantity(key){
    var stateCopy = [...this.state.stocks];  
    stateCopy[key].quantity -= 1;
    this.setState({stocks : stateCopy })
  }

  _changeBackgroundOpacity(){
    this.componentDidMount()
    if(this.state.modal == false){
      this.setState({modal : true })
    }
    else{
      this.setState({modal : false })
    }
  }

  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  
  render(){
    return (
      
      <View style={styles.clearview}>
        <Header title='Liste de stocks' style={styles.main_container} navigation={this.props.navigation}/>
        <View style={styles.container}>
          <View style={styles.content}>
              <Form />
              <View style={styles.addItem} >
                <AddItem style={styles.modal} changeBackgroundOpacity = {this._changeBackgroundOpacity} addItem = {this._addItem} stocks={this.state.stocks}/>
              </View>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={this.state.stocks}
                  renderItem={({item}) => 
                  <StockItems item={item} navigation={this.props.navigation} deleteOneQuantity={this._deleteOneQuantity} addOneQuantity={this._addOneQuantity}/> 
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
  clearview:{
    flex: 1,
  },
  
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
    marginTop: 15,
  },
});



export default App

