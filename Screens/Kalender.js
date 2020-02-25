import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Tabmeny5 from '../Components/Tabmeny5'

const Kalender = ({ navigation }) => {
    const [sortKalender, setSortKalender] = useState('alla')


    const alla = () => setSortKalender('alla')
    const gudstjanst = () => setSortKalender('gudtjänst')
    const musik = () => setSortKalender('musik')
    const barn = () => setSortKalender('barn')
    const ung = () => setSortKalender('ung')

    const funktioner = {
        alla, gudstjanst, musik, barn, ung
    }

    // console.log('sortKalender', sortKalender)

    return (
        <View>
            <Tabmeny5 funktioner={funktioner} />
            <Text>Kalender</Text>
            <Text>{sortKalender}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('KalenderDetalj')}
            />
        </View>
    )
}

export default Kalender
