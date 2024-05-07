/* eslint-disable react/prop-types */
import Filters from "./Filters";

const Header = ({changeFilters}) => {
  return (
    // Pasamos el 'setFilters' al componente de Filters.
    <header>
      <h1>React Shop 🛒</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
};

export default Header;
