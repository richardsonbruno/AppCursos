import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigator/AppNavigator";
import TabNavigator from "./src/navigator/TabNavigator";

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
