import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const HomeCard = (props) => {
    const { width } = useWindowDimensions();

    const quest1 = props.quests[0];
    const quest2 = props.quests[1];

    return (
        <View style={[styles.container, { width: width * 0.8 }]}>
            <Text style={styles.text}>
                
            </Text>
            <Text style={styles.questText}>
                Q1: {quest1.name}
            </Text>
            <Text style={styles.questText}>
                Q2: {quest2.name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 12,
        alignItems: 'left',
        marginBottom: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 26,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 8,
    },
    questText: {
        fontSize: 16,
        marginBottom: 8,
        marginLeft: 8
    }
});

export default HomeCard;