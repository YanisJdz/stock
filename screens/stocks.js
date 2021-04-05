import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button, Dimensions } from 'react-native';
import Form from '../components/Form';
import Header from '../components/header';
import StockItems from "../components/stockitems"
import Footer from '../components/footer'
import AddItem from '../components/additem'
import { FlatList } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { connect } from 'react-redux';





class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      stocks : [
       
      ],
      modal: false,
    }

    this._deleteOneQuantity = this._deleteOneQuantity.bind(this)
    this._addOneQuantity = this._addOneQuantity.bind(this)
    this._deleteItem = this._deleteItem.bind(this)
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
    //Thats the cool way to write it, my man
    !stateCopy[key].quantity ? this._deleteItem(key + 1) : this.setState({stocks : stateCopy })

    //Thats the old way
    /*
    if (!stateCopy[key].quantity){
      this._deleteItem(key)
    }
    else {
      this.setState({stocks : stateCopy })
    }
    */
    
  }

  _deleteItem(key){
    //Our keys start at one but our list index starts at 0
    key -= 1;
    //Make Copy of current state
    var stateCopy = [...this.state.stocks];  
    //Check if key is right as it should be
    if (key >= 0 && key <= stateCopy.length) {
      //Get selected item out of the list
      stateCopy.splice(key, 1)
      //Here we'll need to reassign all the keys from item's list
      //Splice method changes the index of every item, but we base our methods on a hard coded key index for future database
      //Thus, we need to modify all consecutive keys by hand, starting at the old position of our deleted item 
      for(let i = key; i < stateCopy.length; i++ ){
        //Convert key to int since its a string, then convert the result to string again
        let newKey = (parseInt(stateCopy[i]['key'] - 1).toString())
        stateCopy[i]['key'] = newKey
      }
      
      this.setState({stocks : stateCopy })
    }
  }
  
  render(){
    console.log(this.state)
    return (
      
      <View style={styles.clearview}>
        <Header title='Liste de stocks' style={styles.main_container} navigation={this.props.navigation}/>
        <View style={styles.container}>
          <View style={styles.content}>
              <Form title="Cherchez dans vos stocks" />
              <View style={styles.addItem} >
                <AddItem addItem = {this._addItem} stocks={this.state.stocks}/>
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.stocks}
                keyExtractor={item => item.key}
                renderItem={({item}) => 
                <StockItems item={item} navigation={this.props.navigation} deleteOneQuantity={this._deleteOneQuantity} addOneQuantity={this._addOneQuantity} deleteItem={this._deleteItem}/> 
                }
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



export default App;