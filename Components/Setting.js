import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Setting extends Component {
    static navigationOptions = {
       
        tabBarIcon: () => (
            <Image source={require('./../images/settings.png')} />
        ),
    };

    render() {
        return (
            <View>
                <Text>Setting</Text>  
            </View>
        );
    }
}