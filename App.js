import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigator/TabNavigator";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  </ApolloProvider>
);

export default App;
