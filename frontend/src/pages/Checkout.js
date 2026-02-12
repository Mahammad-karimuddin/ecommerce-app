import axios from "axios";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://127.0.0.1:5001/api/orders",
      { items: cart, total },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    clearCart();
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded shadow p-8 max-w-lg mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Checkout
        </h2>

        {cart.map((item) => (
          <div key={item._id} className="mb-2">
            {item.name} × {item.qty}
          </div>
        ))}

        <h3 className="text-xl font-bold mt-4 mb-4">
          Total: ${total}
        </h3>

        <button
          onClick={placeOrder}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Confirm Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;
