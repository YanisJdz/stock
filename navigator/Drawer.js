import * as React from 'react';
import {  View, StyleSheet, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Stocks from '../screens/stocks';
import Test from '../screens/Test';

function CustomDrawerContent(props) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.drawerHeader}>
            <View>
                <Text style={styles.drawerHeaderText}>Menu</Text>
            </View>
        </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
      icon={() => <Icon name={Platform.OS === "ios" ? "ios-close" : "md-close"} color="black" size={22} /> }
      label="Fermer"
      onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
</ScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator backBehavior="history" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Stocks" component={Stocks} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#ccc2a6',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    
  );
}