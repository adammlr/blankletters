import React, { useState, useEffect } from "react";
import PickedLetterDisplay from "./PickedLetterDisplay";
import SelectLetter from "./SelectLetter";
import Word from "./Word";
import { initalLetters, defaultLetters } from "../constants";

export default function Puzzle({ word, nextWord }) {
  const upperWord = word.toUpperCase();
  const [pickedLetters, setPickedLetters] = useState(initalLetters);
  const [solved, setSolved] = useState(false);

  useEffect(checkSolved, [pickedLetters]);
  useEffect(newWord, [word]);

  function newWord() {
    setSolved(false);
    setPickedLetters(initalLetters);
  }

  function handleNewLetter(newLetter) {
    if (!pickedLetters.includes(newLetter)) {
      setPickedLetters([...pickedLetters, newLetter]);
    }
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
        {upperWord.split(" ").map(eachWord => {
          return <Word pickedLetters={pickedLetters} word={eachWord} />;
        })}
      </div>

      <PickedLetterDisplay pickedLetters={pickedLetters} />
      {!solved && <SelectLetter submitLetter={handleNewLetter} />}
      {
        <div>
          <button onClick={nextWord}>New Word!</button>
        </div>
      }
    </div>
  );
}
