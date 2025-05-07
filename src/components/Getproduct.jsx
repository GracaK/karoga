import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css'
const Getproduct = () => {
  const [products, setProducts] = useState([]);
  const img_url = "https://Graca.pythonanywhere.com/static/images/";

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [searchTerm,setSearchTerm] = useState('')

  const navigate = useNavigate();

  const getProducts = async () => {
    setLoading("please wait...");
    try {
      const response = await axios.get(
        "https://Graca.pythonanywhere.com/api/get_product_details"
      );
      console.log(response.data);
      setProducts(response.data.products);
      setLoading("");
    } catch (error) {
      setError(error.message);
    }
  };


  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product)=>
  product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="container-fluid ">
      <h1>Explore Products</h1>
      {loading}
      {error} <br />
      <input
        type="text"
        className="col-md-8 mb-3 "
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow p-2 bg-muted">
              <div className="card-header">
                  <img
                    src={img_url + product.product_photo}
                    alt={product.product_photo}
                    className="w-100 h-200"
                  />
                </div>
              <div className="card-body h-200">
                <h5 className="mt-2 text-dark">{product.product_name}</h5>
                <p className="text-dark">{product.product_description}</p>
                <b className="text-warning">Ksh {product.product_cost}</b>{" "}
                <br />
                <button
                  className="btn btn-warning w-100 mt-2"
                  onClick={() => {
                    navigate("/payment", { state: { product } });
                  }}
                >
                  show details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getproduct;
