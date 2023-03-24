import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import blues from './blues';

export default function Home(props){
    return(
<View>
    <Text>Estilos Músicais</Text>
    <Image source={require('./components/blues.jpg')}></Image>

    <TouchableOpacity onPress={()=>{props.navigation.navigate('Blues')}}>
        <Text>Blues</Text>
        <Image source={require('../assets/blues.jpg')}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{props.navigation.navigate('Indie')}}>
        <Text>Indie</Text>
        <Image source={require('../assets/indie.png')}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{props.navigation.navigate('Rock')}}>
        <Text>Rock</Text>
        <Image source={require('../assets/rock.jpg')}/>
    </TouchableOpacity>
</View>
);
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        wid
    }
})