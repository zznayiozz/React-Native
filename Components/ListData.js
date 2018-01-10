import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';




export default class ListData extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            pages: 1,
        };
    }

    componentDidMount() {
      
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((responseJson) => {
            arrayData = responseJson;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(arrayData)
            });
        })
        .catch((error) => {
            console.error(error);
        });
        
      
    }

 

    _onEndReached = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+ (this.state.pages+1))
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.length >= 1){
                arrayDatas = arrayDatas.concat(responseJson);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(arrayDatas),
                });
            }else {
               Alert.alert('End Data');
            }
        })
        .catch((error) => {
            console.error(error);
        });
       
      
       
    }

    render() {
        return (
            <View>
                <ListView
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={5}

                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <TouchableOpacity>
                        <View style={styles.list}>
                            <Text>{rowData.id}</Text>
                            <Text>{rowData.title}</Text>
                        </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        padding: 10,
    }
})