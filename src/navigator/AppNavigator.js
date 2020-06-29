import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "../screen/HomeScreen";
import SectionScreen from "../screen/SectionScreen";

const AppNavigator = () => (
  <Stack.Navigator headerMode="none" mode="modal">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Section" component={SectionScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
