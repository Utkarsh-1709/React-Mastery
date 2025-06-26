import React from 'react'

function Vegetable(props) {

    const category = props.category;

    const vegetableList = props.items;

    const listVegetables = vegetableList.map(veg => <li key={veg.id}>{veg.name}: &nbsp; <b>{veg.calories}</b></li>)

  return (
    <>
        <div className="category-veggie">
            <h1 >{category}</h1>
        </div>
        <div className="list-veg">
            <ol>{listVegetables}</ol>
        </div>    
    </>
  )
}

export default Vegetable