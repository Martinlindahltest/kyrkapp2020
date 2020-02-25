import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import dbUrl from '../dbConfig/dbUrl'

export default function FetchKalender(props) {

    const [hasError, setErrors] = useState();
    const [data, setdata] = useState({});


    async function fetchData() {
        const res = await fetch(dbUrl);
        res
            .json()
            .then(res => setdata(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }), [];
    return (
        <View>
            <Text>FetchKalender</Text>
            <Text>{props.sort}</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    )
}
