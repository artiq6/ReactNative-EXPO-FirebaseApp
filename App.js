import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Init from "./components/Init";
import Register from "./components/Register";
import Stations from "./components/Stations";
import Maps from "./components/Map";

const Root = createStackNavigator({
  Home: { screen: Home },
  Init: { screen: Init },
  Login: { screen: Login },
  Register: { screen: Register },
  Stations: { screen: Stations },
  Maps: { screen: Maps },
});

const App = createAppContainer(Root);


export default App;