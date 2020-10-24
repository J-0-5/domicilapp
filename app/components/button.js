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

const Button = ({ label, action }) => {

    return (

            <TouchableOpacity
                style={styles.btn}
                onPress={action}>
                <Text style={styles.txt}>{label}</Text>
            </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

    btn: {
        backgroundColor: '#FFFFFF',
        width: wp('10%'),
        height: hp('5.2%'),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#524646',
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        color: '#000000',
        fontSize: hp('4.5%'),
        //fontWeight: "bold",
    },
});

export default Button;