
import React from 'react'

function Food() {

    const food1 = "orange";
    const food2 = "Banana";
    const food3 = "Apple";
    const food4 = "Mango";

  return (
    <ul>
        <li>Guava</li>
        <li>Lichi</li>
        <li>Grapes</li>
        <li>{food1.toUpperCase()}</li>
        <li>{food2.toUpperCase()}</li>
        <li>{food3.toUpperCase()}</li>
        <li>{food4.toUpperCase()}</li>
    </ul>
  )
}

export default Food