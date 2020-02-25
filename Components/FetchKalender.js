import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import dbUrl from '../dbConfig/dbUrl'
import SortKalender from './SortKalender';

export default function FetchKalender(props) {

    const [hasError, setErrors] = useState();
    const [data, setdata] = useState();


    async function fetchData() {
        const res = await fetch(dbUrl);
        res
            .json()
            .then(res => setdata(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        //     console.log('datafetch kalender')
        fetchData();
    }, [])

    const GtjObjekt = []
    const MusikObjekt = []
    const BarnObjekt = []
    const VuxenObjekt = []

    if (data) {
        data.map(obj => {
            if (obj.Verksamhetstyp === 'Gtj') {
                GtjObjekt.push(obj)
            }
            if (obj.Verksamhetstyp === 'Musik') {
                MusikObjekt.push(obj)
            }
            if (obj.Verksamhetstyp === 'Barn') {
                BarnObjekt.push(obj)
            }
            if (obj.Verksamhetstyp === 'Vuxen') {
                VuxenObjekt.push(obj)
            }
        }
        )
    }

    // console.log(MusikObjekt)

    const propsObject = {
        GtjObjekt, MusikObjekt, BarnObjekt, VuxenObjekt, sort: props.sort
    }

    return (
        <View>
            <Text>FetchKalender</Text>
            <Text>{props.sort}</Text>
            {/* <Text>{JSON.stringify(data)}</Text> */}
            <SortKalender kalenderData={propsObject} />
        </View>
    )
}
