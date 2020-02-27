import React from 'react'
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native'

export default function HeaderImage(props) {

    const styles = StyleSheet.create({
        img: { width: '100%', height: 165, resizeMode: 'cover' },
        rubriktext: {
            fontSize: 30,
            color: 'white',
            //backgroundColor:'blue',
            padding: 10,
            fontFamily: 'avenir-roman',
        },
        rubriktextView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    // let img = <Image
    //     style={styles.img}
    //     source={require('../assets/Kalender17okt/kal-verk-front.jpg')}
    // />

    let component =
        <ImageBackground source={require('../assets/Kalender17okt/kal-verk-front.jpg')} style={styles.img}>
            <View style={styles.rubriktextView}>
                <Text style={{
                    fontSize: 40,
                    color: 'white',
                    //backgroundColor:'blue',
                    padding: 10,
                    fontFamily: 'avenir-roman',
                }}>Kalender</Text>
            </View>
        </ImageBackground>

    if (props.screen == 'gudtjänst') {
        component =
            <ImageBackground source={require('../assets/Kalender17okt/kal-verk-gtj.jpg')} style={styles.img}>
                <View style={styles.rubriktextView}>
                    <Text style={styles.rubriktext}>{'Gudtjänstkalender'}</Text>
                </View>
            </ImageBackground>
    }

    if (props.screen == 'musik') {
        component =
            <ImageBackground source={require('../assets/Kalender17okt/kal-verk-musik.jpg')} style={styles.img}>
                <View style={styles.rubriktextView}>
                    <Text style={styles.rubriktext}>{'Musikkalender'}</Text>
                </View>
            </ImageBackground>
    }

    if (props.screen == 'barn') {
        component =
            <ImageBackground source={require('../assets/Kalender17okt/kal-verk-barn.jpg')} style={styles.img}>
                <View style={styles.rubriktextView}>
                    <Text style={styles.rubriktext}>{'Barnkalender'}</Text>
                </View>
            </ImageBackground>
    }

    if (props.screen == 'ung') {
        component =
            <ImageBackground source={require('../assets/Kalender17okt/kal-verk-ungVux.jpg')} style={styles.img}>
                <View style={styles.rubriktextView}>
                    <Text style={styles.rubriktext}>{'Ung/Vuxenkalender'}</Text>
                </View>
            </ImageBackground>
    }

    return (
        <View>
            {component}
        </View>
    )
}