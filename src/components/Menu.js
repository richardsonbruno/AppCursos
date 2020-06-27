import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").height;

import { useSelector, useDispatch } from "react-redux";

const Menu = (props) => {
  const menu = useSelector((state) => state.menuReducers.action);
  const { name: userName } = useSelector((state) => state.nameReducer);
  const dispatch = useDispatch();

  const [top, setTop] = useState(new Animated.Value(screenHeight));

  const items = [
    {
      icon: "ios-settings",
      title: "Account",
      text: "settings",
    },
    {
      icon: "ios-card",
      title: "Billing",
      text: "payments",
    },
    {
      icon: "ios-compass",
      title: "Learn React",
      text: "start course",
    },
    {
      icon: "ios-exit",
      title: "Log out",
      text: "see you soon!",
    },
  ];

  useEffect(() => {
    toggleMenu();
  }, [menu]);

  const toggleMenu = () => {
    if (menu === "openMenu") {
      Animated.spring(top, {
        toValue: 54,
      }).start();
    }

    if (menu === "closeMenu") {
      Animated.spring(top, {
        toValue: screenHeight,
      }).start();
    }
  };

  return (
    <AnimatedContainer style={{ top: top }}>
      <Cover>
        <Image source={require("../../assets/background2.jpg")} />
        <Title>{userName}</Title>
        <Subtitle>Designer at Design+</Subtitle>
      </Cover>

      <TouchableOpacity
        onPress={() => dispatch({ type: "CLOSE_MENU" })}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>

      <Content>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Image = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Content = styled.View`
  background: #f0f3f5;
  height: ${screenHeight}px;
  padding: 50px;
`;
