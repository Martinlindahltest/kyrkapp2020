import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DetailsScreen from '../Screens/DetailsScreen'
import HomeScreen from '../Screens/HomeScreen'
import { render } from 'react-dom';




const MainNavigator = () => {

    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();

    const StackNavigator = () => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        )
    }

    return (

        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator> */}
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={StackNavigator} />
                <Drawer.Screen name="Article" component={HomeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
