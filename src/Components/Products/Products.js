import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://aide-server-gray.vercel.app/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div id="shop" className="my-5 ">
      <div>
        <h1 className="text-3xl font-serif text-center">Grocery Products</h1>
        <p className="text-center mt-1">
          A typical grocery store sells fresh produce, meats, dairy products
          and, often, <br /> bakery goods alongside canned, frozen and prepared
          foods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <Product key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
