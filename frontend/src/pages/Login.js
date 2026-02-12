import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API = "https://ecommerce-backend-w1db.onrender.com";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/users/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

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
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {message && (
          <p className="text-red-500 mt-3 text-center">{message}</p>
        )}

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
