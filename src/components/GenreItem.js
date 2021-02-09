import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class GenreItem extends React.Component {
    render() {
        const genre = this.props.genre
        return (
            <TouchableOpacity style={styles.genre_container}>
                <Text>{genre.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    genre_container: {
        height: 50
    }
})