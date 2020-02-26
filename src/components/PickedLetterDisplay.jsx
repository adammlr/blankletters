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

export default function PickedLetterDisplay({ pickedLetters }) {
  return (
    <div>
      {pickedLetters.map(letter => {
        return <PickedLetter key={letter}>{letter}</PickedLetter>;
      })}
    </div>
  );
}
