// onChange -: event handler used primarily with form elements. Ex:- <input>, <textarea>, <select>, <radio>. Triggers a function every time the value of the input Changes.

import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState(0);

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
      setComment(event.target.value);
    }

    function handlePaymentChange(event){
      setPayment(event.target.value);
    }

    function handleShippingChange(event){
      setShipping(event.target.value);
    }


  return (
    <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number' />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter the Comments' />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an Option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">Master Card</option>
          <option value="Rupay">Rupay</option>
          <option value="GiftCard">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
          <input type='radio' value='Pick Up' checked={shipping==="Pick Up"} onChange={handleShippingChange}></input>
          Pick Up
        </label>
        <label>
          <input type='radio' value='Delivery' checked={shipping==="Delivery"} onChange={handleShippingChange}></input>
          Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
  )
}

export default MyComponent