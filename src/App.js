

import './App.css';
import Addproduct from './components/Addproduct';
import Footer from './components/Footer';
import Getproduct from './components/Getproduct';
import Notfound from './components/Notfound';
import Payment from './components/Payment';
import Signin from './components/Signin';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.min.js";
import pic2 from "./images/pic2.webp";

import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link className="link" to="/signup">
            Sign up
          </Link>
          <Link className="link" to="/signin">
            Sign in
          </Link>
          <Link className="link" to="/addproduct">
            Add product
          </Link>
          <Link className="link" to="/getproduct">
            Get product
          </Link>
        </nav>
        <header className="App-header">
          <h1>Opulent Delights</h1>
        </header>
        <img src={pic2} alt="" className="d-block w-100 carousel-image" />
        <br />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/getproduct" element={<Getproduct />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Getproduct />} />
        </Routes>
      </BrowserRouter>
      <br />
      <Footer />
    </div>
  );
}

export default App;
