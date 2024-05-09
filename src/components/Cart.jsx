import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";

import "./Cart.css";

const Cart = () => {
  const cartCheckboxId = useId();

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
              alt='product'
            />
            <div>
              <strong>Fjallraven - Foldsack No. 1</strong> - $109.95
            </div>

            <footer>
              <small>Qty: 1</small>
            </footer>
            <button>+</button>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
