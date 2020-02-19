import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../Screens/DetailsScreen'
import HomeScreen from '../Screens/HomeScreen'



const MainNavigator = () => {

    const Stack = createStackNavigator();

    // function HomeScreen({ navigation }) {
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Text>Home Screen</Text>
    //             <Button
    //                 title="Go to Details"
    //                 onPress={() => navigation.navigate('Details')}
    //             />
    //         </View>
    //     );
    // }

    // function DetailsScreen() {
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Text>Details Screen</Text>
    //         </View>
    //     );
    // }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
