import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "SPECIAL DESIGNS FOR YOU",
      subtitle: "Although it is all handmade...",
      description: "Do you have a design that you want to have only for you? Send it by e-mail! Let us bring it to life for you.",
      imgSrc: "/heropage1.jpg",
      bgImage: "/b-bg.jpg",
    },
    {
      title: "SPECIAL WORKS FOR YOU IF YOU WANT",
      subtitle: "Pamper Your Homes and Spaces",
      description: "We always provide service to our valued customers with innovative and stylish designs.",
      imgSrc: "/heropage2.jpg",
      bgImage: "/b-bg2.jpg",
    },
    {
      title: "WITHOUT COMPROMISING ON QUALITY",
      subtitle: "Delivery Worldwide",
      description: "We have delivery options all over the world and we also provide you with secure payment options...",
      imgSrc: "/heropage3.jpg",
      bgImage: "/b-bg3.jpg",
    },
  ];

  // Otomatik geçiş için useEffect kullanımı
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Her 3 saniyede bir geçiş

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section className=" relative overflow-hidden flex items-center justify-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="hero-sec mx-auto flex items-center justify-between px-6">   {/* büyük ekranda hero sec yerine container kullan */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold leading-tight text-gray-800">
                {slide.title} <span className="block">{slide.subtitle}</span>
              </h1>
              <p className="mt-4 text-gray-500">{slide.description}</p>
              <a
                href="#"
                className="inline-block mt-6 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-all"
              >
                Shop Now <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
            <div className="flex-1">
              <img src={slide.imgSrc} alt="Slide Image" className="object-cover" />
            </div>
          </div>
        </div>
      ))}

      {/* Pagination & Arrows */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <a onClick={goToPrevSlide} className="text-gray-500 hover:text-gray-800 cursor-pointer">
          <i className="ri-arrow-left-line text-2xl"></i>
        </a>
        <span className="text-gray-700">
          {currentSlide + 1} / {slides.length}
        </span>
        <a onClick={goToNextSlide} className="text-gray-500 hover:text-gray-800 cursor-pointer">
          <i className="ri-arrow-right-line text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;