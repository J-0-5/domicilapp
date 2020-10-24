import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import moto from '../../assets/icons/moto.png';
import bike from '../../assets/icons/bike.png';
import add from '../../assets/icons/add.png';
import right from '../../assets/icons/right.png';

const CourierRequest = () => {

    const navigation = useNavigation();

    const [maleBtn, setMaleBtn] = useState();
    const [femaleBtn, setFemaleBtn] = useState();
    const [motoType, setMotoType] = useState();
    const [bikeType, setBikeType] = useState();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useEffect(() => {
        setMaleBtn(styles.genderBtn);
        setFemaleBtn(styles.genderBtn);
        setMotoType(styles.typeBtn);
        setBikeType(styles.typeBtn);
    }, []);

    return (
        <>
            <View style={styles.bg}>

                <Header />
                <ScrollView>
                    <View
                        style={styles.form}
                    >

                        <Text
                            style={styles.lbl}
                        >
                            Nombres*
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Apellidos*
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Número de identidad*
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Dirección*
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Email*
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Número de celular*
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
                        <Text
                            style={styles.lbl}
                        >
                            Sexo*
                        </Text>
                        <View style={styles.btnBox}>
                            <TouchableOpacity
                                style={maleBtn}
                                onPress={() => {
                                    setMaleBtn(styles.focusGenderBtn)
                                    setFemaleBtn(styles.genderBtn)
                                }}
                            >
                                <Text style={styles.txt}>Hombre</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={femaleBtn}
                                onPress={() => {
                                    setMaleBtn(styles.genderBtn)
                                    setFemaleBtn(styles.focusGenderBtn)
                                }}
                            >
                                <Text style={styles.txt}>Mujer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.typeTxt}>Tipo de vehículo*</Text>
                            <View style={styles.btnBox}>
                                <TouchableOpacity
                                    style={motoType}
                                    onPress={() => {
                                        setMotoType(styles.focusTypeBtn)
                                        setBikeType(styles.typeBtn)
                                    }}
                                >
                                    <Image
                                        resizeMode={'contain'}
                                        source={moto}
                                        style={styles.img}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={bikeType}
                                    onPress={() => {
                                        setMotoType(styles.typeBtn)
                                        setBikeType(styles.focusTypeBtn)
                                    }}
                                >
                                    <Image
                                        resizeMode={'contain'}
                                        source={bike}
                                        style={styles.img}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.addContainer}>
                            <Text style={styles.addTxt}>Adjuntar foto de la cédula por las dos caras*</Text>
                            <TouchableOpacity 
                                onPress={() => { navigation.navigate('AttachSOAT')}}
                                style={styles.addBtn}
                            >
                                <Image
                                    resizeMode={'contain'}
                                    source={add}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addContainer}>
                            <Text style={styles.addTxt}>Adjuntar foto de SOAT*</Text>
                            <TouchableOpacity 
                                onPress={() => { navigation.navigate('AttachID')}}
                                style={styles.addBtn}
                            >
                                <Image
                                    resizeMode={'contain'}
                                    source={add}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addContainer}>
                            <Text
                                style={styles.endTxt}
                            >Ver términos y condiciones</Text>
                            <Pressable
                                onPress={() => { navigation.navigate('TermsNConditions') }}
                            >
                                <Image
                                    resizeMode={'contain'}
                                    source={right}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.endContainer}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text
                                style={styles.endTxt}
                            >Acepto y declaro que he leído los términos
                            y condiciones</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.blackBtn}
                        //onPress={() => { navigation.navigate('CreateAccount') }}
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

export default CourierRequest;