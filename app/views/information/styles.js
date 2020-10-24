import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFCE1C',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: hp('23%'),
    },
    L7: {
        width: wp('45%'),
        height: hp('30%'),
        left: wp('44%'),
        bottom: hp('12%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3.5%'),
        marginHorizontal: wp('10%'),
    },
    btn: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: hp('8%'),
        marginHorizontal: wp('7.75%'),
        marginTop: hp('5%'),
        padding: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
    },
    txt: {
        color: '#000000',
        fontFamily: 'Roboto Condensed',
        fontSize: hp('2.5%'),
        marginHorizontal: wp('7%'),
    },
    L8: {
        marginHorizontal: wp('24%'),
        bottom: hp('-20%'),
    },
});

export default styles;