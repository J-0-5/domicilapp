import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BackButton from '../components/backButton';
import L3 from '../assets/icons/logo3.png';

const Header = () => {

    return (
        <View style={styles.header}>
            <BackButton />
            <Image resizeMode={'contain'} source={L3} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: wp('1%')
    },
});


export default Header;