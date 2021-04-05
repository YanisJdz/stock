import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from "react-native";
import { connect } from 'react-redux';


const Popup = ({cart, dispatch}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [itemName, setItemName] = useState("")
    createItem = (itemName, cart) => {
        var item = {
            //Convert key to string, since we determine the right based on the old stock list's length
            id: (cart.length + 1).toString(), 
            nom_produit: itemName, 
        }  
        return item
    }
    
    const addItem = (itemName) => {
        const action = { type: "ADD_TO_CART", value: createItem(itemName, cart)}
        dispatch(action)
    }
    
    return (
        <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Nom du produit</Text>
                <TextInput
                        style={{ 
                            height: 40, 
                            width: '100%',
                            borderColor: 'gray', 
                            borderWidth: 1,
                            paddingLeft: 5,
                            marginBottom: 15                       
                        }}
                        placeholder = 'Produit...'
                        underlineColorAndroid = 'transparent'
                        onChangeText={(itemName) => setItemName(itemName)}
                        value={itemName}

                        />
                

                <Pressable
                style={[styles.button, styles.addItemButton]}
                onPress={() => {addItem(itemName)  ;setModalVisible(!modalVisible) }}
                // onPress={() => {setModalVisible(!modalVisible) ;changeBackgroundOpacity()}}
                >
                <Text style={styles.textStyle}>Ajouter cet article à votre liste</Text>
                </Pressable>        


                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {setModalVisible(!modalVisible) }}
                // onPress={() => {setModalVisible(!modalVisible) ;changeBackgroundOpacity()}} => A remettre si présentation sur téléphone (fonction bugg'd)
                >
                <Text style={styles.textStyle}>Fermer</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {setModalVisible(!modalVisible) }}
            // onPress={() => {setModalVisible(true) ;changeBackgroundOpacity() }}
        >
            <Text style={styles.textStyle}>Ajouter un produit à votre liste de course</Text>
        </Pressable>
        </View>
    );
    };

    const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 5,
        position: "relative",
        marginTop: '45%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#ccc2a6",
    },
    buttonClose: {
        marginTop: 20,
        backgroundColor: "#ccc2a6",
    },
    
    addItemButton: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: "#ccc2a6",
    },


    textStyle: {
        fontFamily: "Roboto",
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding: 5
    },


    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
    });

const mapStateToProps = (state) => {
    return {cart: state.cart}
  }
  
  
export default connect(mapStateToProps)(Popup);