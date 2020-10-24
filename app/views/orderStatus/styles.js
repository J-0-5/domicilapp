import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    body: {
        flex: 1,
        marginHorizontal: wp('4.5%'),
        marginBottom: hp('2%'),
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#727277',
        marginTop: hp('3%'),
        height: hp('8%'),
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp('42%'),
    },
    txt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2.3%'),
    },
    boldTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.7%'),
    },
});

export default styles;