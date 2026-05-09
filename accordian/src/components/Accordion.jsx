import React, { useState } from 'react'
import { data } from './data';
const Accordion = () => {

    const [selected, setselected]=useState(null);
    const [enableMultipleSelection,setenableMultipleSelection]=useState(false);
    const [multiple,setmultiple]=useState([])

    function handleSingleSlection(getcurrentId){
        console.log(getcurrentId)
        setselected(getcurrentId === selected?null:getcurrentId)
    }
    function handleMultiselection(getcurrentId){
        let cpymultiple=[...multiple];
        const findIndexOfCurrentId=cpymultiple.indexOf(getcurrentId);
        if (findIndexOfCurrentId=== -1) cpymultiple.push(getcurrentId);
        else cpymultiple.splice(findIndexOfCurrentId,1)

        setmultiple(cpymultiple)
    }
    // console.log(selected)
  return (
    <div className='wrapper'>
        <button onClick={()=>{
            setenableMultipleSelection(!enableMultipleSelection)
        }}>Enable multi Selection</button>
      <div className="accordian">
    {data && data.length > 0 ?(
        data.map((dataItem) =>( <div className='item'>
            <div onClick={enableMultipleSelection? ()=>handleMultiselection(dataItem.id) :
            ()=>{handleSingleSlection(dataItem.id)}} 
            className='title'>
            <h3>{dataItem.question}</h3>
            <span>+</span>
            </div>
             <div className='content'>
                {selected===dataItem.id||multiple.indexOf(dataItem.id)!== -1 ?(
                    <div>{dataItem.answer}</div>
                ):null
                }
                </div>
        </div>
        ))
        ):(
        <div>No data found !</div>
    )}
      </div>
    </div>
  )
}

export default Accordion
