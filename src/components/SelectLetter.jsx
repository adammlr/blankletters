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

export default function SelectLetter({ submitLetter }) {
  const [newLetter, setNewLetter] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    submitLetter(newLetter.toUpperCase());
    setNewLetter("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nextLetter">Next Letter:</label>
      <Input
        type="text"
        onChange={e => {
          setNewLetter(e.target.value);
        }}
        value={newLetter}
        maxLength={1}
        autoFocus
        name="nextLetter"
      />
    </form>
  );
}
