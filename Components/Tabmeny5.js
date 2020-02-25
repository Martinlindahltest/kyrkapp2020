import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default function Tabmeny5(props) {

    const styles = StyleSheet.create({
        tabItem: {
            flex: 1,
            backgroundColor: 'black',
            height: 60,
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
            marginTop: -8
        },
        tabContainer: {
            height: 80,
            backgroundColor: 'black'
        }
    });
    return (
        <View style={styles.tabContainer}>

            <View style={{
                flex: 1, flexDirection: 'row',
            }}>
                <View style={styles.tabItem}>
                    <TouchableOpacity onPress={() => props.testfunk()}>
                        <Image
                            style={styles.img}
                            source={require('../assets/tab5/Alla.png')}
                        />
                        <Text style={styles.textUnderBild}>Alla</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tabItem}>
                    <TouchableOpacity onPress={console.log('yuyuy')}>

                        <Image
                            style={styles.img}
                            source={require('../assets/tab5/Gudstjanst.png')}
                        />
                        <Text style={styles.textUnderBild}>Gudstjanst</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabItem}>
                    <TouchableOpacity onPress={console.log('yuyuy')}>

                        <Image
                            style={styles.img}
                            source={require('../assets/tab5/Musik.png')}
                        />
                        <Text style={styles.textUnderBild}>Musik</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tabItem}>
                    <TouchableOpacity onPress={console.log('yuyuy')}>

                        <Image
                            style={styles.img}
                            source={require('../assets/tab5/Barn.png')}
                        />
                        <Text style={styles.textUnderBild}>Barn</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tabItem}>
                    <TouchableOpacity onPress={console.log('yuyuy')}>
                        <Image
                            style={styles.img}
                            source={require('../assets/tab5/Vuxen.png')}
                        />
                        <Text style={styles.textUnderBild}>Ung/Vuxen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}