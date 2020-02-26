import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Display from './Display'

const SortKalender = (props) => {

    let { sort, GtjObjekt, MusikObjekt, BarnObjekt, VuxenObjekt } = props.kalenderData

    //  console.log('sas', VuxenObjekt.length)

    console.log(GtjObjekt[0])

    const jsxGtj = GtjObjekt.map(obj => <Display data={obj} navRef={props.navRef} />)


    return (
        <View>
            {jsxGtj[0]}
            <Text></Text>
        </View>
    )
}

export default SortKalender

const styles = StyleSheet.create({})
