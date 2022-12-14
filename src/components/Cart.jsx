import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { AppActions } from "../redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <div name="cart">
      <div>
        <h1 className="flex justify-center">Total price</h1>
        <h1 className="flex justify-center">${totalPrice}</h1>
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <h1 className="flex justify-center">{item.title}</h1>
          <img src={item.selectedImage} width={350} alt="main_image" />
          <div className="flex justify-center">
            <button
              onClick={() => {
                dispatch(AppActions.removeItem(item));
                dispatch(
                  AppActions.removeSelectedLandmarkid({
                    idForSelectedHotels: item.idForSelectedHotels,
                  })
                );
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
