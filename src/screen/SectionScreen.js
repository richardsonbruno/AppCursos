import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";

const SectionScreen = ({
  route: {
    params: { section },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "UPDATE_SECTION" });
    return () => {
      dispatch({ type: "UPDATE_HOME" });
    };
  }, []);

  return (
    <Container>
      <Text>{section.title}</Text>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
