import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';


import styles from './styles';
import Header from '../../components/header';
import ProfileMenu from '../../components/profileMenu';
import i1 from '../../assets/icons/profileData.png';
import i2 from '../../assets/icons/ordersHistory.png';
import i3 from '../../assets/icons/myAddresses.png';
import i4 from '../../assets/icons/paymentMethods_focus.png';
import paycall from '../../assets/icons/paycall.png';
import pse from '../../assets/icons/BotonPSE.png';
import mastercard from '../../assets/icons/mastercard.png';
import visa from '../../assets/icons/Visa_Logo.png';


const PaymentMethods = () => {

    return (
        <>
            <View style={styles.bg}>
                <Header />
                <ProfileMenu
                    first={i1}
                    second={i2}
                    third={i3}
                    fourth={i4}
                />

                <View
                    style={styles.body}
                >
                    <View style={styles.container}>
                        <View >
                            <ImageBackground
                                style={styles.img}
                                source={paycall}
                            >
                                <Text style={styles.txt}>
                                    Paycall
                                </Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View >
                            <ImageBackground
                                style={styles.img}
                                source={pse}
                            >
                                <Text style={styles.txt}>
                                    PSE
                                </Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View >
                            <ImageBackground
                                style={styles.img}
                                source={mastercard}
                            >
                                <Text style={styles.txt}>
                                    MASTERCARD
                                </Text>
                            </ImageBackground>
                        </View>

                    </View>
                    <View style={styles.container}>
                        <View >
                            <ImageBackground
                                style={styles.img}
                                source={visa}
                            >
                                <Text style={styles.txt}>
                                    VISA
                                </Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
            </View>

        </>
    );
}

export default PaymentMethods;