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
    }
});

export default styles;