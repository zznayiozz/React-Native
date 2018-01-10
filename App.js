import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import Navigstor from './configMenu/index';



class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={true} />
                <Navigstor />
              
            </View>
        )
    }
}



export default App;


