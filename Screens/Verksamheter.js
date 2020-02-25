import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Tabmeny5 from '../Components/Tabmeny5'

const Verksamheter = ({ navigation }) => {
    const [sortVerksamheter, setSortVerksamheter] = useState('alla')


    const alla = () => setSortVerksamheter('alla')
    const gudstjanst = () => setSortVerksamheter('gudtjänst')
    const musik = () => setSortVerksamheter('musik')
    const barn = () => setSortVerksamheter('barn')
    const ung = () => setSortVerksamheter('ung')

    const funktioner = {
        alla, gudstjanst, musik, barn, ung
    }

    //console.log('sortVerksamheter', sortVerksamheter)
    return (
        <View>
            <Tabmeny5 funktioner={funktioner} />
            <Text>Verksamheter</Text>
            <Text>{sortVerksamheter}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('VerksamheterDetalj')}
            />
        </View>
    )
}

export default Verksamheter