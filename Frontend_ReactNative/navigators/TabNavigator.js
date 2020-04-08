import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import colors from '../config/colors'
import {styles} from '../config/styles'

import Home from "../screens/Home";
import Class from "../screens/Class";
import BusLine from "../screens/BusLine";
import Cars from "../screens/Cars";
import Students from "../screens/Students";

const activeTintLabelColor = 'white';
const inactiveTintLabelColor = 'grey';

// const CarLineTabNavigator = createMaterialTopTabNavigator({
//   Cars: {
//     screen: Cars,
//     navigationOptions: {
//       indicatorStyle: {
//         height: '100%',
//         backgroundColor: colors.BLUE,
//       }
//     }
//   },
//   Students: {
//     screen: Students,
//     navigationOptions: {
//       indicatorStyle: {
//         height: '100%',
//         backgroundColor: colors.BLUE,
//       }
//     }
//   }
// });
const CarLineTabNavigator = createMaterialTopTabNavigator(
  {
    "Cars": { screen: Cars },
    "Students": { screen: Students },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      upperCaseLabel: false,
      scrollEnabled: true,
      activeTintColor: 'black',
      inactiveTintColor: 'rgb(180, 180, 180)',
      pressColor: colors.DARK_BLUE,
      style: {
        boxShadow: 'none',
        backgroundColor: colors.LIGHT_BLUE,
        numberOfLines: 1,
        alignContent: 'center'
      },
      tabStyle: {
        //
        alignContent: 'center'
      },
      labelStyle: {
        fontSize: 15,
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: colors.RED,
        borderBottomWidth: 4,
      },
    },
  }
);

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

const StackNavigator = createStackNavigator({
  TabNavigator:{
    screen: TabNavigator,
    navigationOptions: {
        header:() => 
          <CustomHeader title='School Dismissal App' icon='home'/>,
        headerStyle: {
          backgroundColor: colors.BLUE
        }
    }
  }
});


export default createAppContainer(StackNavigator);