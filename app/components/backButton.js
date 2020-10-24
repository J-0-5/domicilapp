import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';

import back from '../assets/icons/back.png';

const BackButton = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => { navigation.goBack() }}
        >
            <Image
                resizeMode={'contain'}
                style={styles.img}
                source={back}
            />
            <Text style={styles.txt}>Atras</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: wp('15%'),
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        margin: (hp('1%'), wp('3%')),
        //marginRight: wp('75%'),
    },
    img :{
        width: wp('3%'),
        height: hp('3%'),
    },
    txt: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3.3%'),
        left: wp('1%')
    },
});

export default BackButton;