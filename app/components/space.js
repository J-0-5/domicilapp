import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Space = () => {

    return (
        <View style={styles.space} />
    );
}

const styles = StyleSheet.create({
    space: {
        height: hp('2%'),
    },
});


export default Space;