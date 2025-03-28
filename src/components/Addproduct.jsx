import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const response = await axios.post(
        "https://Graca.pythonanywhere.com/api/add_product",
        formData
      );
      if (response.data.message) {
        setLoading("");
        setSuccess(response.data.message);
        setProductName("");
        setProductDescription("");
        setProductCost("");
        setProductPhoto("");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="shadow card col-md-6 p-4">
        <h1>Add Product</h1>
        {loading}
        {success}
        {error}

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter product name"
            className="form-control"
            value={product_name}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <br />
          <textarea
            placeholder="Describe the product"
            className="form-control"
            value={product_description}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          />
          <br />
          <input
            type="number"
            placeholder="Enter product prize"
            className="form-control"
            value={product_cost}
            onChange={(e) => {
              setProductCost(e.target.value);
            }}
          />
          <br />
          <input
            type="file"
            placeholder="Upload photo"
            className="form-control"
            onChange={(e) => {
              setProductPhoto(e.target.files[0]);
            }}
          />
          <br /> <br />
          <button type="submit" className="btn btn-warning">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
