import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from "react-native";

const App = ({changeBackgroundOpacity, addItem, stocks}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemName, setItemName] = useState("")
  const [itemQuantity, setItemQuantity] = useState("")

  createItem = (itemName, itemQuantity, stocks) => {
    var item = {
      //Convert key to string, since we determine the right based on the old stock list's length
      key: (stocks.length + 1).toString(), 
      article: itemName, 
      //Convert quantity to int because we get a string from the form
      quantity: parseInt(itemQuantity)
    }  
    return item
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
          changeBackgroundOpacity();
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
            <Text style={styles.modalText}>Quantité</Text>
            <TextInput
                    style={{ 
                        height: 40, 
                        width: '50%',
                        borderColor: 'gray', 
                        borderWidth: 1,
                        paddingLeft: 5,
                        textAlign: "center"
                    }}
                    placeholder = 'Quantité...'
                    underlineColorAndroid = 'transparent'
                    keyboardType={'number-pad'}
                    onChangeText={(itemQuantity) => setItemQuantity(itemQuantity)}
                    value={itemQuantity}
                    />


            <Pressable
              style={[styles.button, styles.addItemButton]}
              onPress={() => {addItem(createItem(itemName, itemQuantity, stocks)); setModalVisible(!modalVisible) }}
              // onPress={() => {setModalVisible(!modalVisible) ;changeBackgroundOpacity()}}
            >
              <Text style={styles.textStyle}>Ajouter cet article à vos stocks</Text>
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
        <Text style={styles.textStyle}>Ajouter un produit</Text>
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

export default App;