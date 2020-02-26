import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Puzzle from "./components/Puzzle";
import { things } from "./words";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato'
  }
`;

export default function App() {
  const [word, setWord] = useState("");
  useEffect(() => {
    onNextWord();
  }, []);

  function onNextWord() {
    setWord(things[Math.floor(Math.random() * things.length)]);
  }

  return (
    <div>
      <GlobalStyle />
      <Puzzle word={word} nextWord={onNextWord} />
    </div>
  );
}
