import { useState } from "react";
import Square from "./Square";
import mouseclick from "../assets/mouseclick.mp3";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);
  const playClickSound = () => {
    const audio = new Audio(mouseclick);
    audio.play();
  };
  const checkWinner=()=>{
   const winnerCheck=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   ];
   for(let winner of winnerCheck){
    const [a,b,c]=winner;
    if(state[a] !=null && state[a]===state[b] && state[a]===state[c]){
      return state[a];
    }
   }
   return false;
  };
  const isWinner=checkWinner();
  const handleClick = (index) => {
    playClickSound();
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setisXTurn(!isXTurn);
  };
  const handleReset = () => {
    setState(Array(9).fill(null));
    setisXTurn(true);
  };

  return (
    <>
      <div className="main">
        <h1>Tic tac toe</h1>
        <div className="board-container">
          {isWinner?(
          <>{isWinner} won the game 🥳 🥳</>
          ):(
          <>
          <div className="row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
          </>
         )}
        </div>
        <button onClick={handleReset} className="btn">Reset</button>
      </div>
    </>
  );
}
