import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import dnyanada from "../../assets/associate/Dnyanada-Institute-Of-Flow-Piping-Technology.jpg";
import giz from "../../assets/associate/giz.png";
import globalindia from "../../assets/associate/gloobal-india.jpg";
import mitt from "../../assets/associate/mitt.png";
import PCERF from "../../assets/associate/PCERF.jpg";
import ppcob from "../../assets/associate/Pune-peoples-co-operative-bank.jpg";
import UzEnergyExpo from "../../assets/associate/UzEnergyExpo.jpg";
import YESBank from "../../assets/associate/YES-Bank.png";

const Associates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const associateCompanies = [
    {
      id: 1,
      name: "Dnyanada Institute of Flow Piping Technology",
      industry: "Solar Panel Manufacturing",
      logo: dnyanada,
      description:
        "DIFPT was established in 2010 to provide Plumbing Technology Skill training course of short duration of only 60 days to school & college youths from rural area.",
    },
    {
      id: 2,
      name: "MIT",
      industry: "Solar Installation & Maintenance",
      logo: mitt,
      description:
        "MIT World Peace University (MITWPU), Pune is one of the leading private institutions in India with a firm belief that the “Union of Science and Spirituality alone will bring peace to mankind”.",
    },
    {
      id: 3,
      name: "Global India Business Forumy",
      industry: "Solar Technology R&D",
      logo: globalindia,
      description: "Pioneering research in advanced solar technologies",
    },
    {
      id: 4,
      name: "Pune Construction Engineering Research Foundation",
      industry: "Residential Solar Solutions",
      logo: PCERF,
      description: "Affordable solar solutions for homes and communities",
    },
    {
      id: 5,
      name: "Gesellschaft Fur Internationale Zusammenarbeit (GIZ)",
      industry: "Commercial Solar Projects",
      logo: giz,
      description: "Large-scale solar projects for businesses and industries",
    },
    {
      id: 6,
      name: "UzEnergyExpo",
      industry: "Solar Component Suppliers",
      logo: UzEnergyExpo,
      description: "Quality components for solar system installations",
    },
    {
      id: 7,
      name: "YES Bank",
      industry: "Solar Water Heating",
      logo: YESBank,
      description: "Specialized in solar water heating solutions",
    },
    {
      id: 8,
      name: "Pune peoples co operative bank",
      industry: "Solar Consulting & Advisory",
      logo: ppcob,
      description: "Expert consulting services for solar projects",
    },
  ];

  return (
    <section className="py-20 px-4 pt-40">
      <div className="container mx-auto max-w-7xl">
        {/* Main Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Our Associate Companies
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with leading companies in the solar industry to drive
            sustainable energy adoption across Maharashtra
          </p>
        </motion.div>

        <div ref={ref} className="space-y-8">
          {/* Associate Companies Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {associateCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Company Logo/Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Company Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#005aa8] mb-2">
                    {company.name}
                  </h3>
                  <p className="text-[#ed6605] font-medium text-sm mb-3">
                    {company.industry}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Associates;
