import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Logo from "../components/ui/Logo";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", formData);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("✅ Login Successful!");

      // Redirect to Dashboard
      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">

        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <h2 className="text-3xl font-bold text-center text-white">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Login to access your secure cloud storage.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit">
            Login
          </Button>

        </form>

        <p className="text-center text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </Card>
    </div>
  );
}

export default Login;