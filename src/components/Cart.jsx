import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { AppActions } from "../redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div name="cart">
      {cart.map((item) => (
        <div key={item.id}>
          {console.log(item)}
          <h1 className="flex justify-center">{item.title}</h1>
          <img src={item.selectedImage} width={350} alt="main_image" />
          <div className="flex justify-center">
            <button onClick={() => dispatch(AppActions.removeItem(item))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
