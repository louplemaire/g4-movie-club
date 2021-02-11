import React from 'react'
import {View, StyleSheet, Image} from "react-native";


export const Logo = (props) => {
    return (
        <View style={styles.logo_container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
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
    }
})