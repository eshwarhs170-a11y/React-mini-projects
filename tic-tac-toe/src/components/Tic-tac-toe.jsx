import React, { useState } from 'react'
import usetictactoe from '../hooks/use-tic-tac-toe'

const Tictactoe = () => {

  const {board,handleclick,getstatusmessage,resetgame}=usetictactoe();

 

  return (
    <div className='game'>
      <div className="status">
        {getstatusmessage()}
        <button className='reset-button' onClick={resetgame}>Reset game</button>
      </div>
      <div className="board">
      {board.map((b,index)=>{
        return <button className='cell' key={index} onClick={()=>handleclick(index)}
        disabled={b!==null}
        >{b}</button>
      })}

      </div>
    </div>
  )
}

export default Tictactoe
