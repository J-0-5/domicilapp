import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    container: {
        right: wp('28%'),
        bottom: hp('14%'),
    },
    bgImg: {
        width: wp('118%'),
        height: hp('77.4%'),
        justifyContent: 'flex-end',
    },
    txt: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.8%'),
        left: wp('60%'),
        bottom: hp('3%'),
    },
    logo: {
        left: wp('62%'),
        bottom: hp('2%'),
    },
    showBtn: {
        backgroundColor: '#FFCE1C',
        height: hp('5.7%'),
        marginHorizontal: wp('9.5%'),
        bottom: hp('13%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    registerBtn: {
        backgroundColor: '#000000',
        height: hp('5.7%'),
        marginHorizontal: wp('9.5%'),
        bottom: hp('11%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    loginBtn: {
        height: hp('5.7%'),
        marginHorizontal: wp('9.5%'),
        bottom: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    }
});

export default styles;