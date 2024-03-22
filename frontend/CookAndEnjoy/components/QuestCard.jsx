import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const QuestCard = (props) => {

    const { quest } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.cardtitle}>{quest.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        padding: 25,
        borderRadius: 12,
        alignItems: 'left',
        marginBottom: 16,
        backgroundColor: '#90ee90',
        width: '80%',
    },
    cardtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        textAlign: 'left',
        marginTop: 5
    }
});

export default QuestCard;