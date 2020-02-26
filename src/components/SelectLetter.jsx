import React, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  display: inline-block;
  border: solid 2px #333;
  background-color: #ddd;
  font-size: 18px;
  width: 18px;
  text-align: center;
  margin: 2px;
  text-transform: uppercase;
`;

const Container = styled.div`
  display: inline-block;
`;

export default function SelectLetter({ submitLetter }) {
  const [newLetter, setNewLetter] = useState("");

  function handleChange(event) {
    const letter = event.target.value.toUpperCase();
    submitLetter(letter);
    setNewLetter("");
  }

  return (
    <Container>
      <Input
        type="text"
        onChange={handleChange}
        value={newLetter}
        maxLength={1}
        autoFocus
        name="nextLetter"
      />
    </Container>
  );
}
