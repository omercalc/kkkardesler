import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { message, InputNumber } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../../context/CartContext"; // CartContext'i içe aktar

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { addToCart } = useContext(CartContext); // CartContext'ten addToCart'u al

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          message.error("Ürün bulunamadı.");
        }
      } catch (error) {
        message.error(`Veri yükleme hatası: ${error.message}`);
      }
    };

    fetchProduct();
  }, [id, apiUrl]);

  if (!product) {
    return <div className="text-center text-gray-500 mt-10">Product not found</div>;
  }

  const handleCountChange = (value) => {
    setCount(value);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < count; i++) {
      addToCart(product);
    }
    message.success(`${count} adet ${product.name} sepete eklendi.`);
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">{product.name}</h1>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
          <p className="text-md mb-4 text-gray-600 leading-relaxed">{product.description}</p>
          <div className="flex items-center space-x-4 mb-4">
            {product.price.discount && (
              <span className="line-through text-gray-400 text-lg">${product.price.current}</span>
            )}
            <span className="text-2xl font-bold text-green-600">
              ${product.price.discount ? (product.price.current - product.price.discount).toFixed(2) : product.price.current}
            </span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-lg font-medium text-gray-700">Adet:</span>
            <InputNumber
              min={1}
              max={100}
              defaultValue={1}
              onChange={handleCountChange}
              className="w-20"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all duration-200"
          >
            <ShoppingCartOutlined />
            <span>SEPETE EKLE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;