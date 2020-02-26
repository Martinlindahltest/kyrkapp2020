import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Tabmeny5 from '../Components/Tabmeny5'
import FetchKalender from '../Components/FetchKalender'

const Kalender = ({ navigation }) => {
    const [sortKalender, setSortKalender] = useState('alla')


    const alla = () => setSortKalender('alla')
    const gudstjanst = () => setSortKalender('gudtjänst')
    const musik = () => setSortKalender('musik')
    const barn = () => setSortKalender('barn')
    const ung = () => setSortKalender('ung')

    function navRef(input, input2) {
        navigation.navigate(input, input2)
    }

    const funktioner = {
        alla, gudstjanst, musik, barn, ung
    }

    //console.log('sortKalender', sortKalender) 

    return (
        <View>
            <Text>Kalender</Text>

            <Tabmeny5 funktioner={funktioner} />
            <FetchKalender sort={sortKalender} navRef={navRef} />

            <Button
                title="Go to Details"
                onPress={() => navRef('KalenderDetalj')}
            />
        </View>
    )
}

export default Kalender
