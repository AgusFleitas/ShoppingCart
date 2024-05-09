import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import useCart from "../hooks/useCart";

import "./Cart.css";

const Cart = () => {
  const cartCheckboxId = useId();

  // Traemos el carrito y los métodos del Custom Hook.
  const { cart, clearCart, addToCart } = useCart();

  // Creamos el 'CartItem' para renderizarlo por cada producto que tengamos en el carrito.
  function CartItem({ title, image, price, quantity, addToCart }) {
    return (
      <li>
        <img src={image} alt={title} />
        <div>
          <strong>{title}</strong> - ${price}
        </div>
        <footer>
          <small>Qty: {quantity}</small>
        </footer>
        <button onClick={addToCart}>+</button>
      </li>
    );
  }

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
