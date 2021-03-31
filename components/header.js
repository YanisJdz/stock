import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const header = ({navigation, title}) =>  {

    return (

        <View style={styles.header}>
            <TouchableOpacity style={styles.icons} onPress={() => navigation.openDrawer()}>
                <View style={styles.btn__container}>
                    <Ionicons name="md-menu" size={40} color="white" />
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 100,
      backgroundColor: '#ccc2a6',
      paddingTop: 50
    },
    title:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    icons: {
        position: "absolute",
        left: 20,
        top: 23,
        padding: 20
    },
})

export default header;