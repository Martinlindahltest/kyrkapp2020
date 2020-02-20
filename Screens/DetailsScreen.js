import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Headerbutton from '../Components/HeaderButton'





function DetailsScreen({ navigation }) {




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen egen fiiil</Text>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
    );
}

// export const screenOptions = navData => {
//     return {
//         headerTitle: 'Fungerar detta?',
//         headerLeft: () => {
//             // console.log(navData)
//             return <HeaderButtons>
//                 <Item
//                     title="Menu"
//                     iconName="ios-menu"
//                     onPress={() => {
//                         navData.navigation.toggleDrawer()
//                     }}
//                 />
//             </HeaderButtons>
//         }
//     }
// }
export default DetailsScreen
