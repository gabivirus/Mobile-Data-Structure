import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import Rotas from './components/rotas';

export default function App(){
    return(
        <>
            <StatusBar/>
            <Rotas/>
        </>
);
}