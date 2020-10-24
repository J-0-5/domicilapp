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
});

export default styles;