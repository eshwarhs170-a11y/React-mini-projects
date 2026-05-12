import React, { useState } from 'react'

const App = () => {
const generate =()=>{
  const r= ("0" +Math.floor(Math.random() *256).toString(16)).slice(-2);
  const g= ("0" +Math.floor(Math.random() *256).toString(16)).slice(-2);
  const b= ("0" +Math.floor(Math.random() *256).toString(16)).slice(-2);

  console.log(r)
  return `#${r}${g}${b}`

}
const [color,setColor]=useState(generate)

  return (
    <div  className='app' style={{backgroundColor:color}}>
      <button onClick={()=>{
        setColor(generate)
      }}>Generate</button>
      <h2>{color}</h2>
    </div>
  )
}

export default App
