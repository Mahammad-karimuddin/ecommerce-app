import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container">
      <div className="card">
        <h2>✅ Order Placed!</h2>
        <p>Your order was successful.</p>

        <Link to="/products">
          <button className="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
