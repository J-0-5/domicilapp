import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    margin: {
        marginHorizontal: wp('5%'),
        flex: 1
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp('5%'),
    },
    redLbl: {
        color: '#FF0402',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3.5%'),
    },
    boldLbl: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('4%'),
    },
    txt: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('2.2%'),
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: wp('2%'),
        marginVertical: hp('1.5%'),
    },
    lbl: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('2.6%'),
    },
    radio: {
        borderRadius: 64,
        borderWidth: 1,
        borderColor: '#707070',
        width: wp('4.3%'),
        height: hp('2.4%'),
    },
    radioChecked: {
        backgroundColor: '#3B8C85',
        borderRadius: 64,
        borderWidth: 3,
        borderColor: '#707070',
        width: wp('4.3%'),
        height: hp('2.4%'),
    },
    counterContainer: {
        flexDirection: 'row',
        width: wp('31%'),
        justifyContent: 'space-between',
        alignItems: "center",
    },
    counter: {
        color: '#000000',
        fontSize: hp('3%'),
        fontWeight: "bold",
    },
    entry:{
        paddingBottom: hp('10%'),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#524646',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('1%'),
    },
    btn: {
        backgroundColor: '#CAD400',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: wp('43%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
});

export default styles;