import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  // Extraemos los filtros y la función para setear los filtros que nos retorna nuestro contexto.
  const { filters, setFilters } = useContext(FiltersContext);

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

  return { filters, filterProducts, setFilters };
}
