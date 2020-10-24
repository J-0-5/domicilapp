import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    containerTitle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: wp('-7%'),
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
        marginTop: hp('4.5%'),
    },
    container: {
        marginHorizontal: wp('4.5%'),
        marginTop: hp('3%'),
        marginBottom: hp('2%'),
    },
    entry: {
        borderWidth: 0.5,
        borderColor: '#000000',
        borderRadius: 5,
        marginVertical: hp('2%'),
        paddingHorizontal: wp('5%'),
        fontSize: hp('2.7%'),
    },
    txtContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: wp('4.5%'),
        marginTop: hp('3%'),
    },
    lbl: {
        fontFamily: 'Roboto Condensed',
        fontWeight: 'normal',
        fontSize: hp('2.6%'),
        marginBottom: hp('1%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.6%'),
        marginBottom: hp('1%'),
        marginLeft: wp('2%'),
    },
    btn: {
        backgroundColor: '#EC1A39',
        height: hp('7%'),
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
    img: {
        marginHorizontal: wp('27%'),
        bottom: wp('-10%')
    }
});

export default styles;