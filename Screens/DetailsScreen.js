import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton'





function DetailsScreen({ navigation }) {




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen egen fiiil</Text>
        </View>
    );
}

export const screenOptions = navData => {
    return {
        headerTitle: 'Kalender',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                />
            </HeaderButtons>
        )
    };
};
export default DetailsScreen
