import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import Footer from './Footer';
import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import IngredientInput from './IngredientInput';
import { Picker } from '@react-native-picker/picker';

const User = () => {

    [counter, setCounter] = useState(1);
    [inputCounter, setInputCounter] = useState(1);
    [ingredients, setIngredients] = useState([]);
    [selectedIngredients, setselectedIngredients] = useState([]);

    const [selectedValue1, setSelectedValue1] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [selectedValue3, setSelectedValue3] = useState("");
    const [selectedValue4, setSelectedValue4] = useState("");
    const [selectedValue5, setSelectedValue5] = useState("");

    ingredients.unshift(
        {
            ingredient_name: "Select one!"
        }

    );

    const handleValueChange1 = (itemValue) => {
        setSelectedValue1(itemValue);
    };

    const handleValueChange2 = (itemValue) => {
        setSelectedValue2(itemValue);
    };

    const handleValueChange3 = (itemValue) => {
        setSelectedValue3(itemValue);
    };

    const handleValueChange4 = (itemValue) => {
        setSelectedValue4(itemValue);
    };

    const handleValueChange5 = (itemValue) => {
        setSelectedValue5(itemValue);
    };

    const { width } = useWindowDimensions();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.117.213:3000/ingredients');

                const json = await response.json();
                setIngredients(json);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const [responseData, setResponseData] = useState('');

    const sendDataToServer = async () => {
        try {
            const response = await fetch('http://192.168.117.213:3000/createIngredients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "selectedIngredientPass1": selectedValue1,
                    "selectedIngredientPass2": selectedValue2,
                    "selectedIngredientPass3": selectedValue3,
                    "selectedIngredientPass4": selectedValue4,
                    "selectedIngredientPass5": selectedValue5
                }),
            });

            const responseJson = await response.json();
            console.log(responseJson);

        } catch (error) {
            console.error('Error:', error);
        }
    };

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


                <View style={styles.scrollview}>

                    <View style={styles.pickerview}>

                        <View style={styles.picker}>
                            <Text style={styles.label}>Ingredient {counter++}:</Text>

                            <Picker
                                selectedValue={selectedValue1}
                                onValueChange={handleValueChange1}
                                style={{ height: 50, width: 200 }}>
                                {ingredients.map((ingredient, index) => {
                                    return <Picker.Item key={index} label={ingredient.ingredient_name} value={ingredient.ingredient_name} />
                                })}
                            </Picker>
                        </View>

                        <View style={styles.picker}>
                            <Text style={styles.label}>Ingredient {counter++}:</Text>

                            <Picker
                                selectedValue={selectedValue2}
                                onValueChange={handleValueChange2}
                                style={{ height: 50, width: 200 }}>
                                {ingredients.map((ingredient, index) => {
                                    return <Picker.Item key={index} label={ingredient.ingredient_name} value={ingredient.ingredient_name} />
                                })}
                            </Picker>
                        </View>

                        <View style={styles.picker}>
                            <Text style={styles.label}>Ingredient {counter++}:</Text>

                            <Picker
                                selectedValue={selectedValue3}
                                onValueChange={handleValueChange3}
                                style={{ height: 50, width: 200 }}>
                                {ingredients.map((ingredient, index) => {
                                    return <Picker.Item key={index} label={ingredient.ingredient_name} value={ingredient.ingredient_name} />
                                })}
                            </Picker>
                        </View>

                        <View style={styles.picker}>

                            <Text style={styles.label}>Ingredient {counter++}:</Text>

                            <Picker
                                selectedValue={selectedValue4}
                                onValueChange={handleValueChange4}
                                style={{ height: 50, width: 200 }}>
                                {ingredients.map((ingredient, index) => {
                                    return <Picker.Item key={index} label={ingredient.ingredient_name} value={ingredient.ingredient_name} />
                                })}
                            </Picker>
                        </View>

                        <View style={styles.picker}>

                            <Text style={styles.label}>Ingredient {counter++}:</Text>

                            <Picker
                                selectedValue={selectedValue5}
                                onValueChange={handleValueChange5}
                                style={{ height: 50, width: 200 }}>
                                {ingredients.map((ingredient, index) => {
                                    return <Picker.Item key={index} label={ingredient.ingredient_name} value={ingredient.ingredient_name} />
                                })}
                            </Picker>
                        </View>

                    </View>

                </View>

                <TouchableOpacity style={[styles.button, { width: width * 0.6 }]} onPress={sendDataToServer}>
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
        marginBottom: 20
    },
    buttontext: {
        fontSize: 17,
        color: '#006400',
        textAlign: 'center',
    },
    plusbutton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#006400',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
    },
    plus: {
        fontSize: 20,
        color: 'white',
    },
    scroll: {
        backgroundColor: 'white',
    },
    scrollview: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    pickerview: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        width: '100%'
    }
});

export default User;