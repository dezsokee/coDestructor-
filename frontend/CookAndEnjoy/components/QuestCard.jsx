import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuestCard = (props) => {

    const { quest } = props;

    const { width } = useWindowDimensions();

    let ingredientsArray = "";

    if (!quest.ingredients) {
        return <View />;
    } else {
        ingredientsArray = quest.ingredients.split('/');
    }

    ingredientsArray.shift();

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
        marginTop: 5
    },
    hozzavaloszoveg: {
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'left',
        marginTop: 5
    }
});

export default QuestCard;