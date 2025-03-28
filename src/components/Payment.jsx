import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const img_url = "https://Graca.pythonanywhere.com/static/images/";
const Payment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("amount", product.product_cost);
      formData.append("phone", phone);

      setLoading("Connecting...");

      const response = await axios.post(
        "https://modcom2.pythonanywhere.com/api/mpesa_payment",
        formData
      );

      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      {loading}
      {success}
      {error}
      <h1 className="m-2">Mpesa Payment-LIPA NA MPESA</h1>
      <div className="card shadow col-md-6 p-2">
        <h1 className="text-success">LIPA NA MPESA</h1>
        <div className="card-body">
          <img
            src={img_url + product.product_photo}
            alt={product.product_photo}
            className="mt-4"
          />
        </div>
        <h3 className="text-secondary">{product.product_name}</h3>
        <p className="text-danger">{product.product_cost}</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter 254*********"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />{" "}
          <br />
          <br />
          <button className="btn btn-warning ">Purchase Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
