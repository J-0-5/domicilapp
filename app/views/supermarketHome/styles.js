import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    scrollContainer: {
        height: hp('61.5%'),
        flex: 1
    },
    promo: {
        width: wp('95%'),
        marginHorizontal: wp('2.5%'),
    },
    placeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    place: {
        backgroundColor: '#FFFFFF',
        flexBasis: wp('30%'),
        height: hp('16%'),
        marginVertical: hp('1%'),
        marginHorizontal: wp('1%'),
    },
    title: {
        margin: wp('3%'),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
});

export default styles;