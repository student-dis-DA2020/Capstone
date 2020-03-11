import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors'

import Home from "../screens/Home";
import Class from "../screens/Class";
import CarLine from "../screens/CarLine";
import BusLine from "../screens/BusLine";

const activeTintLabelColor = 'white';
const inactiveTintLabelColor = 'grey';

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Home </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='format-list-bulleted' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  },
  Class: {
    screen: Class,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> My Class </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='format-list-bulleted' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  },
  CarLine: {
    screen: CarLine,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Car Line </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='format-list-bulleted' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  },
  BusLine: {
    screen: BusLine,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Bus Line </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='format-list-bulleted' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  }
});

export default createAppContainer(TabNavigator);