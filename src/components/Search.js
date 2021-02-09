import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image} from "react-native";

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (
        <View>
            <View style={styles.logo_container}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
            </View>
            <View style={styles.main_container}>
                <View style={styles.input_container}>
                    <Image source={require('../../assets/images/loupe.jpg')} style={styles.picto}/>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Titre du film'
                        onChangeText={onChangeText}/>
                </View>
                <View style={styles.button_container}>
                    <View style={styles.size_button}></View>
                    <View style={styles.size_button}>
                        <Button
                            disabled={isDisabled}
                            title='Rechercher'
                            color='#B5A90F'
                            onPress={() => props.handleClickButton()}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo_container: {
        width: 110,
        height: 110,
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 32,
        borderWidth: 5,
        borderRadius: 55,
        borderColor: '#B00020'
    },
    logo: {
        width: 100,
        height: 100
    },
    main_container: {
        padding: 30,
        backgroundColor: '#B00020',
        borderRadius: 15
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    picto: {
        width: 25,
        height: 25
    },
    textinput: {
        width: "100%",
        height: 50,
        paddingLeft: 10,
        color: '#B00020'
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    size_button: {
        width: 150
    }
})
