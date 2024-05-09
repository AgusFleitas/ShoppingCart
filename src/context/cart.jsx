import { createContext, useState } from "react";

// 1. Crear contexto.
export const CartContext = createContext();

// 2. Crear Provider (este archivo) y proveer el contexto (en donde sea necesario).
export function CartProvider({ children }) {
  // Estado para listar el carrito.
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Buscamos si el producto ya se encuentra en el carrito.
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    // Si ya se encuentra en el carrito, creamos una copia profunda del carrito con structuredCLone, luego accedemos a la propiedad 'quantity' de ese producto y la incrementamos en 1. Finalmente, mutamos el estado poniendo nuestra copia modificada.
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //(else implícito) Si no está en el carrito recibimos el estado previo, hacemos una copia de él, luego accedemos al producto haciendo una copia del producto para mantener todas las demás propiedades y dentro de la propiedad quantity ingresamos '1' ya que será la primera unidad de este producto.
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id != product.id))
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
