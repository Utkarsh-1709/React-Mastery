import React from 'react'

function List() {
const fruits = [{id: 1, name : "apple", calories: 95}, 
    {id: 2, name : "orange", calories: 45}, 
    {id: 3, name : "banana", calories: 105},
    {id: 4, name : "lichi", calories: 159},
    {id: 5, name : "mango", calories: 37}];

    // fruits.sort();

    fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical Order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical Order
    //fruits.sort((a,b) => a.calories - b.calories); //Numeric
    //fruits.sort((a,b) => b.calories - a.calories); //Reverse Numeric

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)

    const lowCalList = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>)

  return (
    <>
    <div className="category-fruits">
        <h1>List of Fruits</h1>
    </div>
        <ol className="list-items">{listItems}</ol>
    
    <div className="category-fruits">
        <h1>List of Low Calories Fruits</h1>
    </div>
        <ol className="list-items">{lowCalList}</ol>
       
    </>
    
  )
}

export default List