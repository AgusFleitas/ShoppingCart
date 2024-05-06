/* eslint-disable react/prop-types */
import { AddToCartIcon } from "./Icons";
import './Products.css'

const Products = ({ products }) => {
  return (
    <main className="products">
      <ul>
        {products.map((producto) => (
          <li key={producto.id}>
            <img src={producto.image} alt={producto.title} />
            <div>
              <strong>{producto.title}</strong> - {producto.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
