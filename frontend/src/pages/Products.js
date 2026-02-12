import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://ecommerce-backend-w1db.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-3">{p.name}</h3>

            <p className="text-gray-600">${p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;
