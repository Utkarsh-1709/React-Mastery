import React from 'react'
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }

    const decrementCount = () => {
        setCount(count-1);
    }

    const resetCount = () => {
        setCount(0);
    }
  return (
    <div className="counter-container">
        <h1 className="title">Toggle Counter</h1>
        <p className="counter-value">{count}</p>
        <button onClick={incrementCount} className="button-counter">Increment Counter</button>
        <button onClick={resetCount} className="button-counter">Reset Counter</button>
        <button onClick={decrementCount} className="button-counter">Decrement Counter</button>
    </div>
  )
}

export default Counter