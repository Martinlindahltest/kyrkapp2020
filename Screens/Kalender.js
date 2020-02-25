import React from 'react'
import { View, Text, Button } from 'react-native'

const Kalender = ({ navigation }) => {
    return (
        <View>
            <Text>Kalender</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('KalenderDetalj')}
            />
        </View>
    )
}

export default Kalender
