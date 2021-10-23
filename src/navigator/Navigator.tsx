import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  SwitchScreen
} from '../screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101" component={Animation101Screen} />
      <Stack.Screen name="Animation102" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
