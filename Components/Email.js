import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Email extends Component {
    static navigationOptions = {
       
        tabBarIcon: () => (
            <Image source={require('./../images/email.png')} />
        ),
    };

    render() {
        return (
            <View>
                <Text>Email</Text>  
            </View>
        );
    }
}