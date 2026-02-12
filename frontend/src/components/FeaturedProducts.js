import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5001/api/products")
      .then((res) => setProducts(res.data.slice(0, 4)))
      .catch(console.error);
  }, []);

  return (
    <div className="p-8 bg-gray-100">

      <h2 className="text-2xl font-bold mb-6">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {products.map((p) => (
          <Link to="/products" key={p._id}>
            <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4">

              {/* ✅ REAL IMAGE FROM DATABASE */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded mb-3"
              />

              <h3 className="text-lg font-semibold">
                {p.name}
              </h3>

              <p className="text-blue-600 font-bold">
                ${p.price}
              </p>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default FeaturedProducts;
