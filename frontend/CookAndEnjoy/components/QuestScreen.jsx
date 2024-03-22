import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import QuestCard from './QuestCard';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuestScreen = () => {

    const [quest1, setQuest1] = useState({ title: "Quest 1", description: "This is the first quest", ingredients: ["ingredient1", "ingredient2", "ingredient3"] });
    const [quest2, setQuest2] = useState({ title: "Quest 2", description: "This is the first quest", ingredients: ["ingredient1", "ingredient2", "ingredient3"] });

    const navigation = useNavigation();

    const quest1Handle = () => {
        navigation.navigate('BigQuest');
    };

    const quest2Handle = () => {
        navigation.navigate('BigQuest2');
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Quest Screen</Text>
                <Text style={styles.subtitle}>Cook And</Text>

                <View style={styles.flexdoboz}>
                    <Text style={styles.subtitle2}>Enjoy!</Text>

                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={quest1Handle}>
                        <QuestCard quest={quest1}>

                        </QuestCard>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.card}>
                    <TouchableOpacity onPress={quest2Handle}>
                        <QuestCard quest={quest2}>
                            </QuestCard>
                    </TouchableOpacity>
                </View>
                
            </View >

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
        backgroundColor: 'white',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 20,
        color: 'black'
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        marginBottom: -7
    },
    card: {
        marginBottom: 20,
    },
    subtitle2: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#006400',
    },
    flexdoboz: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default QuestScreen;