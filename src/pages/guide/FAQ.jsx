import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaSolarPanel,
  FaQuestionCircle,
} from "react-icons/fa";

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [openItems, setOpenItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "WHAT IS A SOLAR ROOFTOP SYSTEM?",
      answer:
        "A solar rooftop system is a photovoltaic system that converts sunlight directly into electricity using solar panels installed on the rooftop of residential, commercial, or industrial buildings. These systems help reduce electricity bills and carbon footprint while providing clean, renewable energy.",
      category: "Basics",
    },
    {
      question: "WHAT IS A GRID CONNECTED SOLAR ROOFTOP SYSTEM?",
      answer: `In grid connected rooftop or small SPV system, the DC power generated from SPV panel is converted to AC power using power conditioning unit/Inverter and is fed to the grid either of 440/220 Volt three/single phase line or of 33 kV/11 kV three phase lines depending on the capacity of the system installed at residential, institution/commercial establishment and the regulatory framework specified for respective States.`,
      category: "Technical",
    },
    // ... same items as above
  ];

  const categories = ["All", ...new Set(faqItems.map((item) => item.category))];

  const filteredItems =
    activeCategory === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const FAQItem = ({ item, index, isOpen }) => (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
        onClick={() => toggleItem(index)}
      >
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[#005aa8] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 shrink-0">
            {index + 1}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800 pr-4">
              {item.question}
            </h3>
            <span className="inline-block px-2 py-1 bg-[#ed6605] text-white text-xs rounded-full mt-2">
              {item.category}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          {isOpen ? (
            <FaChevronUp className="text-[#ed6605] text-lg" />
          ) : (
            <FaChevronDown className="text-[#005aa8] text-lg" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <div className="border-t border-gray-200 pt-4">
                <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section className="py-20 pt-40 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Solar FAQ
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600">
            Find answers to common solar energy questions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-[#005aa8] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openItems.includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
