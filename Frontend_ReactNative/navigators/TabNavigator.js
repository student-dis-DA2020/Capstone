import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "../screens/Home";
import Class from "../screens/Class";
import CarLine from "../screens/CarLine";
import BusLine from "../screens/BusLine";

const TabNavigator = createBottomTabNavigator({
  'Home': Home,
  'My Class': Class,
  'Car Line': CarLine,
  'Bus Line': BusLine
});

export default createAppContainer(TabNavigator);