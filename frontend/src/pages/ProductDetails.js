import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const API = "https://ecommerce-backend-w1db.onrender.com";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return (
      <div className="p-8">Loading product...</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-xl shadow p-6 max-w-xl mx-auto">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-blue-600 font-bold mt-3">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductDetails;
