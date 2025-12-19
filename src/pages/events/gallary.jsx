import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaTimes,
  FaExpand,
  FaArrowLeft,
  FaArrowRight as FaRight,
  FaShare,
  FaBookmark,
} from "react-icons/fa";
import {
  expoBrochure,
  expoBrochure1,
  expoBrochure2,
  expoBrochure3,
  expoBrochure4,
  expoBrochure5,
  expoBrochure6,
  expoBrochure7,
  expoBrochure8,
  expoBrochure9,
  expoBrochure10,
  expoBrochure11,
  expoBrochure12,
  expoBrochure13,
  expoBrochure14,
  expoBrochure15,
} from "../../assets";

const Gallary = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedNews, setSelectedNews] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const newsArticles = [
    {
      id: 1,
      title:
        "Expo Brochure was Launched by Shri Atul Save ji, Hon'ble Minister (Renewable Energy), Govt of Maharastra",
      image: expoBrochure,
      images: [expoBrochure1, expoBrochure2],
    },
    {
      id: 2,
      title:
        "With Mrs Meghana Bordikar Hon'ble Minister of State (Energy), Govt of Maharastra",
      image: expoBrochure3,
      images: [expoBrochure3, , expoBrochure4, expoBrochure5],
    },
    {
      id: 3,
      title:
        "Meeting Shri Chandrakant Dada Patil, Hon'ble Minister (Higher & Technical Education), Govt of Maharashtra",
      image: expoBrochure6,
      images: [expoBrochure6, expoBrochure7],
    },
    {
      id: 4,
      title:
        "With Shri Om Prakash Bakoria (IAS), Hon'ble Director General, Maharashtra Energy Development Agency (MEDA)",
      image: expoBrochure8,
      images: [expoBrochure8, expoBrochure9],
    },
    {
      id: 5,
      title: "With Shri. Vishwas Pathak, Independent Director, MSEDCL",
      image: expoBrochure10,
      images: [
        expoBrochure11,
        expoBrochure12,
        expoBrochure13,
        expoBrochure14,
        expoBrochure15,
      ],
    },
  ];

  const openNewsDetail = (news) => {
    setSelectedNews(news);
    setCurrentImageIndex(0);
  };

  const closeNewsDetail = () => {
    setSelectedNews(null);
    setCurrentImageIndex(0);
  };

  const openFullScreenImage = (imageIndex = 0) => {
    setFullScreenImage({
      images: selectedNews.images,
      currentIndex: imageIndex,
    });
    setCurrentImageIndex(imageIndex);
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  const nextImage = () => {
    if (fullScreenImage) {
      const nextIndex = (currentImageIndex + 1) % fullScreenImage.images.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (fullScreenImage) {
      const prevIndex =
        (currentImageIndex - 1 + fullScreenImage.images.length) %
        fullScreenImage.images.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  const NewsCard = ({ news }) => (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden group transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
    >
      <div className="h-70 overflow-hidden relative">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-3">
        <h3
          className="text-xl font-bold text-[#005aa8] mb-3 cursor-pointer hover:text-[#ed6605] transition-colors line-clamp-2"
          onClick={() => openNewsDetail(news)}
        >
          {news.title}
        </h3>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 pt-40 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        {/* Main Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Gallary
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in solar energy.
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {newsArticles.map((news, index) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </motion.div>

        {/* News Detail Popup */}
        <AnimatePresence>
          {selectedNews && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeNewsDetail}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-[#005aa8]">
                      {selectedNews.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeNewsDetail}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FaTimes className="text-gray-500 text-xl" />
                  </button>
                </div>

                {/* Image Gallery */}
                <div className="relative">
                  <div className="h-80 bg-gray-100 relative">
                    <img
                      src={selectedNews.images[currentImageIndex]}
                      alt={selectedNews.title}
                      className="w-full h-full object-contain"
                    />

                    {/* Expand Button */}
                    <button
                      onClick={() => openFullScreenImage(currentImageIndex)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors "
                    >
                      <FaExpand className="text-gray-700" />
                    </button>

                    {/* Navigation Arrows */}
                    {selectedNews.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              (prev) =>
                                (prev - 1 + selectedNews.images.length) %
                                selectedNews.images.length
                            )
                          }
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <FaArrowLeft className="text-gray-700" />
                        </button>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              (prev) => (prev + 1) % selectedNews.images.length
                            )
                          }
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <FaRight className="text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {selectedNews.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedNews.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-[#ed6605]"
                                : "bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Image Viewer */}
        <AnimatePresence>
          {fullScreenImage && (
            <motion.div
              className="fixed inset-0 bg-black z-60 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={closeFullScreenImage}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <FaTimes className="text-white text-xl" />
              </button>

              {/* Navigation Arrows */}
              {fullScreenImage.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaArrowLeft className="text-white text-xl" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaRight className="text-white text-xl" />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.img
                key={currentImageIndex}
                src={fullScreenImage.images[currentImageIndex]}
                alt="News image"
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image Counter */}
              {fullScreenImage.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {fullScreenImage.images.length}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallary;
