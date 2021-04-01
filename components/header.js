import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const header = ({navigation, title}) =>  {

    return (

        <View style={styles.header}>
            <TouchableOpacity hitSlop={{top: 30, bottom: 30, left: 30, right: 30}} style={styles.icons} onPress={() => navigation.openDrawer()}>
                <Ionicons name="md-menu" size={40} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#ccc2a6',
        paddingTop: 50
    },
    title:{
        fontFamily: 'Roboto',
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'blue'
    },
    icons: {
        width: 50
        
        
    },
})

export default header;