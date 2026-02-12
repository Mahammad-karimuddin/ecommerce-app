import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = () => {
    axios
      .get("http://127.0.0.1:5001/api/products")
      .then((res) => setProducts(res.data));
  };

  useEffect(fetchProducts, []);

  const addProduct = async () => {
    await axios.post(
      "http://127.0.0.1:5001/api/products",
      { name, price: Number(price) }
    );
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(
      `http://127.0.0.1:5001/api/products/${id}`
    );
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h2 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h2>

      <div className="bg-white p-6 rounded shadow mb-6">

        <input
          placeholder="Product Name"
          className="border p-2 mr-2"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          placeholder="Price"
          className="border p-2 mr-2"
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <button
          onClick={addProduct}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>

      </div>

      {products.map((p) => (
        <div
          key={p._id}
          className="bg-white p-4 rounded shadow mb-2 flex justify-between"
        >

          {p.name} — ${p.price}

          <button
            onClick={() =>
              deleteProduct(p._id)
            }
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default Admin;
