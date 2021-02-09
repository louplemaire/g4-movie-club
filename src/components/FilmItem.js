import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const FilmItem = (props) => {
    const {film, goToDetail, screenName} = props;

    return(
        <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
            <View style={styles.main_information_container}>
                <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}} style={styles.image} />
                <View style={styles.content_container}>
                    <View>
                        <Text style={styles.title_text}>{film.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.date_text}>{(film.release_date ?? '').split('-')[0]}</Text>
                    </View>
                </View>
                {screenName !== 'TopRated' && film.vote_average > 7 && <View style={{justifyContent: 'center', alignItems: 'space-between', marginRight: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#B00020'}}>{film.vote_average}</Text>
                </View>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: '#B00020',
        shadowOpacity: 0.70,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4,
        }
    },
    content_container: {
        flex: 1,
        margin: 8,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row',
        width: '100%',
    },
    image: {
        width: 80,
        height: 120,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5,
        color: '#B5A90F'
    },
    date_text: {
        flexWrap: 'wrap',
        marginTop: 4,
        color: '#B5A90F'
    },
    picto: {
        width: 30,
        height: 30,
    }
})