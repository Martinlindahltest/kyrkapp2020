import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HeaderButton from '../Components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';



import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';



import DetailsScreen from '../Screens/DetailsScreen'
import HomeScreen from '../Screens/HomeScreen'
import iconSet from '@expo/vector-icons/build/FontAwesome5';

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
                            headerTitle: 'Details',
                            headerLeft: () => {
                                // console.log(navData)
                                return <HeaderButtons HeaderButtonComponent={HeaderButton}>
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
            <Drawer.Navigator drawerContent={props => {
                return (
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                            <DrawerItemList {...props} />
                            <Button
                                title="Logout"
                                color={'blue'}
                                onPress={() => {
                                    console.log('i drawer')
                                }}
                            />
                        </SafeAreaView>
                    </View>
                );
            }}>
                <Drawer.Screen name="Feed" component={HomeScreen} />
                <Drawer.Screen
                    name="med options"
                    component={StackNavigator}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
