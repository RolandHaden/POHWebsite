import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SurveyPage from './SurveyPage';
import LoadingPage from './LoadingPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
          screen = {HomeScreen}
        />
        <Stack.Screen
          name = "Survey"
          component = {SurveyPage}
          screen = {SurveyPage}
        />
        <Stack.Screen
          name = "Loading"
          component = {LoadingPage}
          screen = {LoadingPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
