import React from "react";
import styled from "styled-components";

const PickedLetter = styled.div`
  display: inline-block;
  border: solid 1px #ddd;
  background-color: white;
  font-size: 18px;
  width: 18px;
  text-align: center;
  margin: 2px;
  font-family: "Source Code Pro";
`;

const Container = styled.div`
  display: inline-block;
`;

export default function PickedLetterDisplay({ pickedLetters }) {
  return (
    <Container>
      {pickedLetters.map(letter => {
        return <PickedLetter key={letter}>{letter}</PickedLetter>;
      })}
    </Container>
  );
}
