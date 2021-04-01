import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions} from "react-native";
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
        height: 100,
        backgroundColor: '#ccc2a6',
        paddingTop: 20,
        alignItems: 'center'
    },
    title:{
        paddingHorizontal: (Dimensions.get('window').width)/6,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold'
    },
    icons: {
        paddingLeft: (Dimensions.get('window').width)/20
    },
})

export default header;