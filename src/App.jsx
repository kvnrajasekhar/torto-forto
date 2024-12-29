import './index.css'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from '../src/Components/Shop.jsx';
import Account from './Components/Account.jsx';
import Navbar from './Components/Navbar.jsx';
import Chat from './Components/Chat.jsx';
import Profile from './Components/Profile.jsx';
import MarketPlace from './Components/MarketPlace.jsx';
import Notifications from './Components/Notifications.jsx';
import Orders from './Components/Orders.jsx';


function About() {
  return <div className="pt-20 text-center">About Page</div>;
}

function App() {
  return (
    <Router>
      <div >
        <Navbar />
      </div>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order" element={<div className="text-center">Order Now Page</div>} />
          <Route path="/cart" element={<div className="text-center">Cart Page</div>} />
          <Route path="/account/chat" element={<Chat />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/marketplace" element={<MarketPlace />} />
          <Route path="/account/notifications" element={<Notifications />} />
          <Route path="/account/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
