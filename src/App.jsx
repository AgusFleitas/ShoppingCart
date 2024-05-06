import { useEffect, useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  const [productos, setProductos] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  // useEffect para cargar los productos tan pronto iniciar la app.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProductos(res);
      });
  }, []);

  // Función o método para filtrar (filterProducts).
  // La función devolverá un filter del array con todos los productos. Dicho filter tendrá que cumplir con 2 validaciones: la primera es que el precio debe ser mayor o igual al precio mínimo (por defecto es 0 para mostrarlos a todos) y que la categoría del filtro sea 'all' (los muestra a todos) o, en su defecto, que la categoría sea igual a la que está seleccionada en el filtro. Cuando todo eso de 'true', el producto pasará el filtro y será visible.

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  // Ejecutamos nuestro método y se lo pasamos al componente de Products.
  const filteredProducts = filterProducts(productos);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
