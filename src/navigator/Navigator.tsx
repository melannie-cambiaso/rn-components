import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Animation101Screen, Animation102Screen, HomeScreen } from '../screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101" component={Animation101Screen} />
      <Stack.Screen name="Animation102" component={Animation102Screen} />
    </Stack.Navigator>
  );
};

export default Navigator;
