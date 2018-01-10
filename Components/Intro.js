import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';

import Home from './Home';


// const MenuButton = (props) => (
//     <View style={styles.groupHeader}>
//         <TouchableOpacity style={styles.user}>
//             <Image source={require('./../images/user.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity  onPress={() => { props.navigation.navigate('DrawerOpen') }}>
//             <Image source={require('./../images/menu-button.png')} />
//         </TouchableOpacity>
//     </View>
// )

// const Logo = (props) => (
//     <View >
//         <TouchableOpacity>
//             <Image source={require('./../images/logo.png')} />
//         </TouchableOpacity>
//     </View>
// )

export default class Intro extends Component {
    // static navigationOptions = ({ navigation }) => ({
    //     headerRight: <MenuButton navigation={navigation} />,
    //     headerLeft: <Logo />,
    //     headerStyle: { paddingLeft: 10,  paddingRight: 10, backgroundColor: '#2196F3'  }
    // });


    render() {
       
        return (
            <View style={styles.wraper}>
                <View style={styles.box}>
                    <Image style={styles.logo} source={require('./../images/baby.png')} />
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="PRESS ME"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: "white",
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 170,
        height: 220,

    },

    headerRight: {
        flex: 1,
        flexDirection: 'column',
    },

    groupHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    user: {
        marginRight: 10,
    }

});