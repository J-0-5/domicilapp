import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';

import home from '../assets/icons/home.png';
import orders from '../assets/icons/orders.png';
import info from '../assets/icons/info.png';
import profile from '../assets/icons/profile.png';

const NavBar = () => {

    const navigation = useNavigation();

    return (
        <View
            style={styles.bar}
        >
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home') }}
            >
                <Image
                    resizeMode={'contain'}
                    source={home}
                //style={styles.home}
                style={styles.ico}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('CurrentOrders') }}
            >
                <Image
                    resizeMode={'contain'}
                    source={orders}
                //style={styles.orders}
                style={styles.ico}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Information') }}
            >
                <Image
                    resizeMode={'contain'}
                    source={info}
                //style={styles.info}
                style={styles.ico}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Profile') }}
            >
                <Image
                    resizeMode={'contain'}
                    source={profile}
                //style={styles.profile}
                style={styles.ico}
                />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#FFCE1C',
        //backgroundColor: '#727277',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: hp('1%'),
        width: wp('100%'),
        height: hp('9%'),
    },
    ico: {
        // tintColor: '#FFFFFF'
        tintColor: '#000000'
    },
    // home: {
    //     width: wp('9%'),
    //     height: hp('7%'),
    // },
    // orders: {
    //     width: wp('10%'),
    //     height: hp('7%'),
    // },
    // info: {
    //     width: wp('14%'),
    //     height: hp('7%'),
    // },
    // profile: {
    //     width: wp('7%'),
    //     height: hp('7%'),
    // },
});

export default NavBar;