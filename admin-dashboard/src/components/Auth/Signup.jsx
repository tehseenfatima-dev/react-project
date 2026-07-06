import { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      toast.warning("Please fill in all fields.");
      return;
    }

    // Check if account already exists
    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === email) {
      toast.error("An account with this email already exists.");
      return;
    }

    // Save user (Frontend Only)
    localStorage.setItem("user", JSON.stringify(formData));

    toast.success("Account created successfully!");

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-header">
          <h1>Create Account 🚀</h1>
          <p>Create your account to continue</p>
        </div>

        <form className="auth-form" onSubmit={handleSignup}>

          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Create Account
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">

          <button
            type="button"
            className="google-btn"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <button
            type="button"
            className="github-btn"
          >
            <FaGithub />
            Continue with GitHub
          </button>

        </div>

        <p className="bottom-text">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}