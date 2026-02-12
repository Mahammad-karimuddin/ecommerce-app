import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Banner */}
      <div className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to MyStore
        </h1>

        <Link
          to="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Start Shopping
        </Link>
      </div>

      {/* About shortcut */}
      <div className="text-center my-6">
        <Link
          to="/about"
          className="text-blue-600 font-semibold hover:underline"
        >
          Learn more About Us →
        </Link>
      </div>

      <Categories />
      <FeaturedProducts />
      <Footer />

    </div>
  );
}

export default Dashboard;
