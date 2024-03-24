import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Footer from './Footer';

const DiscountCard = ({ title, description, discount, onPress, points }) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.discount}>{discount}% OFF</Text>
                    </View>
                    <Text style={styles.description}>{points} points</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </TouchableOpacity>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        shadowColor: '#006400',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    discount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    },
    description: {
        fontSize: 16,
    },
});

export default DiscountCard;
