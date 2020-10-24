import React from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ico from '../assets/icons/basket.png';

const Basket = ({ destination }) => {

    return (

        <TouchableOpacity
            style={styles.container}
            onPress={destination}
        >
            <Image
                resizeMode={'contain'}
                source={ico}
            />
        </TouchableOpacity>


    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('8%'),
    },
});

export default Basket;