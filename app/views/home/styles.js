import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    head: {
        backgroundColor: '#FFCE1C',
        height: hp('35%'),
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFCE1C',
        marginRight: wp('6%'),
        marginLeft: wp('5%'),
        marginBottom: hp('2.5%'),
        flexDirection: 'row',
    },
    union: {
        position: 'absolute',
        width: wp('125%'),
        height: hp('35%'),
        top: hp('23%'),
        left: wp('-15%'),
    },
    promo: {
        width: wp('95%'),
        marginHorizontal: wp('2.5%'),
        marginBottom: hp('5%'),
    },
    placeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: wp('2.5%'),
    },
    place: {
        backgroundColor: '#FFCE1C',
        width: wp('41%'),
        height: hp('16%'),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 15,
    },
    lbl1: {
        left: wp('-3.5%'),
        fontFamily: 'Roboto Condensed',
        fontWeight: 'normal',
        fontSize: hp('2.6%'),
    },
    lbl2: {
        right: wp('-1%'),
        fontFamily: 'Roboto Condensed',
        fontWeight: 'normal',
        fontSize: hp('2.6%'),
    },
    title: {
        margin: wp('3%'),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    promoPrueba: {
        marginHorizontal: wp('2%'),
        marginVertical: hp('1.2%'),
    },
});

export default styles;