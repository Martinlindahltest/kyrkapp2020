import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HeaderButton from '../Components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';



import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DetailsScreen, { screenOptions as detailScreenOptions } from '../Screens/DetailsScreen'
import HomeScreen from '../Screens/HomeScreen'

const MainNavigator = () => {

    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();

    const StackNavigator = () => {
        return (
            <Stack.Navigator initialRouteName="Details">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={navData => {
                        return {
                            headerTitle: 'Fungerar dettaaaa?',
                            headerLeft: () => {
                                // console.log(navData)
                                return <HeaderButtons>
                                    <Item
                                        title="Menu"
                                        iconName="ios-menu"
                                        onPress={() => {
                                            navData.navigation.toggleDrawer()
                                        }}
                                    />
                                </HeaderButtons>
                            }
                        }
                    }}
                />
            </Stack.Navigator>
        )
    }

    return (

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={HomeScreen} />
                <Drawer.Screen
                    name="den med options"
                    component={StackNavigator}

                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
