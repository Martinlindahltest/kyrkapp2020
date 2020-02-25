import React from 'react'
import { View, Text, Button } from 'react-native'
import Tabmeny5 from '../Components/Tabmeny5'

const Kalender = ({ navigation }) => {

    const testfunk = () => navigation.navigate('KalenderDetalj')
    return (
        <View>
            <Tabmeny5 testfunk={testfunk} />
            <Text>Kalender</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('KalenderDetalj')}
            />
        </View>
    )
}

export default Kalender
