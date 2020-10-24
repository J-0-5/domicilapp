import React from 'react';
import Format from '../assets/functions/formatNumber';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';


const OrderCard = ({ item, action }) => {

    let { ref, costoPedido, costoEnvio, propina, fecha } = item;
    let total = costoPedido + costoEnvio + propina;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.txt}>Referencia</Text>
                <Text style={styles.redTxt}>{ref}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.txt}>Valor del pedido</Text>
                <Text style={styles.totalTxt}><Format value={total} /></Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.txt}>Fecha</Text>
                <Text style={styles.txt}>{fecha}</Text>
            </View>
            <TouchableOpacity
                onPress={action}
                style={styles.yellowBtn}
            >
                <Text style={styles.blackTxt}>VER DETALLE DEL PEDIDO</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: wp('4%'),
        marginVertical: hp('2%'),
        padding: 5,
        borderWidth: 1,
        borderColor: '#DEDFE0',
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp('0.5%'),
    },
    yellowBtn: {
        backgroundColor: '#FFCE1C',
        marginHorizontal: wp('3%'),
        marginVertical: hp('2%'),
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    txt: {
        color: '#727277',
        fontFamily: 'Roboto',
        fontSize: hp('2.4%'),
    },
    redTxt: {
        color: '#FF0000',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('2.7'),
    },
    totalTxt: {
        color: '#FF0000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.7'),
    },
});

export default OrderCard;