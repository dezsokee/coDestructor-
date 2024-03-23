import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const IngredientInput = (props) => {
    return (
        <View style={styles.flexDoboz}>
            <Text style={styles.label}>Ingredient {props.value}:</Text>
            <Picker style={styles.picker}
                selectedValue={''} // Set the selected value here
                onValueChange={(itemValue, itemIndex) => {
                    // Handle selection change here
                }}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
            </Picker>

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