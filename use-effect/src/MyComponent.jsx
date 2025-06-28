import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MyComponent() {
    const [count, setCount] = useState(0);

    const [color, setColor] = useState("sky blue");

    function handleAddCount(){
        setCount(c => c+1);
    }

    function handleSubtractCount(){
        setCount(c => c-1);
    }

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`;

        return () => {
            //Some Cleanup Code
        }
    },[count, color]);

    function handleColorChange(){
        setColor(c => c==="green" ? "red":"green");
    }

  return (
    <div>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={handleAddCount}>Add</button>
        <button onClick={handleSubtractCount}>Subtract</button><br />
        <button onClick={handleColorChange}>Change color</button>
    </div>
  )
}

export default MyComponent