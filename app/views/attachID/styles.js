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
        fontFamily: 'Roboto Condensed',
        fontWeight: 'normal',
        fontSize: hp('2.5%'),
        marginBottom: hp('1%'),
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('47%'),
        marginBottom: hp('20%'),
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 15,
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