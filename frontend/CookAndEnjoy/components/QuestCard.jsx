import React, { useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Platform, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const QuestCard = (props) => {

    const { quest } = props;

    const { width } = useWindowDimensions();

    const [isComplete, setIsComplete] = useState(props.isComplete);
    const [data, setData] = useState("");

    let ingredientsArray = "";

    if (!quest.ingredients) {
        return <View />;
    } else {
        ingredientsArray = quest.ingredients.split('/');
    }

    ingredientsArray.shift();

    console.log(data);

    const sendDataToServer = async () => {
        try {
            const response = await fetch('http://192.168.117.213:3000/increasePoints', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "points": 150
                }),
            });

            const responseJson = await response.json();
            console.log(responseJson);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleQuestCompletion = async () => {
        setIsComplete(true);
        sendDataToServer();
        alert("Quest completed!");
    }

    return (
        <View style={[styles.container, { width: width * 0.8 }]}>
            <Text style={styles.cardtitle}>{quest.name}</Text>
            <Text style={styles.carddescripton}> {quest.description} </Text>
            <Text>
                {ingredientsArray.map((ingredient, index) => {
                    return (
                        <Text key={index} style={styles.hozzavaloszoveg}>
                            <Icon name="angle-right" size={20} color="#006400" />
                            {ingredient}
                            {"\n"}
                        </Text>
                    );

                })}
            </Text>

                <View style = {styles.imageview}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: props.uri }}
                    />
                </View>
            
            <View style = {styles.pointview}>
                <Text style = {styles.pointtext}>
                    150 points
                </Text>
            </View>

            {isComplete ? (
                <TouchableOpacity style={[styles.completeButton, styles.disabledButton]} disabled>
                    <Text style={styles.buttonText}>Quest Completed</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.completeButton} onPress={handleQuestCompletion}>
                    <Text style={styles.buttonText}>Complete Quest</Text>
                </TouchableOpacity>
            )}

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 12,
        borderColor: '#7FB069',
        borderWidth: 2,
        alignItems: 'left',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.5, // Set shadow opacity
        shadowRadius: 5, // Set shadow radius
        elevation: 10,
    },
    cardtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'left',
        marginTop: 5,
        textShadowColor: '#006400', // Shadow color
        textShadowOffset: { width: 1, height: 1 }, // Shadow offset
        textShadowRadius: 1,
        color: '#006400'
    },
    carddescripton: {
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    hozzavaloszoveg: {
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'left',
        marginTop: 5
    },
    completeButton: {
        backgroundColor: '#7FB069',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#d3d3d3', // Light grey color for disabled state
    },
    pointview: {
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    pointtext: {
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'center',
        color: 'black',
    },
    imageview: {
        marginTop: 10,
        alignItems: 'center'
    },
});

export default QuestCard;