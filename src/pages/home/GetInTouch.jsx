import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaUserPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import getInTouchBg from "../../assets/masma/get.png";

const GetInTouch = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleBecomeMember = () => {
    navigate("/bemember"); // Redirect to /bemember
  };

  return (
    <section
      className="relative py-16 px-4 min-h-96 flex items-center"
      style={{
        backgroundImage: `url(${getInTouchBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-4xl text-center text-white p-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-3xl font-bold">Get in Touch</h1>
          <h1 className="text-4xl md:text-6xl font-bold">
            Let's Work Together!
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            MASMA is a solar PV and solar water heater industry association that
            includes manufacturers, installers, and suppliers from across India,
            not just Maharashtra.
          </p>

          <motion.button
            onClick={handleBecomeMember}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#ed6605] text-white rounded-lg font-semibold text-lg hover:bg-[#d45a04] transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserPlus />
            <span>Became A Member</span>
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
