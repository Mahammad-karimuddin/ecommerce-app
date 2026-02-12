import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5001/api/products")
      .then((res) => {
        const found = res.data.find(
          (p) => p._id === id
        );
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded shadow p-8 grid md:grid-cols-2 gap-8">

        <img
  src="https://picsum.photos/500"
  alt={product.name}
  className="w-full rounded"
/>


        <div>
          <h2 className="text-3xl font-bold mb-4">
            {product.name}
          </h2>

          <p className="text-xl text-green-600 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
