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

import img from '../assets/icons/_pruebaDcto.png';
import Basket from '../assets/icons/yellowBasket.png';

const DiscountCard = ({ title, description, gross_price, discount_rate }) => {

    const navigation = useNavigation();
    const netPrice = gross_price * ( 100 - discount_rate ) / 100;


    return (

        <View style={styles.container}>
            <Image
                style={styles.img}
                resizeMode={'contain'}
                source={img}
            />
            <View style={styles.dctCard}>
                <Text style={styles.whiteTxt}>
                    {discount_rate}% DCTO
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.txt}>
                    Antes <Format value={gross_price} />
                </Text>
                <Text style={styles.cost}>
                    <Format value={netPrice}/>
                </Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <Image
                resizeMode={'contain'}
                style={styles.basket}
                source={Basket}
            />
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        width: wp('31%'),
        height: hp('26%'),
        borderWidth: 1,
        borderColor: '#DEDFE0',
        borderTopRightRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        marginHorizontal: wp('2%'),
        marginVertical: hp('1.2%'),
        padding: hp('1%'),
    },
    dctCard: {
        position: 'absolute',
        backgroundColor: '#FF0000',
        width: wp('18%'),
        height: hp('3%'),
        top: hp('-1.5%'),
        left: wp('-0.3%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('1.9%'),
    },
    img: {
        width: wp('26%'),
        height: hp('10%'),
        borderRadius: 5,
    },
    textContainer: {
        //justifyContent: 'center',
        alignItems: 'stretch',
        paddingRight: wp('6%'),
        marginLeft: wp('1%'),
    },
    txt: {
        fontSize: hp('1.5%'),
        fontFamily: 'Roboto',
    },
    cost: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: hp('2.2%'),
        paddingRight: wp('6%'),
    },
    description: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('1.9%'),
    },
    basket: {
        width: wp('11%'),
        height: hp('6.5%'),
        top: hp('-6.8%'),
        right: wp('-16%'),
    },
});

export default DiscountCard;