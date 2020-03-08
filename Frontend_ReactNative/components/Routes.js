import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../screens/Home.js/index.js.js'
import About from './About.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "class" component = {Class} title = "My Class"/>
         <Scene key = "bus-line" component = {BusLine} title = "Bus Line"/>
         <Scene key = "car-line" component = {CarLine} title = "Car Line" />
      </Scene>
   </Router>
)
export default Routes