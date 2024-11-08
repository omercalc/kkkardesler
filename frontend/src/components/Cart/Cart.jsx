import { useContext } from "react";
import { message } from "antd";
import { CartContext } from "../../context/CartContext"; // CartContext'i içe aktar

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // CartContext'ten cartItems ve removeFromCart'u al

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    message.success("Ürün sepetten kaldırıldı.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sepetim</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Sepetinizde ürün bulunmamaktadır.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map(item => (
            <div key={item._id} className="border p-4 rounded-lg shadow-lg flex justify-between items-center">
              <img src={item.image[0]} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.discount ? (item.price.current - item.price.discount).toFixed(2) : item.price.current}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                Kaldır
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;