import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import Header from '../components/header';
import StockItems from "../components/StockItems"


const Test = ({navigation}) => {

  return (

    <View>
      <Header title='Page test' navigation={navigation} />
      <View style={styles.container}>
          <Text>Salut : Test</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
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

export default Test
