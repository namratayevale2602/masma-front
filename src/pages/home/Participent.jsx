import { useState, useEffect, useRef } from "react";

import img1 from "../../assets/masma/img-12.jpg";
import img2 from "../../assets/masma/img-13.jpg";
import img3 from "../../assets/masma/img-14.jpg";
import img4 from "../../assets/masma/img-15.jpg";
import img5 from "../../assets/masma/img-16.jpg";
import img6 from "../../assets/masma/img-17.jpg";
import img7 from "../../assets/masma/img-18.jpg";
import img8 from "../../assets/masma/img-19.jpg";
import img9 from "../../assets/masma/img-20.jpg";
import img10 from "../../assets/masma/img-48.jpg";
import img11 from "../../assets/masma/img-49.jpg";
import img12 from "../../assets/masma/img-50.jpg";
import img13 from "../../assets/masma/img-51.jpg";
import img14 from "../../assets/masma/img-52.jpg";
import img15 from "../../assets/masma/img-53.jpg";
import img16 from "../../assets/masma/img-54.jpg";
import img17 from "../../assets/masma/img-55.jpg";
import img18 from "../../assets/masma/img-56.jpg";
import img19 from "../../assets/masma/img-57.jpg";

const Participent = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainer1Ref = useRef(null);
  const scrollContainer2Ref = useRef(null);

  // First row images - larger height
  const row1Cards = [
    {
      id: 1,
      image: img1,
      title: "Solar Expo 2023",
      description: "Annual renewable energy exhibition",
    },
    {
      id: 2,
      image: img2,
      title: "Industry Conference",
      description: "Knowledge sharing sessions",
    },
    {
      id: 3,
      image: img3,
      title: "Networking Event",
      description: "Industry professionals gathering",
    },
    {
      id: 4,
      image: img4,
      title: "Product Launch",
      description: "New solar innovations",
    },
    {
      id: 5,
      image: img5,
      title: "Technical Workshop",
      description: "Hands-on training sessions",
    },
    {
      id: 6,
      image: img6,
      title: "Panel Discussion",
      description: "Expert insights forum",
    },
    {
      id: 7,
      image: img7,
      title: "Award Ceremony",
      description: "Recognizing excellence",
    },
    {
      id: 8,
      image: img8,
      title: "Exhibition Hall",
      description: "Vendor stalls display",
    },
    {
      id: 9,
      image: img9,
      title: "Keynote Speech",
      description: "Industry leaders address",
    },
  ];

  // Second row images - different images
  const row2Cards = [
    {
      id: 10,
      image: img10,
      title: "Installation Demo",
      description: "Live setup demonstration",
    },
    {
      id: 11,
      image: img11,
      title: "Exhibitor Booth",
      description: "Company presentations",
    },
    {
      id: 12,
      image: img12,
      title: "Sponsor Showcase",
      description: "Partner exhibits",
    },
    {
      id: 13,
      image: img13,
      title: "Attendees Networking",
      description: "Business connections",
    },
    {
      id: 14,
      image: img14,
      title: "Media Coverage",
      description: "Press and interviews",
    },
    {
      id: 15,
      image: img15,
      title: "Registration Desk",
      description: "Participant check-in",
    },
    {
      id: 16,
      image: img16,
      title: "Interactive Session",
      description: "Audience engagement",
    },
    {
      id: 17,
      image: img17,
      title: "Catering Area",
      description: "Refreshments break",
    },
    {
      id: 18,
      image: img18,
      title: "Closing Ceremony",
      description: "Event conclusion",
    },
    {
      id: 19,
      image: img19,
      title: "Closing Ceremony",
      description: "Event conclusion",
    },
  ];

  // Duplicate cards for seamless looping
  const duplicatedRow1Cards = [...row1Cards, ...row1Cards, ...row1Cards];
  const duplicatedRow2Cards = [...row2Cards, ...row2Cards, ...row2Cards];

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
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#005aa8] mb-4">
            MASMA EXPO PARTICIPANTS
          </h2>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our annual solar energy exhibition, networking events,
            and industry collaborations
          </p>
        </div>

        {/* First Row - Left to Right Scroll (Increased Height) */}
        <div className="mb-8">
          <div
            ref={scrollContainer1Ref}
            className="flex overflow-x-hidden space-x-6 py-6 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {duplicatedRow1Cards.map((card, index) => (
              <div
                key={`row1-${card.id}-${index}`}
                className="shrink-0 w-40 md:w-80 lg:w-60 "
              >
                <div className="overflow-hidden ">
                  <div className="h-64 md:h-72 lg:h-100 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left Scroll (Different Images) */}
        <div>
          <div
            ref={scrollContainer2Ref}
            className="flex overflow-x-hidden space-x-6 py-6 scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {duplicatedRow2Cards.map((card, index) => (
              <div
                key={`row2-${card.id}-${index}`}
                className="shrink-0 w-72 md:w-80 lg:w-70"
              >
                <div className=" overflow-hidden   ">
                  <div className="h-56 md:h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pause/Play Indicator */}
        {/* <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
            <div
              className={`w-3 h-3 rounded-full ${
                isPaused ? "bg-green-500" : "bg-yellow-500"
              } animate-pulse`}
            ></div>
            <span className="text-sm text-gray-600">
              {isPaused
                ? "Scroll paused (hover to pause)"
                : "Auto-scrolling..."}
            </span>
          </div>
        </div> */}
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
