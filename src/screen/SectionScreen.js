import React, { useEffect } from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const SectionScreen = ({
  route: {
    params: { section },
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch({ type: "UPDATE_SECTION" });
    return () => {
      dispatch({ type: "UPDATE_HOME" });
    };
  }, []);

  console.log(section);

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={{ uri: section.image.url }} />
        <Wrapper>
          <Logo source={{ uri: section.logo.url }} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        style={{ position: "absolute", top: 20, right: 20 }}
        onPress={() => navigation.goBack()}
      >
        <CloseView>
          <Ionicons name="ios-close" size={36} color="#4775f2" />
        </CloseView>
      </TouchableOpacity>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  font-size: 13px;
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const CloseView = styled.View`
  background: white;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
`;

const Logo = styled.Image`
  height: 24px;
  width: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
