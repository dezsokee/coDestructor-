import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeCard from './HomeCard';
import { useState } from 'react';
import Footer from './Footer';

const HomeScreen = ({ route }) => {
    const { topic } = route.params;

    const weeklyQuests = [
        'Quest 1',
        'Quest 2'
    ];

    const [monthlyQuests, setMonthlyQuests] = useState(["quest1", "quest2"]);
    const [monthlyQuests2, setMonthlyQuests2] = useState(["lastweekquest1", "lastweekquest2"]);

    return (
        <>
        <View className="items">
            <Text style={styles.title}>Cook 'n Enjoy!</Text>
        </View>

            <View style={styles.container}>
                <View style={styles.topic}>
                    <Text style={styles.text}>This Month's Topic:</Text>
                    <Text style={styles.text}>{topic}</Text>
                </View>

                <View>
                    <HomeCard quests={monthlyQuests} title="Weekly Quests:">

                    </HomeCard>

                    <HomeCard quests={monthlyQuests2} title="Last Week's Quests:">

                    </HomeCard>
                </View>

                <View>
                </View>

            </View>
            <Footer>

            </Footer>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(190, 199, 180, 1)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        fontFamily: 'monospace',
        textAlign: 'center',
        marginTop: 16
    },
    topic: {
        marginBottom: 16,
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        marginBottom: 8,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    }
});


export default HomeScreen;