import { createContext, useState } from "react";

// 1. Crear el contexto. (Se exporta para que los componentes puedan acceder a él).
export const FiltersContext = createContext();

// 2. Crear el Provider (en este archivo) para proveer el contexto (en el punto de entrada [main.jsx]).

// El Provider recibirá un children y devolverá ese children "envuelto" con la propiedad 'Provider' de FiltersContext que hemos creado arriba junto con sus valores que, en este caso, son los filtros y la función para setear los filtros.
export function FiltersProvider({ children }) {
  // Creamos un estado local en nuestro contexto para manipular los filtros. Su valor inicial serán los filtros por defecto.
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
