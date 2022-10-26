import React,{useState} from 'react'
import "./Counter.css"

function FunctionCounter() {
    const [count,handleUpdate]=useState(0)
    
  return (
    <div className='thisFunction'>
        <h1>CounterFunction:{count}</h1>
        <hr/>
        <br/>
        <button className="butN" onClick={()=>handleUpdate(count+5)}>Increase</button>&nbsp;&nbsp;
        <button className="butN1" onClick={()=>handleUpdate(count-5)}>Decrease</button> 
    </div>
  )
}

export default FunctionCounter