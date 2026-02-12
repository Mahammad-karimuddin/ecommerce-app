import { useCart } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://ecommerce-backend-w1db.onrender.com";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API}/api/orders`,
        {
          items: cart,
          totalPrice: total,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      clearCart();
      alert("Order placed successfully!");
      navigate("/orders");

    } catch (error) {
      console.error(error);
      alert("Checkout failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 mb-4 rounded shadow"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-4">
            Total: ${total}
          </h3>

          <button
            onClick={handleCheckout}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
