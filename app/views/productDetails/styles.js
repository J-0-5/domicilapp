import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    header: {
        alignItems: 'center',
        marginHorizontal: wp('25.5%'),
    },
    title: {
        color: '#000000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('3%'),
        marginHorizontal: wp('1%'),
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp('5%'),
        width: wp('40%'),
    },
    uni: {
        left: wp('11%'),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.3%'),
    },
    btnContainer: {
        justifyContent: 'space-between',
        alignItems: "center",
        height: hp('7%'),
        marginHorizontal: wp('5%'),
        flexDirection: "row",
    },
    counterContainer: {
        flexDirection: 'row',
        width: wp('31%'),
        justifyContent: 'space-between',
        alignItems: "center",
    },
    counter: {
        color: '#000000',
        fontSize: hp('3%'),
        fontWeight: "bold",
    },
    btn: {
        backgroundColor: '#FFCE1C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: hp('5.2%'),
        width: wp('40.5%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.8%'),
    },
    lbl: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('3%'),
    },
    redLbl: {
        color: '#EC1A39',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3.5%'),
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
    },
});

export default styles;