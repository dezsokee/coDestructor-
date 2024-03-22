import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = ({ route }) => {

    const navigation = useNavigation();

    const homePress = () => {
        navigation.navigate('Home');
    };

    const questPress = () => {
        navigation.navigate('Quest');
    };

    const userPress = () => {
        navigation.navigate('User');
    };

    return (
        <>
            <View style={styles.line}>
            </View>

            <View style={styles.container}>
                <TouchableOpacity onPress={userPress}>
                    <Icon name="user" size={30} color="#006400" />
                </TouchableOpacity>
                <TouchableOpacity onPress={homePress}>
                    <Icon name="home" size={30} color="#006400" />
                </TouchableOpacity>
                <TouchableOpacity onPress={questPress}>
                    <Icon name="check" size={30} color="#006400" />
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        padding: 25,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: '80%',
        alignSelf: 'center',
    },
});


export default Footer;