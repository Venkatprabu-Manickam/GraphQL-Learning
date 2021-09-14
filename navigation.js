import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DogsHomeScreen } from "./screens/home";
import { DogsDetails } from "./screens/details";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = {'Home'}>
      <Stack.Screen name="Dogs World" component={DogsHomeScreen} />
      <Stack.Screen name="Details" component={DogsDetails} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}