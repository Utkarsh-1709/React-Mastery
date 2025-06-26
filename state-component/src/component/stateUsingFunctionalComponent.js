import React, { useState } from 'react'


function StateUsingFunctionalComponent() {
    const[count, setCount] = useState(0);

    const increment = ()=>{
    setCount(prevCount => prevCount+1)
};
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default StateUsingFunctionalComponent