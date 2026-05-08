import React, { useState } from 'react'

const App = () => {

  const [height,setheight]=useState("");
  const [weight,setweight]=useState("");
  const [result,setresult]=useState("");

  const calculateBMI=()=>{
    if(!height || !weight){
      setresult("please enter both height and weight")
    return;
    }
    const heightInMeters=height/100;
    const bmi=(weight/(heightInMeters*heightInMeters)).toFixed(1)

    let category="";
    if(bmi<18.5)category="Underweight";
    else if(bmi<25)category="Normal weight";
    else if(bmi<30)category=" Overweight";
    else category="Obese"


    setresult(`Your BMI is ${bmi} : You are ${category} `)
  }

  return (
    <div>
      
      <div className="container">
      <h1>BMI Calculator</h1>

      <label htmlFor="height">Height (cm)</label>
      <input type="number" id='height' placeholder='Enter your height' value={height} onChange={(e)=>{
        setheight(e.target.value)
      }}/>

      <label htmlFor="weight">Weight (kg)</label>
      <input type="number" id='height' placeholder='Enter your weight' value={weight} onChange={(e)=>{
        setweight(e.target.value)
      }}/>
      
      <button onClick={calculateBMI}>Calculate</button>

      <div className="result">
      {result}
      </div>
      </div>
    </div>
  )
}

export default App
