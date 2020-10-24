import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Divider = () => {

    return (
        <View style={styles.line} />
    );
}

const styles = StyleSheet.create({
    line: {
        borderWidth: hp('0.04%'),
        marginVertical:hp('1%'),
        borderColor: '#727277'
    }
});


export default Divider;