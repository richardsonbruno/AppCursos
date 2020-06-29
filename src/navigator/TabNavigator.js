import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HomeScreen from "../screen/HomeScreen";
import SectionScreen from "../screen/SectionScreen";
import CoursesScreen from "../screen/CoursesScreen";
import ProjectScreen from "../screen/ProjectScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = () => (
  <Stack.Navigator headerMode="none" mode="modal">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Section" component={SectionScreen} />
  </Stack.Navigator>
);

const CoursesStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Courses" component={CoursesScreen} />
  </Stack.Navigator>
);

const ProjectStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Project" component={ProjectScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={(props) => {
        let tabBarVisible = true;
        const routeName = props.route.state.routeNames[props.route.state.index];
        if (routeName === "Section") {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              size={26}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        };
      }}
    />
    <Tab.Screen
      name="CoursesStack"
      component={CoursesStack}
      options={{
        tabBarLabel: "Courses",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-albums"
            size={26}
            color={focused ? activeColor : inactiveColor}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProjectStack"
      component={ProjectStack}
      options={{
        tabBarLabel: "Project",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-folder"
            size={26}
            color={focused ? activeColor : inactiveColor}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
