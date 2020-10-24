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

import img from '../assets/icons/_pruebaDetails.png';
import Basket from '../assets/icons/yellowBasket.png';

const SuggestCard = ({ item }) => {

    const navigation = useNavigation();
    const { title, description, gross_price, discount_rate } = item;
    const netPrice = gross_price * (100 - discount_rate) / 100;


    return (

        <TouchableOpacity
            style={styles.container}
        >
            <Image
                resizeMode={'contain'}
                source={img}
                style={styles.img}
            />

            <View style={styles.textContainer}>
                <Text style={styles.cost}>
                    <Format value={netPrice} />
                </Text>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <Image
                resizeMode={'contain'}
                style={styles.basket}
                source={Basket}
            />

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('46%'),
        height: hp('13%'),
        borderWidth: 1,
        borderColor: '#DEDFE0',
        borderRadius: 20,
        marginHorizontal: wp('1%'),
        marginVertical: hp('1.2%'),
    },
    img: {
        width: wp('16%'),
        height: hp('12%'),
        borderRadius: 5,
    },
    textContainer: {
        top: hp('1%'),
        left: wp('2%'),
        alignItems: 'stretch',
        width: wp('30%'),
    },
    cost: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.4%'),
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: hp('1.9%'),
        width: wp('15%'),
    },
    description: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('1.7%'),
    },
    basket: {
        width: wp('10%'),
        height: hp('7%'),
        top: hp('6%'),
        right: wp('12%'),
    },
});

export default SuggestCard;