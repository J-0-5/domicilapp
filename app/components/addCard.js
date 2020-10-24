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

const AddCard = ({ item, color, action }) => {

    let { title, gross_price, description } = item;

    return (

        <View style={styles.container}>
            <View style={styles.img}>
                <Image
                    resizeMode={'contain'}
                    source={img}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>
                    <Format value={gross_price} />
                </Text>
                <Text
                    style={{
                        color: color,
                        fontFamily: 'Roboto',
                        fontSize: hp('1.8%'),
                    }}
                >{description} </Text>
            </View>
            <TouchableOpacity
                onPress={action}
                style={styles.btn}
            >
                <Text style={styles.lbl}>Agregar </Text>
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
        marginHorizontal: wp('4%'),
        marginVertical: hp('3%'),
        padding: hp('1%'),
    },
    img: {
        borderWidth: 0.8,
        borderColor: '#707070',
        borderRadius: 5,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('24%'),
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.2%'),
    },
    btn: {
        backgroundColor: '#FFCE1C',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('28%'),
        height: hp('3.9%'),
        borderRadius: wp('2%'),
        marginTop: hp('1%'),
    },
    lbl: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.2%'),
    },
    price: {
        color: '#EC1A39',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    }
});

export default AddCard;