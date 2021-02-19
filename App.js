import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Liste_Course from './Composants/liste_course'
import Apper from './Composants/essai'

export default function App() {
  return (
      <Liste_Course /> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

