import { useState, useEffect, useRef } from "react";
import logo1 from "../../assets/company-logo/1.png";
import logo2 from "../../assets/company-logo/2.png";
import logo3 from "../../assets/company-logo/3.png";
import logo4 from "../../assets/company-logo/4.png";
import logo5 from "../../assets/company-logo/5.png";
import logo6 from "../../assets/company-logo/6.png";
import logo7 from "../../assets/company-logo/7.png";
import logo8 from "../../assets/company-logo/8.png";

const CompnyLogo = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainer1Ref = useRef(null);

  // Solar-related images from Unsplash
  const solarCards = [
    {
      id: 1,
      image: logo1,
      description: "Home solar solutions",
    },
    {
      id: 2,
      image: logo2,
      description: "Business solar installations",
    },
    {
      id: 3,
      image: logo3,
      title: "Solar Farms",
      description: "Large scale energy production",
    },
    {
      id: 4,
      image: logo4,
      title: "Roof Top Solar",
      description: "Efficient space utilization",
    },
    {
      id: 5,
      image: logo5,
      title: "Industrial Solar",
      description: "Factory power solutions",
    },
    {
      id: 6,
      image: logo6,
      title: "Solar Panels",
      description: "High efficiency technology",
    },
    {
      id: 7,
      image: logo7,
      title: "Monitoring Systems",
      description: "Real-time performance tracking",
    },
    {
      id: 8,
      image: logo8,
      title: "Maintenance",
      description: "Professional service & care",
    },
  ];

  // Duplicate cards for seamless looping
  const duplicatedCards = [...solarCards, ...solarCards, ...solarCards];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainer1Ref.current) {
        // First row - scroll left to right
        scrollContainer1Ref.current.scrollLeft += 1;

        // Reset scroll position when reaching the end for seamless loop
        if (
          scrollContainer1Ref.current.scrollLeft >=
          scrollContainer1Ref.current.scrollWidth / 3
        ) {
          scrollContainer1Ref.current.scrollLeft = 0;
        }
      }
    }, 20); // Adjust speed by changing interval time

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* First Row - Left to Right Scroll */}
        <div>
          <div
            ref={scrollContainer1Ref}
            className="flex overflow-x-hidden space-x-6 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedCards.map((card, index) => (
              <div key={`row1-${card.id}-${index}`} className="shrink-0 w-80 ">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-30 overflow-hidden">
                    <img src={card.image} alt={card.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CompnyLogo;
