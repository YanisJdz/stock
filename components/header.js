import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const header = ({navigation, title}) =>  {
    const openMenu = () => {
        navigation.openDrawer();
      };
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={openMenu} style={styles.icons}>
                <Ionicons name="md-menu" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      backgroundColor: '#ccc2a6',
      paddingTop: 40
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
        top: 38
      }
})

export default header;