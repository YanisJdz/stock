import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet} from 'react-native'

export default class stocks extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text>Liste des stocks actuel</Text>
                <TextInput
                    style={{ 
                        height: 40, 
                        borderColor: 'gray', 
                        borderWidth: 1 
                        
                    }}
                    placeholder = 'Produit...'
                    underlineColorAndroid = 'transparent'
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content : {
      padding: 40,
    }
});