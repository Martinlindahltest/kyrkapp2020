import { StyleSheet } from 'react-native'

const kalenderVerksamhetStyles = StyleSheet.create({
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
        flexDirection: 'row'
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

module.exports = kalenderVerksamhetStyles;