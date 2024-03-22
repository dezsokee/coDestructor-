import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';
import QuestCard from './QuestCard';
import { useState } from 'react';

const QuestScreen = () => {

    const [quest1, setQuest1] = useState({title: "Quest 1", description: "This is the first quest"});
    const [quest2, setQuest2] = useState({title: "Quest 2", description: "This is the first quest"});

    return (
        <>
            <View>
                <QuestCard quest = {quest1}>

                </QuestCard>

                <QuestCard quest = {quest2}>

                </QuestCard>
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


export default QuestScreen;