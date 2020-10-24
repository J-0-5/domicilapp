import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButton from '../components/backButton';
import ico from '../assets/icons/basket.png';
import L6 from '../assets/icons/logo6.png';

const YellowHeader = ({ destination }) => {

    return (
        <View style={styles.header}>

            <BackButton />

            <Image
                resizeMode={'contain'}
                source={L6}
            />

            <TouchableOpacity
                style={styles.basket}
                onPress={destination}
            >
                <Image
                    resizeMode={'contain'}
                    source={ico}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFCE1C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('100%'),
        height: hp('10%'),
        borderBottomStartRadius: hp('3%'),
        borderBottomEndRadius: hp('3%'),
    },
    basket: {
        width: wp('12%'),
        height: hp('8%'),
        right: wp('3%'),
    },
});


export default YellowHeader;