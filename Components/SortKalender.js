import React from 'react'
import { Text, View } from 'react-native'
import Display from './Display'

const SortKalender = (props) => {

    let { sort, GtjObjekt, MusikObjekt, BarnObjekt, VuxenObjekt } = props.kalenderData
    let currentArrayOfDisplayData = [...GtjObjekt, ...MusikObjekt, ...BarnObjekt, ...VuxenObjekt]

    if (sort === 'alla') {
        currentArrayOfDisplayData = [...GtjObjekt, ...MusikObjekt, ...BarnObjekt, ...VuxenObjekt]
    }
    if (sort === 'gudtjänst') {
        currentArrayOfDisplayData = [...GtjObjekt]
    }
    if (sort === 'musik') {
        currentArrayOfDisplayData = [...MusikObjekt]
    }
    if (sort === 'barn') {
        currentArrayOfDisplayData = [...BarnObjekt]
    }
    if (sort === 'ung') {
        currentArrayOfDisplayData = [...VuxenObjekt]
    }

    const jsxGtj = currentArrayOfDisplayData.map(obj => {
        const isoObj = new Date(obj.Datum)
        const isoMonth = isoObj.getMonth()
        const isoDay = isoObj.getDate()

        return <Display key={obj.uuid} data={obj} navRef={props.navRef} objektetsDag={isoDay} objektetsMånad={isoMonth} />
    })

    return (
        <View>
            {jsxGtj}
        </View>
    )
}

export default SortKalender