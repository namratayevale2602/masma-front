import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlayCircle,
} from "react-icons/fa";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  mobile,
  mobile1,
  mobile2,
} from "../../assets/index";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Images from Unsplash - Different images for mobile and desktop
  const heroImages = [
    {
      desktop: banner4,
      mobile: mobile,
    },
    {
      desktop: banner5,
      mobile: mobile1,
    },
    {
      desktop: banner6,
      mobile: mobile2,
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[60vh] sm:h-[46vh] md:[46vh] lg:[46vh] xl:min-h-screen flex items-center justify-center overflow-hidden md:mt-20 mt-28">
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Desktop Image */}
            <img
              src={image.desktop}
              alt={`Hero ${index + 1} Desktop`}
              className="hidden sm:block w-full h-full md:object-contain lg:object-cover xl:object-cover"
            />
            {/* Mobile Image */}
            <img
              src={image.mobile}
              alt={`Hero ${index + 1} Mobile`}
              className="block md:hidden w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
        <div className="flex gap-3">
          {heroImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${
                index === currentSlide
                  ? "ring-2 ring-white scale-110"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img
                src={image.desktop}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-blue-500/30"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
