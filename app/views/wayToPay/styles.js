import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: hp('1%'),
    },
    title: {
        color: '#000000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('3%'),
        marginHorizontal: wp('1%'),
    },
    topContainer: {
        borderWidth: 1,
        borderColor: '#524646',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('5%'),
        marginHorizontal: wp('4%'),
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
    margin: {
        marginHorizontal: wp('4%'),
        flex: 1
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
        fontSize: hp('2.4%'),
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: '#FFCE1C',
        height: hp('6.6%'),
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        width: wp('69.3%'),
        marginVertical: hp('2%'),
        padding: 5,
    },
    changeBtn: {
        flexDirection: 'row',
        backgroundColor: '#DEDFE0',
        height: hp('6.6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: wp('19%'),
        marginVertical: hp('2%'),
    },
    text: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2%'),
    },
    yellowBtn: {
        flexDirection: 'row',
        backgroundColor: '#FFCE1C',
        height: hp('6%'),
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: wp('2.5%'),
        marginVertical: hp('2%'),
        padding: 5,
    },
    btn3: {
        backgroundColor: '#FFFFFF',
        borderWidth: 5,
        borderColor: '#F9F9F9',
        width: wp('69.3%'),
        height: hp('7%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: hp('2%'),
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: hp('8%'),
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: hp('1%'),
    },
    txt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2.3%'),
        textAlign: 'left',
        marginHorizontal: wp('3%'),
    },
    lbl: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        textAlign: 'left',
        fontSize: hp('2.3%'),
    },
    boldTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.4%'),
    },
});

export default styles;