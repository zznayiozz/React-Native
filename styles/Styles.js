import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    groupHeader: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    logo: {
        flex: 1,
        paddingLeft: 10,
    },
    user__Menu: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 10,
    },
    user: {
        marginRight: 10,
    }


});

export default styles;