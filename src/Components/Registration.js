import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate successful registration
    setTimeout(() => {
      toast.success("Registration Successful!", {
        position: "top-center",
        autoClose: 2000,
      });

      setLoading(false);
      navigate("/login"); // Redirect to login after success
    }, 2000);
  };

  return (
    <div className="container">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Register</h2>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        <p>
          Already have an account?{" "}
          <button type="button" onClick={() => navigate("/login")}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default Registration;
