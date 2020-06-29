import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import Card from "../components/Card";
import { NotificationIcon } from "../components/Icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import Avatar from "../components/Avatar";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const menu = useSelector((state) => state.menuReducers.action);
  const { name: userName } = useSelector((state) => state.nameReducer);

  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));

  const [logos] = useState([
    {
      image: require("../../assets/logo-framerx.png"),
      text: "Framer X",
    },
    {
      image: require("../../assets/logo-figma.png"),
      text: "Figma",
    },
    {
      image: require("../../assets/logo-studio.png"),
      text: "Studio",
    },
    {
      image: require("../../assets/logo-react.png"),
      text: "React",
    },
    {
      image: require("../../assets/logo-swift.png"),
      text: "Swift",
    },
    {
      image: require("../../assets/logo-sketch.png"),
      text: "Sketch",
    },
  ]);

  const [cards] = useState([
    {
      title: "React Native for Designers",
      image: require("../../assets/background11.jpg"),
      subtitle: "React Native",
      caption: "1 of 12 sections",
      logo: require("../../assets/logo-react.png"),
    },
    {
      title: "Styled Components",
      image: require("../../assets/background12.jpg"),
      subtitle: "React Native",
      caption: "2 of 12 sections",
      logo: require("../../assets/logo-react.png"),
    },
    {
      title: "Props and Icons",
      image: require("../../assets/background13.jpg"),
      subtitle: "React Native",
      caption: "3 of 12 sections",
      logo: require("../../assets/logo-react.png"),
    },
    {
      title: "Static Data and Loop",
      image: require("../../assets/background14.jpg"),
      subtitle: "React Native",
      caption: "4 of 12 sections",
      logo: require("../../assets/logo-react.png"),
    },
  ]);

  const [courses] = useState([
    {
      title: "Prototype in InVision Studio",
      subtitle: "10 sections",
      image: require("../../assets/background13.jpg"),
      logo: require("../../assets/logo-studio.png"),
      author: "Meng To",
      avatar: require("../../assets/avatar.jpg"),
      caption: "Design and interactive prototype",
    },
    {
      title: "React for Designers",
      subtitle: "12 sections",
      image: require("../../assets/background11.jpg"),
      logo: require("../../assets/logo-react.png"),
      author: "Meng To",
      avatar: require("../../assets/avatar.jpg"),
      caption: "Learn to design and code a React site",
    },
    {
      title: "Design and Code with Framer X",
      subtitle: "10 sections",
      image: require("../../assets/background14.jpg"),
      logo: require("../../assets/logo-framerx.png"),
      author: "Meng To",
      avatar: require("../../assets/avatar.jpg"),
      caption: "Create powerful design and code components for your app",
    },
    {
      title: "Design System in Figma",
      subtitle: "10 sections",
      image: require("../../assets/background6.jpg"),
      logo: require("../../assets/logo-figma.png"),
      author: "Meng To",
      avatar: require("../../assets/avatar.jpg"),
      caption:
        "Complete guide to designing a site using a collaborative design tool",
    },
  ]);

  useEffect(() => {
    toggleMenu();
  }, [menu]);

  const toggleMenu = () => {
    if (menu === "openMenu") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();

      Animated.spring(opacity, {
        toValue: 0.5,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (menu === "closeMenu") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();

      Animated.spring(opacity, {
        toValue: 1,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer
        style={{ transform: [{ scale: scale }], opacity: opacity }}
      >
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <TouchableOpacity
                onPress={() => dispatch({ type: "OPEN_MENU" })}
                style={{ position: "absolute", top: 0, left: 20 }}
              >
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome back,</Title>
              <Name>{userName}</Name>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30,
              }}
            >
              {logos.map(({ image, text }, index) => (
                <Logo key={index} image={image} title={text} />
              ))}
            </ScrollView>

            <Subtitle>Continue Learning</Subtitle>

            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map(({ title, image, caption, logo, subtitle }, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.push("Section")}
                >
                  <Card
                    title={title}
                    image={image}
                    caption={caption}
                    logo={logo}
                    subtitle={subtitle}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Subtitle>Popular Courses</Subtitle>

            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                logo={course.logo}
                subtitle={course.subtitle}
                title={course.title}
                avatar={course.avatar}
                caption={course.caption}
                author={course.author}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

export default HomeScreen;

const RootView = styled.View`
  flex: 1;
  background-color: black;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
