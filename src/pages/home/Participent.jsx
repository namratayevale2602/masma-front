import { useState, useEffect, useRef } from "react";

const Participent = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainer1Ref = useRef(null);
  const scrollContainer2Ref = useRef(null);

  // Solar-related images from Unsplash
  const solarCards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Residential Solar",
      description: "Home solar solutions",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Commercial Projects",
      description: "Business solar installations",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Solar Farms",
      description: "Large scale energy production",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Roof Top Solar",
      description: "Efficient space utilization",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Industrial Solar",
      description: "Factory power solutions",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1564059813745-b2c0c42dcd19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Solar Panels",
      description: "High efficiency technology",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1549399905-02da7514e9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Monitoring Systems",
      description: "Real-time performance tracking",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1575310279751-6864c08763db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Maintenance",
      description: "Professional service & care",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1621372040061-6ce0a937763d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Solar Innovation",
      description: "Cutting edge technology",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      title: "Green Energy",
      description: "Sustainable power solutions",
    },
  ];

  // Duplicate cards for seamless looping
  const duplicatedCards = [...solarCards, ...solarCards, ...solarCards];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainer1Ref.current && scrollContainer2Ref.current) {
        // First row - scroll left to right
        scrollContainer1Ref.current.scrollLeft += 1;

        // Reset scroll position when reaching the end for seamless loop
        if (
          scrollContainer1Ref.current.scrollLeft >=
          scrollContainer1Ref.current.scrollWidth / 3
        ) {
          scrollContainer1Ref.current.scrollLeft = 0;
        }

        // Second row - scroll right to left
        scrollContainer2Ref.current.scrollLeft -= 1;

        // Reset scroll position when reaching the start for seamless loop
        if (scrollContainer2Ref.current.scrollLeft <= 0) {
          scrollContainer2Ref.current.scrollLeft =
            scrollContainer2Ref.current.scrollWidth / 3;
        }
      }
    }, 20); // Adjust speed by changing interval time

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#005aa8] mb-4">
            MASMA EXPO PARTICIPANTS
          </h2>
          <p className="text-xl text-[#ed6605] max-w-2xl mx-auto">
            Explore our comprehensive range of solar energy services and
            installations
          </p>
        </div>

        {/* First Row - Left to Right Scroll */}
        <div className="mb-8">
          <div
            ref={scrollContainer1Ref}
            className="flex overflow-x-hidden space-x-6 py-4 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={`row1-${card.id}-${index}`}
                className="shrink-0 w-80 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left Scroll */}
        <div>
          <div
            ref={scrollContainer2Ref}
            className="flex overflow-x-hidden space-x-6 py-4 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={`row2-${card.id}-${index}`}
                className="shrink-0 w-80 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
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

export default Participent;
