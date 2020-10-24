import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('4%'),
    },
    title: {
        color: '#000000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.6%'),
        marginHorizontal: wp('1%'),
    },
    topContainer: {
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('5%'),
        marginBottom: hp('3%'),
    },
    secondContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp('5%'),
        marginHorizontal: wp('4%'),
        marginBottom: hp('3%'),
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: hp('1%'),
    },
    lbl: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('3%'),
    },
    boldLbl: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('4%'),
    },
    margin: {
        marginHorizontal: wp('2%'),
        flex: 1
    },
    txt: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('2.5%'),
        paddingVertical: hp('1.5%'),
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('1%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.7%'),
    },
    btn: {
        backgroundColor: '#FFCE1C',
        height: hp('5.7%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: wp('4%'),
        marginVertical: hp('2%'),
    },
    whiteBtn: {
        backgroundColor: '#FFFFFF',
        height: hp('5.7%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: wp('4%'),
        marginVertical: hp('2%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
});

export default styles;