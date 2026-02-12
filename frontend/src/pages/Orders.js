import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://ecommerce-backend-w1db.onrender.com";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${API}/api/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-4 mb-4 rounded shadow"
          >
            <p className="font-semibold">
              Order ID: {order._id}
            </p>

            <p>Total: ${order.totalPrice}</p>

            <p className="text-sm text-gray-600">
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
