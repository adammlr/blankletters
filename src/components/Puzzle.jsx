import React, { useState, useEffect } from "react";
import PickedLetterDisplay from "./PickedLetterDisplay";
import SelectLetter from "./SelectLetter";
import Word from "./Word";
import { initalLetters, defaultLetters, maxPuzzlePoints } from "../constants";
import ScoreBar from "./ScoreBar";

export default function Puzzle({ word, nextWord }) {
  const upperWord = word.toUpperCase();
  const [pickedLetters, setPickedLetters] = useState(initalLetters);
  const [solved, setSolved] = useState(false);
  const [points, setPoints] = useState(maxPuzzlePoints);

  useEffect(checkSolved, [pickedLetters]);
  useEffect(newWord, [word]);
  useEffect(() => {
    let timer;
    if (solved) {
      window.clearInterval(timer);
    } else {
      timer = window.setInterval(() => {
        if (points >= 50) {
          setPoints(points => points - 50);
        }
      }, 1000);
    }
    return () => {
      window.clearInterval(timer);
    };
  }, [solved, points]);

  function newWord() {
    setSolved(false);
    setPickedLetters(initalLetters);
    setPoints(maxPuzzlePoints);
  }

  function handleNewLetter(newLetter) {
    if (!pickedLetters.includes(newLetter)) {
      setPickedLetters([...pickedLetters, newLetter]);
      if (!upperWord.includes(newLetter) && points >= 50) {
        setPoints(points => points - 50);
      }
    }
  }

  function checkSolved() {
    const isSolved = [...upperWord].every(letter => {
      return [...pickedLetters, ...defaultLetters].includes(letter);
    });
    if (isSolved) {
      setSolved(true);
    }
  }

  return (
    <div>
      <ScoreBar currentPoints={points} />
      <div>
        {upperWord.split(" ").map((eachWord, index) => {
          return (
            <Word key={index} pickedLetters={pickedLetters} word={eachWord} />
          );
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
