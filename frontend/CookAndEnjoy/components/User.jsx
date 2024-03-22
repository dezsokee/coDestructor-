import React from 'react';
import { View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import Footer from './Footer';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const User = () => {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    
    const { width } = useWindowDimensions();

    const submit = () => {
        console.log(input1);
        console.log(input2);
        console.log(input3);
        console.log(input4);
        console.log(input5);
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.ingredienttext}>
                    Tell us about your
                </Text>

                <View style={styles.flexbox}>
                    <Text style={styles.ingredienttext2}>
                        unnecesary
                    </Text>

                    <Text style={styles.ingredienttext}>
                        ingredients!
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Label 1:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInput1}
                        placeholder="Input 1"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Label 2:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInput2}
                        placeholder="Input 2"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Label 3:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInput3}
                        placeholder="Input 3"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Label 4:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInput4}
                        placeholder="Input 4"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Label 5:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInput5}
                        placeholder="Input 5"
                    />
                </View>

                <TouchableOpacity style={[styles.button, {width: width * 0.6}]} onPress={submit}>
                    <Text style={styles.buttontext}>Submit</Text>
                </TouchableOpacity>

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
    ingredienttext: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        padding: 20
    },
    ingredienttext2: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        padding: 20
    },
    flexbox: {
        flexDirection: 'row',

        alignItems: 'center',
        marginTop: -40
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#006400',
        borderBlockEndColor: 'black',
        borderBlockStartColor: 'black',
        shadowColor: '#000',
        shadowOpacity: 0.5, // Set shadow opacity
        shadowRadius: 5, // Set shadow radius
        elevation: 10,

    },
    buttontext: {
        fontSize: 17,
        color: '#006400',
        textAlign: 'center',
    }
});

export default User;