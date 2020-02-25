import React from 'react'
import { View, Text, Button } from 'react-native'

const Verksamheter = ({ navigation }) => {
    return (
        <View>
            <Text>Verksamheter</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('VerksamheterDetalj')}
            />
        </View>
    )
}

export default Verksamheter