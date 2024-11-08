import "remixicon/fonts/remixicon.css";

const HomeCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-100">
      
      {/* İlk Kart */}
      <div className="relative bg-white shadow-md overflow-hidden rounded-lg">
        <img
          src="../h-category-o.jpg" // Görsel URL'nizi buraya koyun
          alt="New Product"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-end justify-center p-6 text-right">
          <h2 className="text-3xl font-semibold text-white">
          For a short time in <br/> special works for you
            <span className="text-orange-500 font-bold ml-2">20% off</span>
          </h2>
          <p className="text-gray-300 text-lg mb-2">Previous Studies</p>
          <a href="#" className="text-green-400 font-semibold hover:underline flex items-center">
            Shop Now <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>

      {/* İkinci Kart */}
      <div className="relative bg-white shadow-md overflow-hidden rounded-lg">
        <img
          src="../h-category-s.png" // Görsel URL'nizi buraya koyun
          alt="House Plants"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-6 text-left">
          <h2 className="text-3xl font-semibold text-white">Standard Products</h2>
          <p className="text-gray-300 text-lg mb-2">New Trending 2024</p>
          <a href="#" className="text-green-400 font-semibold hover:underline flex items-center">
            Shop Now <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>

    </div>
  );
};

export default HomeCategory;