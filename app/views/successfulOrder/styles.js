import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('75%'),
    },
    footer:{
        width: wp('90%'),
        height: hp('30%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wBtn:{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#524646',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('42%'),
        height: hp('6%')
    },
    yBtn:{
        backgroundColor: '#FFCE1C',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('43%'),
        height: hp('5.2%')
    },
    lbl: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.4%'),
        marginHorizontal: wp('1%'),
    },
});

export default styles;