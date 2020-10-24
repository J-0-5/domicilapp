import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    body: {
        flex: 1,
        marginHorizontal: wp('3%'),
        marginVertical: hp('8%'),
    },
    
    img: {
        borderWidth: 5,
        borderColor: '#F9F9F9',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: wp('20%'),
        marginVertical: hp('1%'),
        height: hp('9%'),
    },
    txt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2.7%'),
    },
});

export default styles;