import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../Category/Category";
import { message } from "antd";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Ürünler yüklenemedi.");
        }
      } catch (error) {
        console.log("Ürün Hatası:", error);
        message.error("Ürünler yüklenemedi.");
      }
    };

    fetchProducts();
  }, [apiUrl]);

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    message.success(`${product.name} sepete eklendi.`);
  };

  return (
    <div>
      <section
        className="bg-cover bg-center w-full h-80"
        style={{ backgroundImage: "url(../products-img.jpg)" }}
      >
        <div className="container mx-auto py-24 text-center"></div>
      </section>

      <div className="container mx-auto flex mt-8">
        <Category />

        <div className="w-3/4 p-4">
          <article>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product._id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative group">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <ul className="absolute inset-0 flex justify-center items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-t-lg">
                      <li>
                        <button
                          className="text-white text-2xl bg-gray-800 p-2 rounded-full shadow hover:bg-green-500 transition-colors duration-300"
                        >
                          <i className="ri-heart-line"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="text-white text-2xl bg-gray-800 p-2 rounded-full shadow hover:bg-green-500 transition-colors duration-300"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleViewDetails(product._id)}
                          className="text-white text-2xl bg-gray-800 p-2 rounded-full shadow hover:bg-green-500 transition-colors duration-300"
                        >
                          <i className="ri-eye-line"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center mt-4">
                    <span className="block mb-2">
                      <span className="text-lg font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300">
                        {product.name}
                      </span>
                    </span>
                    <span className="block text-lg font-semibold text-gray-800 pb-1">
                      {product.price.discount ? (
                        <>
                          <del className="text-gray-500 relative inline-block">
                            ${product.price.current}
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-4xl font-bold">×</span>
                          </del>{" "}
                          <span className="relative inline-block ml-4">
                            <span className="border-b-2 border-green-500 inline-block">
                              ${product.price.current - product.price.discount}
                            </span>
                            <span className="absolute top-0 left-1/1 transform -translate-x-1/3 -translate-y-1/2 text-red-500 text-xs font-bold rotate-45 px-1">
                              NEW
                              <span className="block border-b-2 border-red-500 mt-1"></span>
                            </span>
                          </span>
                        </>
                      ) : (
                        <span className="border-b-2 border-green-500 inline-block">
                          ${product.price.current}
                        </span>
                      )}
                    </span>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Products;