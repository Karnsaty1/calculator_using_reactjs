import React from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {

  const [value1, setValue1]=useState(false);

  
  const response=(value)=>{
    if(value==='='){
      calculate();
    setValue1(prevValue1=>!prevValue1);
  }
  else{
    if(value1){
      document.getElementById("input").value="";
    setValue1(prevValue1=>!prevValue1);
    }
  document.getElementById("input").value+=value;
  
}
}

const calculate=()=>{
  try {
    let result=document.getElementById("input").value;
    result=eval(result);
    document.getElementById("input").value=result;
    
  } catch (error) {
    document.getElementById("input").value="";
  }
}

const clearData=()=>{
  document.getElementById("input").value="";
}

const root=()=>{
  let response=document.getElementById("input").value;
  response=Math.sqrt(response);
  document.getElementById("input").value=response;
}

  return (
    <div className="container">
      <h1 className="h1">My Caluclator</h1>

      <input type="text" id="input"/>
      <div className="buttons">
        <button onClick={()=>response(1)}>1</button>
        <button onClick={()=>response(2)}>2</button>
        <button onClick={()=>response(3)}>3</button>
      </div>
      <div className="buttons">
        <button onClick={()=>response(4)}>4</button>
        <button onClick={()=>response(5)}>5</button>
        <button onClick={()=>response(6)}>6</button>
      </div>
      <div className="buttons">
        <button onClick={()=>response(7)}>7</button>
        <button onClick={()=>response(8)}>8</button>
        <button onClick={()=>response(9)}>9</button>
      </div>
      <div className="buttons">
        <button onClick={()=>response(0)}>0</button>
        <button onClick={()=>response('+')}>+</button>
        <button onClick={()=>response('-')}>-</button>
      </div>
      <div className="buttons">
        <button onClick={()=>response('/')}>/</button>
        <button onClick={()=>response('%')}>%</button>
        <button onClick={()=>response('*')}>*</button>
      </div>
      <div className="buttons">
        <button onClick={()=>response('=')}>=</button>
        <button onClick={()=>response('.')}>.</button>
        <button onClick={()=>root('√')}>√</button>
      </div>
    
      <div className="buttons">
        <button onClick={()=>clearData('AC')}>AC</button>
       
      </div>
    

      
    </div>


  )
  
}