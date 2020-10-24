import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Address = ({dir}) => {
    return (
        <>
            <View style={styles.btn1}>
                <Text style={styles.whiteTxt}>Dirección de entrega</Text>
            </View>
            <View style={styles.btn2}>
                <Text style={styles.blackTxt}>{dir}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
   
    btn1: {
        backgroundColor: '#727277',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: hp('3%'),
    },
    btn2: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1.5,
        borderColor: '#DEDFE0',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: hp('3%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
});

export default Address;