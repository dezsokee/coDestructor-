import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const IngredientInput = (props) => {
    
    const [selectedValue2, setSelectedValue] = useState('');

    const listIngredients = props.inputIngredients;

    const handleValueChange = (itemValue, index) => {
        setSelectedValue(itemValue);
        console.log(itemValue, index);
        props.onValueChange(itemValue, index); // Call the function passed via props
    };

    return (
        <View style={styles.flexDoboz}>
            
            

        </View>
    );
};

const styles = StyleSheet.create({
    flexDoboz: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20
    },
    input: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'gray',
        marginBottom: 10,
        paddingLeft: 10,
        marginTop: 10
    },
    picker: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'gray',
        marginBottom: 10,
        paddingLeft: 10,
        marginTop: 10
    }
});

export default IngredientInput;