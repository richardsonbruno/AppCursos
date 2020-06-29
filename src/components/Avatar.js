import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import { useDispatch } from "react-redux";

const Avatar = () => {
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(
    "https://cl.ly/55da82beb939/download/avatar-default.jpg"
  );

  useEffect(() => {
    (async () => {
      await fetch("https://uifaces.co/api?limit=1&name&emotion[]=happiness", {
        method: "GET",
        headers: {
          "X-API-KEY": "91763f64712e6153d890f0d430b29e",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setPhoto(response[0].photo);
          dispatch({ type: "UPDATE_NAME", name: response[0].name });
        });
    })();

    return () => {
      setPhoto("https://cl.ly/55da82beb939/download/avatar-default.jpg");
      dispatch({ type: "UPDATE_NAME", name: "" });
    };
  }, []);

  return <Image source={{ uri: photo }} />;
};

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
