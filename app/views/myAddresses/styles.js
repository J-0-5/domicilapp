import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    body: {
        flex: 1,
        marginHorizontal: wp('3%'),
        marginVertical: hp('2%'),
    },
    lbl: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        marginBottom: hp('1%'),
    },
    entry: {
        borderWidth: 1,
        borderColor: '#C1C1C1',
        borderRadius: 5,
        height: hp('6%'),
        marginBottom: hp('1%'),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    column: {
        width: wp('45%'),
    },
    greenBtn: {
        backgroundColor: '#CAD400',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: hp('2.5%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    blackBtn: {
        backgroundColor: '#000000',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    //Card//
    container: {
        borderWidth: 1,
        borderColor: '#DEDFE0',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp('1%'),
        padding: 15
    },
    section: {
        marginHorizontal: wp('5%'),
    },
    txt: {
        color: '#727277',
        fontFamily: 'Roboto',
        fontSize: hp('2.4%'),
    },
    boldTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2%'),
    },
    check:{
        left: wp('30%'),
    }
});

export default styles;