import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors'
import {styles} from '../config/styles'

import Home from "../screens/Home";
import Class from "../screens/Class";
import CarLine from "../screens/CarLine";
import BusLine from "../screens/BusLine";
import Cars from "../screens/Cars";
import Students from "../screens/Students";

const activeTintLabelColor = 'white';
const inactiveTintLabelColor = 'grey';

const CarLineTabNavigator = createMaterialBottomTabNavigator({
  Cars: {
    screen: Cars,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Icon name='car' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.LIGHT_BLUE
    },
  },
  Students: {
    screen: Students,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Icon name='account-group' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.LIGHT_BLUE
    },
  }
});

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Home </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='home' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  },
  Class: {
    screen: Class,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> My Class </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='google-classroom' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  },
  CarLine: {
    screen: CarLineTabNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Car Line </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='car' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  },
  BusLine: {
    screen: BusLine,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Bus Line </Text>,
      tabBarIcon: ({ focused }) => (
        <Icon name='bus' color={focused ? activeTintLabelColor : inactiveTintLabelColor} size={24} />
      ),
      tabBarColor: colors.DARK_BLUE
    }
  }
});

export default createAppContainer(TabNavigator);