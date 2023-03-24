import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function rock(){
    return(
<View>
    <Text>Estilos Músicais</Text>
    <Image source={require('./components/blues.jpg')}></Image>
</View>
);
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})