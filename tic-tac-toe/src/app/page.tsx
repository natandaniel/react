"use client";
import { useState } from "react";

export default function Board() {
  const [lastMove, setLastMove] = useState("");
  const [squares, setSquares] = useState(Array(9).fill(""));

  const winner = calculateWinner(squares);
  let displayedMsg;

  if (winner) {
    displayedMsg = "Winner: " + winner;
  } else {
    displayedMsg = "Next player: " + (lastMove === "X" ? "O" : "X");
  }

  function handleClick(i: number) {
    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (lastMove === "X") {
      nextSquares[i] = "O";
    } else {
      nextSquares[i] = "X";
    }

    setLastMove(nextSquares[i]);
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="status">{displayedMsg}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return "";
}
