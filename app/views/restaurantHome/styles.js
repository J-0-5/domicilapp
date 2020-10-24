import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    scrollContainer: {
        //height: hp('61.5%'),
        flex: 1,
    },
    promo: {
        marginTop: hp('3%'),
        alignItems: 'center',
    },
    title: {
        margin: wp('3%'),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
});

export default styles;