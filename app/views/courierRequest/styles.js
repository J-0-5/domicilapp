import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    form: {
        flex: 1,
        marginHorizontal: wp('4.5%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
    },
    lbl: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('3%'),
        marginBottom: hp('1%'),
    },
    entry: {
        borderWidth: 1,
        borderColor: '#524646',
        borderRadius: 5,
        height: hp('6%'),
        marginBottom: hp('1%'),
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    genderBtn: {
        borderWidth: 1,
        borderColor: '#008D86',
        borderRadius: 5,
    },
    focusGenderBtn: {
        backgroundColor: '#8E8E8E',
        borderWidth: 1,
        borderColor: '#008D86',
        borderRadius: 5,
    },
    txt: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: hp('3%'),
        marginHorizontal: wp('14%'),
        marginVertical: hp('1%'),
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp('6%'),
        marginBottom: hp('1%'),
        marginTop: hp('4%'),
    },
    typeTxt: {
        fontFamily: 'Roboto condensed',
        fontWeight: '200',
        fontSize: hp('2.6%'),
    },
    typeBtn: {
        backgroundColor: '#DFDFDF',
        borderRadius: 5,
        marginHorizontal: wp('2%'),
    },
    focusTypeBtn: {
        backgroundColor: '#FFCE1C',
        borderRadius: 5,
        marginHorizontal: wp('2%'),
    },
    img: {
        marginHorizontal: wp('7%'),
        marginVertical: hp('2%'),
    },
    addContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp('6%'),
        marginBottom: hp('1%'),
        marginTop: hp('2%'),
    },
    addTxt: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: hp('2.25%'),
    },
    addBtn:{
        marginRight: wp('2%'),
    },
    endContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    endTxt: {
        color: '#083E40',
        marginVertical: hp('2%'),
        fontFamily: 'Roboto',
        fontSize: hp('2.5%'),
        marginHorizontal: wp('7%'),
    },
    check: {
        backgroundColor: '#DFDFDF',
        borderRadius: 5,
        marginHorizontal: wp('2%'),
    },
    unCheck: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: wp('2%'),
    },
    blackBtn: {
        backgroundColor: '#000000',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: hp('3%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
});

export default styles;