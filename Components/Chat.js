import React, { Component } from 'react';
import { Text, View , Image} from 'react-native';

export default class Chat extends Component {
    static navigationOptions = {
      
        tabBarIcon: () => (
            <Image source={require('./../images/chat.png')} />
        ),
    };

    render() {
        return (
            <View>
                <Text>CHAT</Text>  
            </View>
        );
    }
}