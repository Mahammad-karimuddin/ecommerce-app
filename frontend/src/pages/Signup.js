import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API = "https://ecommerce-backend-w1db.onrender.com";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(`${API}/api/users/register`, {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch {
      setMessage("Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Signup
        </button>

        {message && (
          <p className="text-red-500 mt-3 text-center">{message}</p>
        )}

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
