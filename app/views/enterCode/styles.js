import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginBottom: hp('5%'),
    },
    img: {
        position: 'absolute',
        top: hp('2%'),
        marginHorizontal: wp('44%'),
    },
    topContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('1%'),
    },
    txt: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('2.5%'),
        textAlign: 'center',
        paddingHorizontal: wp('6%'),
        marginBottom: hp('4%'),
    },
    title: {
        color: '#000000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    entry: {
        marginTop: hp('1%'),
        marginBottom: hp('10%'),
        paddingHorizontal: wp('50%'),
        fontSize: hp('3%'),
        color: '#000000',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('1%'),
    },
    lbl: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('3%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
        marginLeft: wp('2%'),
    },
    btn: {
        backgroundColor: '#EC1A39',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: wp('4%'),
        marginTop: hp('6%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
});

export default styles;