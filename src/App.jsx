/* eslint-disable no-undef */
import './index.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Shop from './Components/Shop.jsx';
import Account from './Components/Account.jsx';
import Navbar from './Components/Navbar.jsx';
import Chat from './Components/Chat.jsx';
import Profile from './Components/Profile.jsx';
import MarketPlace from './Components/MarketPlace.jsx';
import Notifications from './Components/Notifications.jsx';
import Orders from './Components/Orders.jsx';
import CakeList from './Components/CakeList.jsx';
import Checkout from './Components/Checkout.jsx';
import About from './Components/About.jsx';
import Cart from './Components/Cart.jsx';
import CakeItem from './Components/CakeItem.jsx';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order" element={<div className="text-center">Order Now Page</div>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account/chat" element={<Chat />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/marketplace" element={<MarketPlace />} />
          <Route path="/account/notifications" element={<Notifications />} />
          <Route path="/account/orders" element={<Orders />} />
          <Route path="/cakes/:featureType" element={<CakeListWrapper />} />
          <Route path="/checkout/:RequestID" element={<Checkout />} />
          <Route path='/cakeitem/:id' element={<CakeItem /> } />
        </Routes>
      </div>
    </Router>
  );
}

function CakeListWrapper() {
  const { featureType } = useParams(); // Ensure useParams is imported
  return <CakeList featureType={featureType} />;
}

export default App;
