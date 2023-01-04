import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  const product = useAxiosGet(`https://dummyjson.com/products/${id}`, "detail");

  if (product.loading) {
    return <Loader />;
  }

  return (
    <div>
      {product.data ? (
        <div>
          <h1 className="font-bold text-2xl mb-3">{product.data.title}</h1>
          <img
            src={product.data.images[0]}
            alt={product.data.title}
            className="rounded"
          />
          <h2 className="font-bold text-xl mt-1">${product.data.price}</h2>
          <p>{product.data.description}</p>
        </div>
      ) : (
        <p>There was an error please refresh or try again later.</p>
      )}
    </div>
  );
}

export default Product;
