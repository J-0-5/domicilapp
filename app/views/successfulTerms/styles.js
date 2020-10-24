import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    container: {
        marginHorizontal: wp('6%'),
        height: hp('72%'),
        marginTop: hp('1%'),
    },
    footer:{
        marginTop: hp('8%'),
        height: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        backgroundColor: '#000000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.85
    },
    lbl: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.6%'),
        marginVertical: hp('1.5%'),
    },
});

export default styles;