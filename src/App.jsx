import { useEffect, useState } from "react";
import { useFilters } from "./hooks/useFilters";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  // Estado para guardar los productos iniciales.
  const [productos, setProductos] = useState([]);

  // useEffect para cargar los productos tan pronto iniciar la app.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProductos(res);
      });
  }, []);

  // Extraemos lo que nos retorna el Custom Hook (los productos filtrados).
  const { filterProducts } = useFilters();

  // Guardamos en una constante los productos filtrados ejecutando el método 'filterProducts' para pasarselo al componente de Products.
  const filteredProducts = filterProducts(productos);

  return (
    // Enviamos el 'setFilters' al componente de Header para luego enviarselo al componente de Filters (Prop Drilling).
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
