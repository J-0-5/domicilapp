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
        marginBottom: hp('3%'),
    },
    img: {
        width: wp('12%'),
        height: hp('8%'),
        marginHorizontal: wp('1%'),
    },
    title: {
        color: '#000000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('3%'),
        marginHorizontal: wp('1%'),
    },
    redLbl: {
        color: '#FF0402',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3.5%'),
    },
    topContainer: {
        borderWidth: 1,
        borderColor: '#524646',
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
        marginBottom: hp('3%'),
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
        marginHorizontal: wp('5%'),
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
        fontSize: hp('3%'),
        marginLeft: wp('2%'),
    },
    btn: {
        backgroundColor: '#EC1A39',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
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