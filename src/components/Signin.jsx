import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  // create hooks that will enable you to store the different state of your application
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  create three additional hooks that store the different state of your application
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // the below hook will redirect the user details etered are correct
  const navigate = useNavigate();

  // create a function to handle the submit event
  const submit = async (e) => {
    // below we prevent page reload
    e.preventDefault();

    // we update the loading hook with a message
    setLoading("Please wait as we log you in ...");

    // have a try and catch block
    try {
      // create a Form object
      const data = new FormData();

      // insert records into new new object created
      data.append("email", email);
      data.append("password", password);

      // post your data through the API
      const response = await axios.post(
        "http://Graca.pythonanywhere.com/api/signin",
        data
      );

      // set the loading state back to zero
      setLoading("");

      // Have an IF statement to check if there is a record of the details passed
      if (response.data.user) {
        // setSuccess(response.data.message)
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // redirect the user if the details entered are correct
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
        <h2>Sign In</h2>
        <form action="" onSubmit={submit}>
          {loading}
          {success}
          {error}
          <input
            type="email"
            placeholder="Enter your email address here"
            className="form-control"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/*password*/}
          <br /> <br />
          <button type="submit" className="btn btn-warning">
            Sign In{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
