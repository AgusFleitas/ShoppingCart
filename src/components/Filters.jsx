/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

const Filters = () => {
  // Usamos un estado para mostrar el valor del rango de precio.
  const [minPrice, setMinPrice] = useState(0);

  // Traemos 'setFilters' del Custom Hook directamente a este componente 'Filters' que es quien va a utilizarlo y eliminamos el Prop Drilling de App > Header > Filters.
  const {setFilters} = useFilters();

  // Usamos el Hook de React 'useID' para generar identificadores únicos y evitarnos posibles fallos o repeticiones en algún otro componente de la aplicación.
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  // Funcion manejadora para el precio mínimo que irá en el onChange del input.
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  // Funciona manejadora para la categoría.
  // En AMBAS funciones manejadoras, estamos consultando y modificando el estado que tenemos en App, el 'setFilters'.
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value="men's clothing">Men clothing</option>
          <option value='jewelery'>Jewelery</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
