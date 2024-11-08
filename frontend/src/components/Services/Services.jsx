import "remixicon/fonts/remixicon.css";

const Services = () => {
  return (
    <section className="py-28 px-4 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
          Everything for our valued customers.
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-3xl border border-green-500">
          <i className="ri-truck-line text-6xl text-green-500 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}>
            Fast Delivery
          </h3>
          <p className="text-gray-600">We ensure quick and safe delivery of your orders.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-3xl border border-green-500">
          <i className="ri-phone-line text-6xl text-green-500 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}>
            24/7 Support
          </h3>
          <p className="text-gray-600">Our support team is available 24/7 to assist you.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-3xl border border-green-500">
          <i className="ri-leaf-line text-6xl text-green-500 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}>
            100% Natural
          </h3>
          <p className="text-gray-600">All our products are made from 100% natural ingredients.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-3xl border border-green-500">
          <i className="ri-shield-check-line text-6xl text-green-500 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}>
            Secure Payment
          </h3>
          <p className="text-gray-600">We offer secure payment options for your convenience.</p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-12">
        <h3 className="text-5xl font-bold text-gray-800" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
          Whether you want to check out our <br/> special works for you or our standard products
        </h3>
      </div>
    </section>
  );
};

export default Services;