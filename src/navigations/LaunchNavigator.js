import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {TypeScreen} from "../screens/TypeScreen"

const Stack = createStackNavigator();

export const LaunchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Recherche" component={MainBottomNavigator} />
            <Stack.Screen name="Genre" component={TypeScreen}/>
        </Stack.Navigator>
    )
}