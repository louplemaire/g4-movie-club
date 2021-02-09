import React from 'react';
import { View, FlatList, Text } from "react-native";
import { getGenres } from "../services/movie";
import GenreItem from '../components/GenreItem';


export default class TopRatedScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { genres: [] }
    }

    _loadGenres() {
        getGenres().then(data => {
            this.setState({ genres: data.genres })
        })
    }

    render() {
        this._loadGenres()
        return (
            <View>
                <Text>Hello, ici c'est l'accueil</Text>
                <FlatList
                    data={this.state.genres}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <GenreItem genre={item} />}
                />
            </View>
        )
    }
}