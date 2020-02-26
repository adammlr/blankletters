import styled from "styled-components";
import React from "react";

const LetterContainer = styled.div`
  display: inline-block;
  border: solid 1px ${props => (props.space ? "white" : "black")};
  background-color: white;
  font-size: 24px;
  width: 20px;
  height: 30px;
  text-align: center;
  margin: 2px;
  vertical-align: middle;
  font-family: "Source Code Pro";
`;

export default function Letter({ letter }) {
  return (
    <LetterContainer space={letter === " "}>
      {letter === "_" ? null : letter}
    </LetterContainer>
  );
}
