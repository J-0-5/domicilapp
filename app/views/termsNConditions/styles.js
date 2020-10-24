import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    title: {
        marginTop: hp('4%'),
        marginHorizontal: wp('4%'),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3.5%'),
    },
    container: {
        marginHorizontal: wp('6%'),
        marginTop: hp('3%'),
        marginBottom: hp('2%'),
    },
    txt: {
        fontFamily: 'Roboto',
        fontSize: hp('2.6%'),
        marginVertical: hp('1.5%'),
    },
    decision:{
        height: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    disagree:{
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.4
    },
    agree:{
        backgroundColor: '#FFCE1C',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.4
    },
    lbl: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.6%'),
        marginVertical: hp('1.5%'),
    },
});

export default styles;