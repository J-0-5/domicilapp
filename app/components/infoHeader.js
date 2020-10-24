import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButton from '../components/backButton';
import basket from '../assets/icons/basket.png';
import ico from '../assets/icons/ico.png';

const InfoHeader = ({ destination }) => {

    return (
        <View style={styles.bg}>
            <View style={styles.header}>

                <View style={styles.column}>
                    <BackButton />
                    <Image
                        style={styles.ico}
                        source={ico}
                    />
                </View>

                <TouchableOpacity
                    style={styles.basket}
                    onPress={destination}
                >
                    <Image
                        resizeMode={'contain'}
                        source={basket}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.name}>PRESTO</Text>
                    <View style={styles.card}><Text style={styles.txt}>Abierto</Text></View>
                </View>
                <Text style={styles.txt}>Horario 8:00 a.m - 9:00 p.m.</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        height: hp('20%'),
    },
    header: {
        backgroundColor: '#FFCE1C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('100%'),
        height: hp('12%'),
        borderBottomStartRadius: hp('3%'),
        borderBottomEndRadius: hp('3%'),
    },
    column: {
        height: hp('4%'),
    },
    ico: {
        position: 'absolute',
        borderWidth: 5,
        borderRadius: 64,
        borderColor: '#CAD400',
        top: hp('7%'),
        left: hp('3%'),
    },
    basket: {
        width: wp('12%'),
        height: hp('8%'),
        right: wp('6%'),
        top: hp('3%'),
    },
    row: {
        width: wp('73%'),
        flexDirection: 'row',
        left: wp('26%'),
        justifyContent: 'space-evenly',
    },
    name: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.2%'),
    },
    card:{
        backgroundColor: '#EFDCDC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: '#015551',
        fontFamily: 'Roboto',
        fontSize: hp('2%'),
    },
});


export default InfoHeader;