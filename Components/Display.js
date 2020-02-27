import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import kalenderVerksamhetStyles from '../Styles/stylesKalenderVerksamhet'


export default function Display(props) {

    const {
        uuid,
        Verksamhetstyp,
        Datum,
        Dag,
        Aktivitet,
        StartSlut,
        starttid,
        Pr_st,
        Musiker,
        Personal,
        Internnotering,
        Lokal
    } = props.data

    console.log('object', starttid)


    //const styles = kalenderVerksamhetStyles


    return (
        <TouchableOpacity onPress={() => props.navRef('KalenderDetalj', { propsData: props.data })}>
            <View >
                <Text style={styles.datumRubrik}>{Dag} {props.objektetsDag} / {props.objektetsMånad}</Text>
                <View style={styles.box}>
                    <View style={styles.klockslagContainer}>
                        <Text style={styles.klockslag}>{starttid}</Text>
                    </View>
                    <View style={styles.rubrikOchPlats}>
                        <Text style={styles.rubrik}>{Aktivitet}</Text>
                        <Text style={styles.text}>{Lokal}</Text>
                    </View>
                    <View style={styles.pilContainer}>
                        <Image style={{ width: 15, height: 15 }} source={require('../assets/pil.png')} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>



    )
}

const styles = StyleSheet.create({
    datumRubrik: {
        fontWeight: "bold",
        backgroundColor: '#808080',
        padding: 10,
        fontFamily: 'avenir-roman',
        fontSize: 15,
        //fontWeight: '900'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
    },
    klockslagContainer: {
        flex: 1.6
    },
    pilContainer: {
        flex: 0.3,
        padding: 15,
        justifyContent: 'center'
    },
    klockslag: {
        padding: 15,
        fontSize: 14,
        fontFamily: 'avenir-roman',

    },
    rubrikOchPlats: {
        flex: 4.5,
        paddingVertical: 5
    },
    rubrik: {
        fontSize: 20,
        fontFamily: 'avenir-roman',

    },
    text: {
        fontSize: 15,
        fontFamily: 'avenir-roman',

    }
});