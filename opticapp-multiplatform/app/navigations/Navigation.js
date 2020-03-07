import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreenStacks from "./GlassStacks";

const NavigationStacks = createBottomTabNavigator({
  Home: {
    screen: HomeScreenStacks,
    navigationOptions: () => ({
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon type="material-community" name="glasses" color={tintColor}></Icon>
      )
    })
  }
});

export default createAppContainer(NavigationStacks);
