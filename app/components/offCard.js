import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Format from '../assets/functions/formatNumber';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';

import img from '../assets/icons/_pruebaOff.png';

const OffCard = ({ title, description, gross_price, discount_rate }) => {

    const navigation = useNavigation();
    const netPrice = gross_price * (100 - discount_rate) / 100;


    return (

        <View
            style={styles.container}
        >
            <Image
                resizeMode={'contain'}
                source={img}
                style={styles.img}
            />
            <View style={styles.offCard}>
                <Text style={styles.blackTxt}> {discount_rate}% DCTO </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}> {title} </Text>
                <Text style={styles.cost}>
                    <Format value={netPrice} />
                </Text>

                <Text style={styles.description}> {description} </Text>
            </View>
            <TouchableOpacity
                style={styles.btn}
            >
                <Text style={styles.lbl}>Agregar</Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: wp('30%'),
        height: hp('28%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('2%'),
        marginVertical: hp('2%'),
        padding: hp('1%'),
    },
    offCard: {
        position: 'absolute',
        backgroundColor: '#45FF00',
        width: wp('19%'),
        height: hp('3.3%'),
        top: hp('0%'),
        left: wp('0.5%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('1.9%'),
    },
    img: {
        width: wp('28.7%'),
        height: hp('14.4%'),
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.2%'),
    },
    cost: {
        color: '#EC1A39',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.7%'),
    },
    description: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('1.4%'),
        color: '#524646',
    },
    btn: {
        backgroundColor: '#FFCE1C',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('28%'),
        height: hp('3.5%'),
        borderRadius: wp('2%'),
        marginTop: hp('1%'),
    },
    lbl: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('1.7%'),
    },
});

export default OffCard;