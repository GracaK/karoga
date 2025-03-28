import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // response states
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Connecting...");
    try {
      // fetching data from form
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      // posting data
      const response = await axios.post(
        "https://Graca.pythonanywhere.com/api/signup",
        formData
      );
      setLoading("");
      setSuccess(response.data.success);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="shadow card col-md-6 p-4">
        <h1>Sign Up Form</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          {/* Username Input  */}
          <input
            type="text"
            placeholder="Enter your username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />{" "}
          <br />
          {/* Email Input  */}
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br />
          {/* Tel Input  */}
          <input
            type="tel"
            placeholder="Enter your phone"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />{" "}
          <br />
          {/* Password Input  */}
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br />
          <button type="submit" className="btn btn-warning ">
            Sign up
          </button>
          <p>
            Already have an account?<Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
