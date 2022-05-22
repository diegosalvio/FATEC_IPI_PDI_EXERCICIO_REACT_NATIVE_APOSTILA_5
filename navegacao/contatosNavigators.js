import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NovoContatoTela from '../telas/NovoContato'

const Stack = createNativeStackNavigator();

const container = (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='NovoContato'>
            <Stack.Screen name="Adicionar Contatos" component={NovoContatoTela}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container;
