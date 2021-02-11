import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class GenreItem extends React.Component {
    render() {
        const genre = this.props.genre
// export const GenreItem = (props) => {
//     const {genre, goToType, index} = props;

        return (
            <TouchableOpacity style={styles.genre_container}> {/* onPress={goToType} */}
                <View style={styles.button_container}>
                    <Text style={styles.button_text}>{genre.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button_container: {
        flex: 1,
        margin: 16,
        width: 174,
        backgroundColor: "#FFFFFF",
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: '#B00020',
        shadowOpacity: 0.70,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4,
        }
    },
    button_text: {
        fontSize: 15,
        color: "#B00020",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "capitalize"
    },
})