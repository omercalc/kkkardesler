const WhyUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-16 px-8">
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img src="/whyus.png" alt="K&K SWORD" className="w-3/4 max-w-md h-[660px]" />
      </div>
      <div className="lg:w-1/2 lg:pl-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why choose us ?</h2>
        <div className="w-16 h-1 bg-green-500 mb-6"></div>
        <p className="text-gray-600 mb-6">
          There are fundamental reasons to choose us for wooden craftsmanship: Unique Design, Quality, and Expertise. Each product is shaped with unique designs that completely reflect your dream; only the highest quality wood and materials are used for durable and aesthetic results. Every detail processed with years of experience is handled with precision and craftsmanship, resulting in a unique product filled with handwork and finesse...
          <a href="#" className="text-green-500 italic ml-1">Learn More</a>
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 mr-4 text-2xl">🌱</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Understand Customer Needs</h3>
              <p className="text-gray-600">Understanding the customer`s expectations and desires in the finest detail.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-4 text-2xl">🏆</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Never Compromise on Quality</h3>
              <p className="text-gray-600">Utilizing only the best materials and craftsmanship in production.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-4 text-2xl">⏰</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">On-Time Delivery</h3>
              <p className="text-gray-600">Delivering every project on time for customer satisfaction.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;