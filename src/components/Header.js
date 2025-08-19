import { useState } from "react"
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? 
      <button onClick={() => setIsLoggedIn(false)}>LogOut</button> :
      <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
}
    </div>
  );
}

export default Header;