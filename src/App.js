

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
import logo2 from "./images/logo2.png";

import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import PawprintChatWidget from './components/Chatbot';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <br/>
    <header className='header'>
    <img src={logo2} alt="" className="w-45 h-50 logo"/>
    </header>
     
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
        <br />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/getproduct" element={<Getproduct />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Getproduct />} />
          <Route path="/pawprintchat" element={<PawprintChatWidget/>}/>
        </Routes>
      </BrowserRouter>
      <br />
      <Footer />
    </div>
  );
}

export default App;
