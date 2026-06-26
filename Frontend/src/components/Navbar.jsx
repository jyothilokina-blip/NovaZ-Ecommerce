import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  const username =
    localStorage.getItem("username");

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    window.location.href = "/";

  };

  return (

    <nav className="navbar">

      <div className="logo">
        🛒 NovaZ
      </div>

      <div className="nav-links">

        <Link to="/">
          🏠 Home
        </Link>

        <Link to="/products">
          🛍 Products
        </Link>

        <Link to="/orders">
          📦 Orders
        </Link>

        <Link to="/cart">

          🛒 Cart

          <span className="badge">
            {cart?.length || 0}
          </span>

        </Link>

        {

          username ? (

            <>

              <span className="user-name">
                👤 {username}
              </span>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </>

          ) : (

            <>

              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>

            </>

          )

        }

      </div>

    </nav>

  );

}

export default Navbar;


