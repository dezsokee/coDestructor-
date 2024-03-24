import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DiscountCard from './DiscountCard';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const DiscountScreen = () => {
    const navigation = useNavigation();

    const sendDataToServer = async () => {
        try {
            const response = await fetch('http://192.168.117.213:3000/decreasePoints', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "points": 150
                }),
            });

            const responseStatus = await response.status;
            console.log(responseStatus);

            if(responseStatus === 500){
                alert("Not enough points");
            } else {
                alert("Discount applied successfully");
                navigation.navigate('DiscountPage');
            }


        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePress = () => {
        sendDataToServer();
    };

    return (
        <>
            <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 1"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                        disabled={true}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 2"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 3"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 4"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 5"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 6"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 7"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 8"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 9"
                        description="Get 50% off on all products!"
                        discount={75}
                        points={150}
                        onPress={handlePress}
                    />
                </View>
            </ScrollView>
            <Footer>
                
            </Footer>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    },
    scrollview: {
        backgroundColor: 'white',
    },
});

export default DiscountScreen;
