import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import HomeCard from './HomeCard';
import { useState } from 'react';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {

    const [monthlyQuests, setMonthlyQuests] = useState([]);
    const [monthlyQuests2, setMonthlyQuests2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://192.168.117.213:3000/recipe');
            
            const json = await response.json();

            setMonthlyQuests(json.recipe1);
            setMonthlyQuests2(json.recipe2);

          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);

    console.log(monthlyQuests);
    const topic = monthlyQuests.country;
    const navigation = useNavigation();

    const quest1Handle = () => {
        navigation.navigate('BigQuest');
    };

    const quest2Handle = () => {
        navigation.navigate('BigQuest2');
    };

    const nation = monthlyQuests.country;

    const myString = "require('../assets/{nation}.png')";

    return (
        <>
            <View style={styles.container}>

                <View className="items">
                    <Text style={styles.title}>Cook 'n Enjoy!</Text>
                </View>

                <View style={styles.topic}>
                    <Text style={styles.text}>This Month's Topic:</Text>
                    <View style={styles.rowflex}>
                        <Image source={require('../assets/italy.png')} style={{ width: 40, height: 40 }} />
                        <Text style={styles.topictext}>{topic}</Text>
                    </View>

                </View>

                <View>
                    <TouchableOpacity onPress={quest1Handle}>
                        <HomeCard quests={[monthlyQuests, monthlyQuests2]} title="Weekly Quests:">

                        </HomeCard>
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={quest2Handle}>
                        <HomeCard quests={monthlyQuests2} title="Last Week's Quests:">

                        </HomeCard>
                    </TouchableOpacity> */}

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
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'center',
        marginTop: 16,
        backgroundColor: 'white'
    },
    topic: {
        marginBottom: 16,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        borderColor: '#7FB069',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOpacity: 0.5, // Set shadow opacity
        shadowRadius: 5, // Set shadow radius
        elevation: 10,
        width: '110%',
        alignItems: 'center',
        marginBottom: 26,
    },
    text: {
        fontSize: 22,
        marginBottom: 8,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    },
    topictext: {
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        marginLeft: 15,
    },
    rowflex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default HomeScreen;