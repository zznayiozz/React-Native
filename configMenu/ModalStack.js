import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './../styles/Styles';
import MyDrewerNavigator from './MyDrewerNavigator';


class ButtonMenu extends Component { 
    render() {
        let {props} = this;
        
        return (
            <View style={styles.groupHeader}>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('Intro');
                    }}>
                        <Image source={require('./../images/logo.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.user__Menu}>
                    <TouchableOpacity style={styles.user} onPress={() => {
                       
                    }}>
                        <Image source={require('./../images/user.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        if(props.navigation.state.index  === 0){
                            props.navigation.navigate('DrawerOpen');
                        }else{
                            props.navigation.navigate('DrawerClose');
                        }
                    }}>
                        <Image source={require('./../images/menu-button.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
}
    const ModalStack = StackNavigator(
        {
            MyDrewerNavigator: { screen: MyDrewerNavigator },
        },
        {
            headerMode: 'float',
            navigationOptions: ({ navigation }) => ({
                header: <ButtonMenu navigation={navigation} />,
            })
        }

    );




    export default ModalStack;