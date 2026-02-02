import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaUsers, FaUserTie, FaArrowRight } from "react-icons/fa";

const CTACards = () => {
  const primaryColor = "#005aa8";
  const accentColor = "#ed6605";
  const secondaryColor = "#005aa8";

  const ctaCards = [
    {
      title: "Exhibitor",
      description:
        "Book your booth space and showcase your products to 15,000+ professionals",
      icon: <FaIndustry />,
      color: primaryColor,
      stats: "500+ Booths",
      link: "https://masmaexpo.in/exhibitor",
    },
    {
      title: "Visitor",
      description:
        "Register for free entry and access to latest renewable energy technologies",
      icon: <FaUsers />,
      color: accentColor,
      stats: "15,000+ Visitors",
      link: "https://vms.ruha.co.in/registration/masma-visitor",
    },
    {
      title: "Member",
      description:
        "Join as member for exclusive access to conferences and roundtables",
      icon: <FaUserTie />,
      color: secondaryColor,
      stats: "200+ Speakers",
      link: "/bemember",
    },
  ];

  const handleRegister = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="absolute -bottom-15 md:-bottom-24 lg:-bottom-28 xl:-bottom-5 left-0 right-0 z-30 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {ctaCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl md:rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: card.color }}
            >
              {/* Card Header */}
              <div
                className="p-2 md:p-4 sm:p-5 lg:p-8 text-white"
                style={{ backgroundColor: card.color }}
              >
                <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base opacity-90 mb-3 md:mb-4">
                  {card.description}
                </p>

                <button
                  onClick={() => handleRegister(card.link)}
                  className="w-full py-1 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-bold transition-all bg-white text-black duration-300 hover:shadow-lg flex items-center justify-center gap-2 group text-sm md:text-base"
                >
                  Register
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTACards;
