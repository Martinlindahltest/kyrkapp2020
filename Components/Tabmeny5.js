import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'

export default function Tabmeny5(props) {

    const styles = StyleSheet.create({
        tabItem: {
            flex: 1,
            height: 55,
            backgroundColor: 'black'
        },
        img: {
            height: '100%',
            width: '100%',
            resizeMode: "contain"
        },
        textUnderBild: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'black',
            fontSize: 12,
            paddingBottom: 8
        }
    });
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.tabItem}>
                <Image
                    style={styles.img}
                    source={require('../assets/tab5/Alla.png')}
                />
                <Text style={styles.textUnderBild}>Alla</Text>
            </View>
            <View style={styles.tabItem}>
                <Image
                    style={styles.img}
                    source={require('../assets/tab5/Gudstjanst.png')}
                />
                <Text style={styles.textUnderBild}>Gudstjanst</Text>
            </View>
            <View style={styles.tabItem}>
                <Image
                    style={styles.img}
                    source={require('../assets/tab5/Musik.png')}
                />
                <Text style={styles.textUnderBild}>Musik</Text>
            </View>
            <View style={styles.tabItem}>
                <Image
                    style={styles.img}
                    source={require('../assets/tab5/Barn.png')}
                />
                <Text style={styles.textUnderBild}>Barn</Text>
            </View>
            <View style={styles.tabItem}>
                <Image
                    style={styles.img}
                    source={require('../assets/tab5/Vuxen.png')}
                />
                <Text style={styles.textUnderBild}>Ung/Vuxen</Text>
            </View>
        </View>
    )
}