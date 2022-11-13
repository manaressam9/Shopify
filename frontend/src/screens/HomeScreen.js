import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../data';
export default function HomeScreen() {
  // define a state "products" to save products from backend
  // useState hook > returns a variable and function to update this variable
  const [products, setProducts] = useState([]);
  // function inside useEffect is run one time after rendering the component
  // call axios.get to send ajax req to /api/products address and then save result in "result" var
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.price} LE</strong>
              </p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
