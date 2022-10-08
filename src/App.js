import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import { calculateWinner } from "./helpers";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss";

const App = () =>{

  const [history, setHistory] = useState([ 
    {board: Array(9).fill(null), isXNext: true} 
  ]);
  const [ currentMove, setCurrentMove ] = useState(0); // by default set to 0

  const current = history[currentMove];

  //console.log("history", history);
  //const [isXNext, setIsXNext] = useState(false);
 
  const winner = calculateWinner(current.board);
  //console.log(winner);
  

 const handleSquareClick = (position) =>{

    if(current.board[position] || winner){ // cannot rewrite on board
      return;
    }
    setHistory( (prev) =>{
      const last = prev[ prev.length - 1 ];
      const newBoard = last.board.map((square, pos) =>{
        if(pos === position){
          return last.isXNext ? 'X': 'O';
        }
        return square;
      });
      return prev.concat({board: newBoard, isXNext: !last.isXNext})
    });
    // setIsXNext((prev)=> !prev);
    setCurrentMove(prev => prev + 1);
 };

 const moveTo = move =>{
  setCurrentMove(move);
 }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
}

export default App;
