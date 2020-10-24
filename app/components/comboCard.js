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
import heart from '../assets/icons/heart.png';
import img from '../assets/icons/_pruebaOff.png';

const ComboCard = ({ item }) => {

    const navigation = useNavigation();

    let { title, description, gross_price } = item;

    return (

        <View
            style={styles.container}
        >
            <Image
                source={img}
            />
            <View>
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{title}</Text>
                        <Image resizeMode={'contain'} source={heart} />
                    </View>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.cost}>
                        <Format value={gross_price} />
                    </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('FoodDetails', item) }}
                        style={styles.btn}
                    >
                        <Text style={styles.lbl}>
                            Agregar
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: hp('28%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp('2%'),
        padding: hp('1%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2%'),
    },
    // img: {
    //     width: wp('26%'),
    //     height: hp('10%'),
    //     borderRadius: 5,
    // },
    textContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    title: {
        marginRight: wp('3%'),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    cost: {
        color: '#EC1A39',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    description: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('2%'),
        color: '#524646',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('50%'),
        marginVertical: hp('2%'),
    },
    btn: {
        backgroundColor: '#FFCE1C',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('28%'),
        height: hp('4%'),
        borderRadius: wp('2%'),
        marginTop: hp('1%'),
    },
    lbl: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default ComboCard;