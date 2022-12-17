import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { AppActions } from "../redux";

const styles = {
  center: "flex justify-center",
};

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <div>
      <div>
        <h1 className={styles.center}>Shopping Cart</h1>
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <h1 className={styles.center}>{item.title}</h1>
          <img src={item.selectedImage} width={350} alt="main_image" />
          <div className={styles.center}>
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
      <div>
        <p className={styles.center}>Total price</p>
        <p className={`${styles.center} text-2xl`} name="cart">
          ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export default Cart;
