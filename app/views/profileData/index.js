import React from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import ProfileMenu from '../../components/profileMenu';
import i1 from '../../assets/icons/profileData_focus.png';
import i2 from '../../assets/icons/ordersHistory.png';
import i3 from '../../assets/icons/myAddresses.png';
import i4 from '../../assets/icons/paymentMethods.png';

const ProfileData = () => {

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
                <ScrollView>
                    <View
                        style={styles.form}
                    >
                        <Text
                            style={styles.lbl}
                        >
                            Nombres
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Apellidos
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Número de identidad
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Email
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Número de celular
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Fecha de nacimiento
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <TouchableOpacity
                            style={styles.blackBtn}
                            onPress={() => { navigation.navigate('CreateAccount') }}
                        >
                            <Text
                                style={styles.whiteTxt}
                            >
                                GUARDAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </>
    );
}

export default ProfileData;