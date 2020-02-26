import React from "react";
import styled from "styled-components";
import { maxPuzzlePoints } from "../constants";

const Container = styled.div`
  width: 400px;
  display: inline-block;
`;

const Bar = styled.div`
  width: ${props => props.width}%;
  height: 20px;
  background-color: red;
`;

const Points = styled.div`
  font-size: 16px;
  width: 40px;
  display: inline-block;
  text-align: right;
  padding-right: 10px;
`;

export default function ScoreBar({ currentPoints }) {
  return (
    <div>
      <Points>{currentPoints}</Points>
      <Container>
        <Bar width={Math.min((currentPoints / maxPuzzlePoints) * 100)} />
      </Container>
    </div>
  );
}
