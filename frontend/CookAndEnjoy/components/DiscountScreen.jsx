import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DiscountCard from './DiscountCard';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';


const DiscountScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('DiscountPage');
    };

    return (
        <>
            <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 1"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 2"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 3"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 4"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 5"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 6"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 7"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 8"
                        description="Get 50% off on all products!"
                        discount={75}
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.container}>
                    <DiscountCard
                        title="Special Offer 9"
                        description="Get 50% off on all products!"
                        discount={75}
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
