import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import * as SplashScreen from 'expo-splash-screen';
import StartScreen from './screen/StartScreen';
// import test from './screen/test';

const Stack = createNativeStackNavigator();
// useeffect ,usestate,navigation

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {/* <Stack.Screen name="test" component={test} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Calendar</Text>
      <Calendar
        markedDates={{
          '2024-08-27': { selected: true, marked: true, selectedColor: 'blue' },
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#e6f2ff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          arrowColor: 'orange',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 약간의 배경색으로 투명도 조절
    padding: 20,
    borderRadius: 10,
  },
  touchText: {
    fontSize: 18,
    color: '#000',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});