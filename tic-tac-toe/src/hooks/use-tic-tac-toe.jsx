import { useState } from "react";


const initialBoard=()=>Array(9).fill(null);

const usetictactoe =()=>{
    const [board, setBoard] = useState(initialBoard) 
    const [isXNext, setisXNext] = useState(true);

    const WINNING_PATTRENS= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const calculatewinner=(currentboard)=>{
        for(let i=0;i<WINNING_PATTRENS.length;i++){
            const [a,b,c]=WINNING_PATTRENS[i];
            if(currentboard[a] && 
             currentboard[a] === currentboard[b] &&
             currentboard[a] === currentboard[c]
            ){
                return currentboard[a]
            }
        }
        return null;
    };

    const handleclick=(index)=>{
        const winner =calculatewinner(board)
        if(winner || board[index]) return

        const newBoard =[...board];
        newBoard[index]=isXNext? "X" : "o";
        setBoard(newBoard)
        setisXNext(!isXNext);
    }

    const getstatusmessage=()=>{
        const winner=calculatewinner(board);
        if(winner)return `player ${winner} wins!`;
        if(!board.includes(null))return `It is a draw!`;
        return `Player ${isXNext ? "X" : "O"} turn`;
    }

    const resetgame=()=>{
        setBoard(initialBoard());
        setisXNext(true)
    }

    return {board,handleclick,getstatusmessage,resetgame}
}
export default usetictactoe