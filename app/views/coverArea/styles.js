import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal: wp('4.5%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
    },
    bold: {
        fontFamily: 'Roboto Condensed',
        fontWeight: 'bold',
        fontSize: hp('4%'),
        marginVertical: hp('3%'),
        marginHorizontal: wp('8%'),
    },
    subContainer: {
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal: wp('8%'),
        marginTop: hp('5%'),
        marginBottom: hp('2%'),
    },
    lbl: {
        fontFamily: 'Roboto Condensed',
        fontWeight: 'normal',
        fontSize: hp('2.7%'),
        marginBottom: hp('5%'),
    },
});

export default styles;