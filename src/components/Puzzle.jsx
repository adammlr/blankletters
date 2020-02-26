import React, { useState, useEffect } from "react";
import Letter from "./Letter";
import PickedLetterDisplay from "./PickedLetterDisplay";
import SelectLetter from "./SelectLetter";

const initalLetters = ["R", "S", "T", "L", "N", "E"];
const defaultLetters = [" ", "-", "&"];

export default function Puzzle({ word, nextWord }) {
  const upperWord = word.toUpperCase();
  const [pickedLetters, setPickedLetters] = useState(initalLetters);
  const [solved, setSolved] = useState(false);

  useEffect(checkSolved, [pickedLetters]);
  useEffect(() => {
    setSolved(false);
    setPickedLetters(initalLetters);
  }, [word]);

  function handleNewLetter(newLetter) {
    setPickedLetters([...pickedLetters, newLetter]);
  }

  function checkSolved() {
    const isSolved = [...upperWord].every(letter => {
      return [...pickedLetters, ...defaultLetters].includes(letter);
    });
    isSolved && setSolved(true);
  }

  return (
    <div>
      <div>
        {[...upperWord].map((letter, index) => {
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
      </div>

      <PickedLetterDisplay pickedLetters={pickedLetters} />
      {!solved && <SelectLetter submitLetter={handleNewLetter} />}
      {<button onClick={nextWord}>New Word!</button>}
    </div>
  );
}

function getLetterToDisplay(letter, pickedLetters) {
  if (letter === " ") {
    return " ";
  }
  if (pickedLetters.includes(letter)) {
    return letter;
  }
  return "_";
}
