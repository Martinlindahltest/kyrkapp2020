import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HeaderButton from '../Components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';



import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';



import DetailsScreen from '../Screens/DetailsScreen'
import HomeScreen from '../Screens/HomeScreen'

import ForstaSida from '../Screens/ForstaSida'
import Kalender from '../Screens/Kalender'
import KalenderDetalj from '../Screens/KalenderDetalj'
import Verksamheter from '../Screens/Verksamheter'
import VerksamheterDetalj from '../Screens/VerksamheterDetalj'
import Personal from '../Screens/Personal'
import HittaHit from '../Screens/HittaHit'
import OmAppen from '../Screens/OmAppen'


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

    const kalenderStack = () => {
        return (
            <Stack.Navigator initialRouteName="Kalender">
                <Stack.Screen
                    name="Kalender"
                    component={Kalender}
                    options={navData => {
                        return {
                            headerTitle: 'Kalender',
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
                <Stack.Screen
                    name="KalenderDetalj"
                    component={KalenderDetalj}
                    options={navData => {
                        return {
                            headerTitle: ''
                        }
                    }}
                />
            </Stack.Navigator>
        )
    }

    const forstasidaStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="ForstaSida"
                    component={ForstaSida}
                    options={navData => {
                        return {
                            headerTitle: 'Start',
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

    const verksamheterStack = () => {
        return (
            <Stack.Navigator initialRouteName="Versamheter">
                <Stack.Screen
                    name="Versamheter"
                    component={Verksamheter}
                    options={navData => {
                        return {
                            headerTitle: 'Verksamheter',
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
                <Stack.Screen
                    name="VerksamheterDetalj"
                    component={VerksamheterDetalj}
                    options={navData => {
                        return {
                            headerTitle: ''
                        }
                    }}
                />
            </Stack.Navigator>
        )
    }

    const personalStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Personal"
                    component={Personal}
                    options={navData => {
                        return {
                            headerTitle: 'Personal',
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

    const hittaHitlStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Hitta hit"
                    component={HittaHit}
                    options={navData => {
                        return {
                            headerTitle: 'Hitta hit',
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

    const omAppenStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Om appen"
                    component={OmAppen}
                    options={navData => {
                        return {
                            headerTitle: 'Om appen',
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
                            {/* <Button
                                title="Logout"
                                color={'blue'}
                                onPress={() => {
                                    console.log('i drawer')
                                }}
                            /> */}
                        </SafeAreaView>
                    </View>
                );
            }}>
                <Drawer.Screen
                    name="Förstasida"
                    component={forstasidaStack}
                />
                <Drawer.Screen
                    name="Kalender"
                    component={kalenderStack}
                />
                <Drawer.Screen
                    name="Versamheter"
                    component={verksamheterStack}
                />
                <Drawer.Screen
                    name="Personal"
                    component={personalStack}
                />
                <Drawer.Screen
                    name="Hitta hit"
                    component={hittaHitlStack}
                />
                <Drawer.Screen
                    name="Om appen"
                    component={omAppenStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
