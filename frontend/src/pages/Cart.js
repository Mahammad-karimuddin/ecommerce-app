import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h2 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (

        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-gray-600 mb-4">
            Your cart is empty
          </p>

          <Link to="/products">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Continue Shopping
            </button>
          </Link>
        </div>

      ) : (

        <div className="grid md:grid-cols-3 gap-6">

          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >

                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQty(item._id)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item._id)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    +
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded shadow h-fit">

            <h3 className="text-xl font-bold mb-4">
              Order Summary
            </h3>

            <p className="text-gray-600 mb-2">
              Total Items: {cart.length}
            </p>

            <p className="text-2xl font-bold mb-4">
              Total: ${total}
            </p>

            <Link to="/checkout">
              <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </Link>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;
