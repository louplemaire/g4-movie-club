import React from 'react';
import {View, FlatList} from "react-native";
import {getGenres} from "../services/movie";
import GenreItem from '../components/GenreItem';
import {Logo} from '../components/Logo';

export default class HomeScreen extends React.Component {

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
                <Logo/>
                <FlatList
                    data={this.state.genres}
                    renderItem={({item}) => <GenreItem genre={item} />}
                    // renderItem={({item, index}) => <GenreItem item={item} index={index} goToType={() => navigation.navigate('Genre', {title: item.name})} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                />
            </View>
        )
    }
}