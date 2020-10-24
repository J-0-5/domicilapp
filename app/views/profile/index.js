import React from 'react';
import {
    View,
    Text,
    Pressable,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import ProfileMenu from '../../components/profileMenu';
import Divider from '../../components/divider';
import i1 from '../../assets/icons/profileData_focus.png';
import i2 from '../../assets/icons/ordersHistory_focus.png';
import i3 from '../../assets/icons/myAddresses_focus.png';
import i4 from '../../assets/icons/paymentMethods_focus.png';
import right from '../../assets/icons/right.png';

const Profile = () => {

    const navigation = useNavigation();

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

                <Text style={styles.title}>INFORMACIÓN</Text>
                <View
                    style={styles.container}
                >


                    <View style={styles.section}>
                        <Text
                            style={styles.txt}
                        >Quiero ser un mensajero</Text>
                        <Pressable
                            onPress={() => { navigation.navigate('CourierRequest') }}
                        >
                            <Image
                                resizeMode={'contain'}
                                source={right}
                            />
                        </Pressable>
                    </View>
                    <Divider />
                    <View style={styles.section}>
                        <Text
                            style={styles.txt}
                        >Quiero ser un aliado</Text>
                        <Pressable
                            onPress={() => { navigation.navigate('AllyRequest') }}
                        >
                            <Image
                                resizeMode={'contain'}
                                source={right}
                            />
                        </Pressable>
                    </View>
                    <Divider />
                    <View style={styles.section}>
                        <Text
                            style={styles.txt}
                        >Términos y condiciones</Text>
                        <Pressable
                            onPress={() => { navigation.navigate('TermsNConditions') }}
                        >
                            <Image
                                resizeMode={'contain'}
                                source={right}
                            />
                        </Pressable>
                    </View>
                    <Divider />
                    <View style={styles.section}>
                        <Text
                            style={styles.txt}
                        >Cerrar sesión</Text>
                        <Pressable
                            onPress={() => { navigation.navigate('Splash') }}
                        >
                            <Image
                                resizeMode={'contain'}
                                source={right}
                            />
                        </Pressable>
                    </View>

                </View>


            </View>

        </>
    );
}

export default Profile;