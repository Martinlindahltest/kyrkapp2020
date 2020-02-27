import React, { useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import Tabmeny5 from '../Components/Tabmeny5'
import FetchKalender from '../Components/FetchKalender'
import HeaderImage from '../Components/HeaderImage'

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
            <HeaderImage screen={(sortKalender)} />
            <ScrollView>
                <FetchKalender sort={sortKalender} navRef={navRef} />
            </ScrollView>

            <Button
                title="Go to Details"
                onPress={() => navRef('KalenderDetalj', { names: ['Brent', 'Satya', 'Michaś'] })}
            />
        </View >
    )
}

export default Kalender
