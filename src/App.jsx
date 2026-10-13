
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="app">

      <h1>ShopEasy</h1>

      <h2>Our Products</h2>

      <div className="container">

        {products.map((product) => (

          <div className="card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <button>Add to Cart</button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;
