import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    container: {
        marginHorizontal: wp('4.5%'),
        marginTop: hp('3%'),
        marginBottom: hp('2%'),
    },
    txtContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('1%'),
    },
    title: {
        color: '#000000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.6%'),
    },
    txt: {
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontSize: hp('2.21%'),
        textAlign: 'center',
        paddingHorizontal: wp('4.5%'),
        marginVertical: hp('2%'),
    },
    lbl: {
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontSize: hp('3%'),
    },
    entry: {
        borderWidth: 1,
        borderColor: '#000000',
        marginVertical: hp('2%'),
        marginHorizontal: wp('2.5%'),
        paddingLeft: wp('3%'),
        fontSize: hp('2.2%'),
        color: '#000000',
    },
    btn: {
        backgroundColor: '#EC1A39',
        height: hp('7%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: hp('5%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.9%'),
    },
    footer: {
        right: wp('20%'),
        top: hp('8%'),
    },
});

export default styles;