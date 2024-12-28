import './index.css'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from '../src/Components/Shop.jsx';
import Account from './Components/Account.jsx';
import Navbar from './Components/Navbar.jsx';


function About() {
  return <div className="pt-20 text-center">About Page</div>;
}

function App() {
  return (
    <Router>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order" element={<div className="text-center">Order Now Page</div>} />
          <Route path="/cart" element={<div className="text-center">Cart Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
