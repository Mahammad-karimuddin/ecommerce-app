import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-xl">

        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to MyStore 🛍️
        </h1>

        <p className="text-gray-600 mb-6">
          Flipkart-style ecommerce demo built with React & Node
        </p>

        <Link to="/products">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Start Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;
