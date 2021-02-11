import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking, Animated} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./SearchAndDetailNavigator.js";
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen";
import {FontAwesome} from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        
        <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Recherche') {
              iconName = focused ? 'search' : 'search';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#B5A90F',
          inactiveTintColor: 'white',
          activeBackgroundColor:'#B00020',
          inactiveBackgroundColor: '#B00020',

        }}
        >
            <TabNavigator.Screen name="Accueil" component={HomeScreen} />
            <TabNavigator.Screen name="Recherche" component={SearchAndDetailNavigator} />
        </TabNavigator.Navigator>
    )
}