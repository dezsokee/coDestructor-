import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import QuestScreen from './components/QuestScreen';
import Quest1 from './components/Quest1';
import Quest2 from './components/Quest2';
import User from './components/User';
import DiscountScreen from './components/DiscountScreen';
import DiscountPage from './components/DiscountPage';

const Stack = createStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Quest"
          component={QuestScreen}
        />
        <Stack.Screen
          name="BigQuest"
          component={Quest1}
        />
        <Stack.Screen
          name="BigQuest2"
          component={Quest2}
        />
        <Stack.Screen
          name="User"
          component={User}
        />
        <Stack.Screen
          name="Discount"
          component={DiscountScreen}
        />
        <Stack.Screen
          name="DiscountPage"
          component={DiscountPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
