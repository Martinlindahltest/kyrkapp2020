import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Display from './Display'

const SortKalender = (props) => {

    let { sort, GtjObjekt, MusikObjekt, BarnObjekt, VuxenObjekt } = props.kalenderData

    //  console.log('sas', VuxenObjekt.length)

    //console.log('GtjObjekt[0]', GtjObjekt[0])

    const jsxGtj = GtjObjekt.map(obj => {
        const isoObj = new Date(obj.Datum)
        const isoMonth = isoObj.getMonth()
        const isoDay = isoObj.getDate()

        return <Display key={obj.uuid} data={obj} navRef={props.navRef} objektetsDag={isoDay} objektetsMånad={isoMonth} />
    })

    return (
        <View>
            {jsxGtj}
            <Text></Text>
        </View>
    )
}

export default SortKalender