import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./SearchAndDetailNavigator";
import {TopRatedScreen} from "../screens/TopRatedScreen";

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Accueil" component={TopRatedScreen} />
            <TabNavigator.Screen name="Recherche" component={SearchAndDetailNavigator} />
        </TabNavigator.Navigator>
    )
}