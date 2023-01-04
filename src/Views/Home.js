import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const products = useAxiosGet("https://dummyjson.com/products");

  if (products.loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {products.data ? (
        products.data.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p>There was an error please refresh or try again later.</p>
      )}
    </div>
  );
}

export default Home;
