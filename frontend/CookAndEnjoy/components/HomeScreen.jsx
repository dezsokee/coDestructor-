import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, LogBox } from 'react-native';
import HomeCard from './HomeCard';
import { useState } from 'react';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { YellowBox } from 'react-native';

const HomeScreen = () => {

    const [monthlyQuests, setMonthlyQuests] = useState([]);
    const [monthlyQuests2, setMonthlyQuests2] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const [point, setPoints] = useState(0);
    const [flag, setFlag] = useState([]);

    console.disableYellowBox = false;
    
    console.disableYellowBox = false;
    YellowBox.ignoreWarnings(['']);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.117.213:3000/recipeByIngredients');

                let json = await response.json();

                setMonthlyQuests(json[1]);
                setMonthlyQuests2(json[0]);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    useFocusEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.117.213:3000/userIngredients');

                const json = await response.json();

                setUserIngredients(json);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    });
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://192.168.117.213:3000/getPoints');

    //             const json = await response.json();

    //             setPoints(json[0].points);

    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    useFocusEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.117.213:3000/getPoints');

                const json = await response.json();

                setPoints(json[0].points);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    });

    useEffect(() => {
        const fetchFlag = async () => {
            try {
                const response = await fetch('http://192.168.117.213:3000/flag');

                let json = await response.json();

                setFlag(json);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchFlag();
    }, []);


    const navigation = useNavigation();

    const quest1Handle = () => {
        navigation.navigate('Quest');
    };

    const userHandle = () => {
        navigation.navigate('User');
    };

    let actualFlag;

    flag.map((item) => {
        if(item.nation === monthlyQuests.country) {
            actualFlag=item.flag
        }
    });

    return (
        <>
            <View style={styles.container}>
                <View style={styles.dear}>
                    <Text style={styles.title}>
                        Welcome User!                     <Text style={styles.pointtext}> {point} </Text>
                    </Text>
                </View>

                <View style={styles.titleview}>
                    <Text style={styles.title}>Cook 'n Enjoy!</Text>
                </View>

                <View style={styles.topic}>
                    <Text style={styles.text}>This Month's Topic:</Text>
                    <View style={styles.rowflex}>
                        <Image source={{ uri: actualFlag }} style={{ width: 40, height: 40 }} />
                        <Text style={styles.topictext}>{monthlyQuests.country}</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={quest1Handle}>
                        <HomeCard quests={[monthlyQuests, monthlyQuests2]} title="Weekly Quests:">

                        </HomeCard>
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity onPress={userHandle}>
                            <Text style={styles.text2}>Your Ingredients:</Text>
                            <Text style={styles.text3}>Don't forget to use them! 🙌</Text>
                            <View style={styles.line}>
                            </View>
                            <Text style={styles.flexIngredient}>
                                {userIngredients.map((ingredient, index) => (
                                    <Text key={index} style={styles.ingredient}>
                                        <Text>  </Text> {ingredient.ingredient}<Text>  </Text>
                                    </Text>
                                ))}
                            </Text>
                        </TouchableOpacity>
                    </View>

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
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: 'white',
        marginRight: 10,
    },
    topic: {
        marginBottom: -46,
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
        marginBottom: 76,
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
    text2: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'center',
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        shadowColor: '#006400',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 1,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 16,
    },
    flexIngredient: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'center',
        marginBottom: 16,
    },
    text3: {
        fontSize: 15,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        textAlign: 'center',
        marginBottom: 16,
    },
    dear: {
        alignSelf: 'flex-start',
        marginLeft: 26,
        flex: 1,
        paddingTop: 20,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'left',
    },
    titleview: {
        flex: 1,
        marginTop: -20,
    },
    titleflex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    pointtext: {
        fontSize: 20,
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
        backgroundColor: '#006400',
    },
    pointview: {
        flex: 1,
        borderRadius: 40,
        padding: 5,
        marginLeft: 10,
        backgroundColor: '#006400',
        marginLeft: 280,
        verticalAlign: 'center',
    },
});


export default HomeScreen;