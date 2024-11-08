import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-12">
        
        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p>TURKEY/GAZIANTEP</p>
          <p>Phone: (+032) 3456 7890</p>
          <p>Email: k&kswordatelier@gmail.com</p>
          <p className="mt-4">Follow us:</p>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <a href="#" className="text-gray-800 hover:text-green-500"><i className="ri-facebook-fill"></i></a>
            <a href="#" className="text-gray-800 hover:text-green-500"><i className="ri-twitter-fill"></i></a>
            <a href="#" className="text-gray-800 hover:text-green-500"><i className="ri-pinterest-fill"></i></a>
            <a href="#" className="text-gray-800 hover:text-green-500"><i className="ri-google-fill"></i></a>
          </div>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-bold mb-4">Information</h3>
          <ul>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">New Products</a></li>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">Top Sellers</a></li>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">Our Blog</a></li>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">About Our Shop</a></li>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="font-bold mb-4">My Account</h3>
          <ul>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">My Account</a></li>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">Discount</a></li>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">Orders History</a></li>
            <li><a href="#" className="block text-gray-800 hover:text-green-500">Personal Information</a></li>
          </ul>
        </div>

        {/* Popular Tag Section */}
        <div>
          <h3 className="font-bold mb-4">Popular Tag</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <a href="#" className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100">Trend</a>
            <a href="#" className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100">Decor</a>
            <a href="#" className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100">Plant</a>
            <a href="#" className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100">Table Tree</a>
            <a href="#" className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100">Bedroom Tree</a>
            <a href="#" className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-green-100">Living Room</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-600">Copyright 2024 by <span className="text-green-600 font-semibold">NOGAWEB AJANS</span> - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;