import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const userEmail = localStorage.getItem("userEmail");
  const firstLetter = userEmail ? userEmail[0].toUpperCase() : "";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">

      {/* Logo */}
      <Link to="/dashboard" className="text-xl font-bold">
        MyStore
      </Link>

      <div className="flex items-center gap-6 relative">

        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>

        {!userEmail && (
          <Link
            to="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded"
          >
            Login
          </Link>
        )}

        {userEmail && (
          <div className="relative">

            {/* Profile circle */}
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold cursor-pointer"
            >
              {firstLetter}
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded p-4 w-56">

                <p className="font-semibold mb-2">
                  {userEmail}
                </p>

                <Link
                  to="/dashboard"
                  className="block mb-2 hover:text-blue-600"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>

              </div>
            )}

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
