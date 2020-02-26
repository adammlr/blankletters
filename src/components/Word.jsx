import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import { defaultLetters } from "../constants";

const WordWrapper = styled.div`
  display: inline-block;
  padding-right: 20px;
`;

export default function Word({ word, pickedLetters }) {
  return (
    <WordWrapper>
      {[...word].map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={getLetterToDisplay(letter, [
              ...pickedLetters,
              ...defaultLetters
            ])}
          />
        );
      })}
    </WordWrapper>
  );
}

function getLetterToDisplay(letter, pickedLetters) {
  if (pickedLetters.includes(letter)) {
    return letter;
  }
  return "_";
}
