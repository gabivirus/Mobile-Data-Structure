import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navigation/stack';

import Blues from './blues';
import Indie from './rock';
import Rock from './rock';
import Home from './home';

const Stack = createStackNavigation();

export default function Rotas(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Blues" component={Blues}/>
                <Stack.Screen name="Indie" component={Indie}/>
                <Stack.Screen name="Rock" component={Rock}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
