import React, { use, useState } from "react";
function MyChangeComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Delivery instrunctions..."
      ></textarea>
      <p>Comment: {comment}</p>
      <select type="paymment" onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Paymment: {payment}</p>
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange}
          name=""
          id=""
        />
        Pick up
      </label>
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
          name=""
          id=""
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </>
  );
}
export default MyChangeComponent;
