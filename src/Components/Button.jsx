import React, {useState} from 'react'




function Button(){ 
    let [count, setCount]= useState(0)
    
    function increase(){
        setCount(count+1)
    }
    let decrease=()=>{
        setCount(count-1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>

    </div>
  )
}

export default Button
