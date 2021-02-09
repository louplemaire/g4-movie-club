import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

export const ResultSearch = (props) => {
    const {textSearched} = props;
    return (
        <View style={styles.main_container}>
            <Text>Résultat de la recherche : </Text><Text style={styles.textSearched}>{textSearched}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        marginHorizontal: 5,
        marginVertical: 10,
        flexDirection: 'row'
    },
    textSearched: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#B5A90F'
    }
})