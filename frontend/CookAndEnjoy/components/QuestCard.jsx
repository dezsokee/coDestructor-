import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const QuestCard = (props) => {

    const { quest } = props;

    const { width } = useWindowDimensions();

    const [isComplete, setIsComplete] = useState(props.isComplete);

    let ingredientsArray = "";

    if (!quest.ingredients) {
        return <View />;
    } else {
        ingredientsArray = quest.ingredients.split('/');
    }

    ingredientsArray.shift();

    const handleQuestCompletion = async () => {
        setIsComplete(true);
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
});

export default QuestCard;