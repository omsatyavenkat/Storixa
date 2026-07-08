import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Logo from "../components/ui/Logo";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return alert("Please enter your name.");
    }

    if (!formData.email.trim()) {
      return alert("Please enter your email.");
    }

    if (formData.password.length < 8) {
      return alert("Password must be at least 8 characters.");
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/register", formData);

      alert(response.data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <Card className="w-full max-w-md">

        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <h2 className="text-3xl font-bold text-center text-white">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Register to start using Storixa.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

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
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </Button>

        </form>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </Card>

    </div>
  );
}

export default Register;