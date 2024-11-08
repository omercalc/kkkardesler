import "remixicon/fonts/remixicon.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext"; // CartContext'i içe aktar

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext); // CartContext'ten cartItems'ı al

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md py-3 px-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Sol Bölüm - Menü İkonu, Dil ve Para Birimi */}
        <div className="flex items-center space-x-6 relative">
          {!user ? (
            <NavLink to="/login">
              <i className="ri-user-line text-gray-600 hover:text-black cursor-pointer text-xl"></i>
            </NavLink>
          ) : (
            <button
              className="ri-logout-box-line text-gray-600 hover:text-black cursor-pointer text-xl"
              onClick={() => {
                if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
                  handleLogout();
                }
              }}
            ></button>
          )}
        </div>

        <div className="flex items-center space-x-12">
          <nav className="flex space-x-6 text-lg font-bold justify-center items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-500 hover:text-green-500"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-500 hover:text-green-500"
              }
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-500 hover:text-green-500"
              }
            >
              ABOUT
            </NavLink>
            <a>
              <img src="/logo.jpg" alt="Botanical" className="h-24" />
            </a>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-500 hover:text-green-500"
              }
            >
              BLOG
            </NavLink>
            
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-500 hover:text-green-500"
              }
            >
              CONTACT
            </NavLink>
          </nav>
        </div>

        {/* Sağ Bölüm - Arama, Favori ve Sepet İkonları */}
        <div className="flex items-center space-x-4 text-gray-600">
          <a href="#" className="hover:text-gray-800 text-2xl">
            <i className="ri-search-line"></i>
          </a>
          <a href="#" className="hover:text-gray-800 relative text-2xl">
            <i className="ri-heart-line"></i>
            <sup className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full px-1">
              1
            </sup>
          </a>
          <NavLink to="/cart" className="hover:text-gray-800 relative text-2xl">
            <i className="ri-shopping-cart-line"></i>
            {cartItems.length > 0 && (
              <sup className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </sup>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;