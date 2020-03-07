import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";

const HomeScreenStacks = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => {
      title: "Home";
    }
  }
});

export default HomeScreenStacks;
