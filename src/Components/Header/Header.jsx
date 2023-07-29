import React from "react";
import "./Header.css";
import { Home, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalSelectedItems = useSelector((state) => state.ecom.totalCartItems);

  return (
    <div className="div-container">
      <nav className="nav-container">
        <div>
          <Link to={"/"}>
            {" "}
            <Home color="white" size={32} strokeWidth={2} />
          </Link>
        </div>

        <div className="cart-icon-container">
          <Link to={"/cart"}>
            <ShoppingBag color="white" size={30} strokeWidth={2} />
            {totalSelectedItems >= 0 && (
              <div className="cart-icon-badge">{totalSelectedItems}</div>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
