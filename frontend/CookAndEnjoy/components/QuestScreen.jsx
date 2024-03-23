import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import Footer from './Footer';
import QuestCard from './QuestCard';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuestScreen = () => {

    const [quest1, setQuest1] = useState({});
    const [quest2, setQuest2] = useState({});

    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.117.213:3000/recipe');

                const json = await response.json();

                setQuest1(json.recipe1);
                setQuest2(json.recipe2);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    console.log(quest1);
    console.log(quest2);

    const quest1Handle = () => {
        navigation.navigate('BigQuest');
    };

    const quest2Handle = () => {
        navigation.navigate('BigQuest2');
    };

    return (
        <>
            <ScrollView>
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
            </ScrollView>

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