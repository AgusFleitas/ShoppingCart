import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import useCart from "../hooks/useCart";
import "./Products.css";

const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className='products'>
      <ul>
        {products.map((producto) => {
          const isProductInCar = checkProductInCart(producto);

          return (
            <li key={producto.id}>
              <img src={producto.image} alt={producto.title} />
              <div>
                <strong>{producto.title}</strong> - ${producto.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCar && 'crimson'}}
                  onClick={
                    isProductInCar
                      ? () => removeFromCart(producto)
                      : () => addToCart(producto)
                  }
                >
                  {isProductInCar ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
