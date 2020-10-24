import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import ProfileMenu from '../../components/profileMenu';
import i1 from '../../assets/icons/profileData.png';
import i2 from '../../assets/icons/ordersHistory.png';
import i3 from '../../assets/icons/myAddresses_focus.png';
import i4 from '../../assets/icons/paymentMethods.png';
import location from '../../assets/icons/location.png';
import check from '../../assets/icons/check.png';
//
import direcciones from '../../assets/places/direcciones';
//

const ProfileData = () => {

    const navigation = useNavigation();

    const [checked, setChecked] = useState("")

    const checkin = (nombre) => {
        if (nombre == checked) {
            return (
                <Image
                    style={styles.check}
                    resizeMode={'contain'}
                    source={check}
                />
            );
        }
    }

    const Card = ({ item }) => {

        let { direccion, nombre } = item;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => setChecked(nombre)}
            >
                <Image
                    source={location}
                />
                <View style={styles.section}>
                    <Text style={styles.txt}>{direccion}</Text>
                    <Text style={styles.boldTxt}>{nombre}</Text>
                </View>
                {checkin(nombre)}
            </TouchableOpacity>
        );
    }

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

                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.lbl}>
                            Nueva direccion
                        </Text>
                        <TextInput style={styles.entry} />
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.lbl}>
                                    Nombre de la dirección
                            </Text>
                                <TextInput style={styles.entry} />
                            </View>

                            <View style={styles.column}>
                                <Text style={styles.lbl}>
                                    Detalle
                            </Text>
                                <TextInput style={styles.entry} />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.greenBtn}
                            onPress={() => { navigation.navigate('CreateAccount') }}
                        >
                            <Text style={styles.blackTxt}>
                                Agregar
                        </Text>
                        </TouchableOpacity>
                        <Text style={styles.lbl}>
                            Selecciona una dirección registrada
                    </Text>
                        <FlatList
                            data={direcciones}
                            renderItem={Card}
                            keyExtractor={direcciones => direcciones.nombre}
                        />
                        <TouchableOpacity
                            style={styles.blackBtn}
                        //onPress={() => { navigation.navigate('CreateAccount') }}
                        >
                            <Text style={styles.whiteTxt}>
                                Aceptar
                        </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>

        </>
    );
}

export default ProfileData;