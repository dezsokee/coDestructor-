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

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="user" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={homePress}>
                <Icon name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={questPress}>
                <Icon name="check" size={30} color="black" />
            </TouchableOpacity>
        </View>
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
    }
});


export default Footer;