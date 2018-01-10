import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SlideMenu extends Component {
    
    render() {
        let { navigation } = this.props;
        let { items } = this.props;

        let xhtml = items.map((value, key) => {
            return (
                <View key={key}>
                    <Text
                        navigation={navigation}
                        style={{ color: "white", padding: 5, paddingLeft: 10, paddingTop: 20, fontSize: 20, fontWeight: 'bold' }}
                        onPress={() => this.props.navigation.navigate(value.routeName)}
                    >
                        {value.routeName}
                    </Text>
                </View>
            )
        })

        return (
            <View style={{ flex: 1, backgroundColor: "#263238" }} >
                {xhtml}
            </View>
        )
    }
}