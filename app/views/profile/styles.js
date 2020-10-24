import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    title: {
        marginTop: hp('7%'),
        marginHorizontal: wp('4.5%'),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3.6%'),
    },
    container: {
        marginHorizontal: wp('4.5%'),
        marginTop: hp('5%'),
        marginBottom: hp('2%'),
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: wp('5%'),
    },
    txt: {
        marginVertical: hp('2%'),
        fontFamily: 'Roboto',
        fontSize: hp('3%'),
    },
});

export default styles;