import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking} from "react-native";
import {getLatest, getMovie} from "../services/movie";

export const DetailScreen = (props) => {
    const {route, navigation} = props;
    const [movie, setMovie] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route && route.params && route.params.title ? route.params.title : 'Dernier film sortit'
        })
    })

    useEffect(() => {
        if (route && route.params && route.params.id) {
            getMovie(route.params.id)
                .then(setMovie)
            } else {
                getLatest()
                    .then(setMovie)
            }
        }, [])

    function handlePress() {
        if (movie) {
            Linking.canOpenURL(movie.homepage).then((supported) => {
                if (supported) {
                    Linking.openURL(movie.homepage);
                } else {
                    console.log("Don't know how to open URI: " + movie.homepage);
                }
            });
        }
    }

    if (!movie) {
        return null;
    }

    return (
        <View style={styles.page}>
            <ScrollView>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
                    style={styles.imageBg}
                />
                <View style={styles.movie}>
                     <View style={styles.header}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.headerInfo}>
                            <View style={styles.headerInfoText}>
                                {movie.title !== '' && <Text style={styles.title}>{movie.title}</Text>}
                                {movie.production_companies.length > 0 && <Text style={styles.director}>{movie.production_companies[0].name}</Text>}
                                {movie.vote_average !== '' && <Text style={styles.time}>{movie.runtime} min</Text>}
                            </View>
                            <View>
                                <Image source={require('../../assets/images/button_play.png')} style={styles.imagePlay} />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.overviewTitle}>Synopsis</Text>
                    {movie.overview !== '' && <Text style={styles.overview}>{movie.overview}</Text>}
                 </View>
            </ScrollView>
            {movie.homepage !== '' && (
                <View style={styles.footer}>
                <Button color="#B00020" onPress={handlePress} title="Trailer" />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F4F4F4",
        flex: 1,
    },
    imageBg: {
        height: 350,
        resizeMode: 'cover',
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 36,
        alignItems: 'center'
    },
    headerInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        color: "#B5A90F",
        fontWeight: 'bold',
    },
    headerInfoText: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        borderWidth: 4,
        padding: 4,
        borderColor: "#FFFFFF",
        flexWrap: "wrap",
        width: 220
    },
    image: {
        borderColor: "#FFFFFF",
        borderRadius: 15,
        borderWidth: 4,
        height: 134,
        marginRight: 8,
        width: 84,
    },
    imagePlay: {
        alignSelf: "flex-end",
        height: 58,
        width: 58,
    },
    director: {
        fontSize: 13,
        fontWeight: "100",
        marginBottom: 10,
        color: "#B5A90F"
    },
    movie: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 120,
        paddingLeft: 18,
        paddingRight: 18,
        top: -60,
        zIndex: 1,
    },
    time: {
        color :"#B5A90F"
    },
    good_film: {
        color: 'green'
    },
    bad_film: {
        color: 'red',
    },
    overview: {
        lineHeight: 24,
        color: "#B5A90F"
    },
    overviewTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#B5A90F"
    },
    footer: {
        bottom: 0,
        left: 0,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 12,
        position: "absolute",
        right: 0,
        zIndex: 2
    },
})

