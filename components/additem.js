import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from "react-native";

const App = ({changeBackgroundOpacity}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        hasBackdrop={true}
        backdropOpacity={10}
        backdropColor={"rgba(0, 0, 0, 0.2)"}
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
                    />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible) }}
              // onPress={() => {setModalVisible(!modalVisible) ;changeBackgroundOpacity()}}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setModalVisible(true)}}
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
    marginTop: 25,
    backgroundColor: "#ccc2a6",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;