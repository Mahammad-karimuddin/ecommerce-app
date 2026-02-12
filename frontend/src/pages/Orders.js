import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://ecommerce-backend-w1db.onrender.com/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setOrders(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h2 className="text-3xl font-bold mb-6">
        Order History
      </h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-6 rounded shadow mb-4"
          >
            <p className="font-semibold mb-2">
              Order ID: {order._id}
            </p>

            {order.items.map((item, i) => (
              <p key={i}>
                {item.name} × {item.qty}
              </p>
            ))}

            <p className="font-bold mt-2">
              Total: ${order.total}
            </p>
          </div>
        ))
      )}

    </div>
  );
}

export default Orders;
