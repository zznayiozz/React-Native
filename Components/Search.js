import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Search extends Component {
    static navigationOptions = {

        tabBarIcon: () => (
            <Image source={require('./../images/search.png')} />
        ),
    };

    render() {
        return (
            <View>
                <Text>Search</Text>
            </View>
        );
    }

   
}


