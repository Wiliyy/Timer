import React from 'react'
export default function TimerInput(props) {



  function secondslist ()  { 
    const secondrows = [];
    for (let index = 0; index <=59; index++) {
      secondrows.push(<option key={index} className={index===0 ? "default_option" : ""}> {index} </option>)
    }  
    return(secondrows)
  }
  
  function minutelist ()  { 
    const minuterows = [];
    for (let index = 0; index <=59; index++) {
      minuterows.push(<option key={index} className={index===0 ? "default_option" : ""}> {index} </option>)
    }  
    return(minuterows)
  }
  
  function hourslist ()  { 
    const hoursrows = [];
    for (let index = 0; index <= 23; index++) {
      hoursrows.push(<option key={index}  className={index===0 ? "default_option" : ""}> {index} </option>)
    }  
    return(hoursrows)
  }

  
  return (
    <div className="Time-input">
        <div className="wrap-select">
            <label htmlFor="hourslist">Hours</label>
            <select  disabled={props.time > 0 && true} name="hourslist"  onChange={props.handleselect}>
                {hourslist()}
            </select>
        </div>
        <div className="wrap-select">
            <label htmlFor="minutelist">Minute</label>
            <select disabled={props.time > 0 && true} name="minutelist" onChange={props.handleselect}>
                {minutelist()}
            </select>
        </div>
        <div className="wrap-select">
            <label htmlFor="secondlist">Second</label>
            <select disabled={props.time > 0 && true} name="secondlist"  onChange={props.handleselect}>
                {secondslist()}
            </select>
        </div>
    </div> 
  )
}
