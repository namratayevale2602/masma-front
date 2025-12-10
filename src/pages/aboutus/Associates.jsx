import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      logo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "DIFPT was established in 2010 to provide Plumbing Technology Skill training course of short duration of only 60 days to school & college youths from rural area.",
    },
    {
      id: 2,
      name: "MIT",
      industry: "Solar Installation & Maintenance",
      logo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "MIT World Peace University (MITWPU), Pune is one of the leading private institutions in India with a firm belief that the “Union of Science and Spirituality alone will bring peace to mankind”.",
    },
    {
      id: 3,
      name: "EcoPower Innovations",
      industry: "Solar Technology R&D",
      logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Pioneering research in advanced solar technologies",
    },
    {
      id: 4,
      name: "SunRise Solar",
      industry: "Residential Solar Solutions",
      logo: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Affordable solar solutions for homes and communities",
    },
    {
      id: 5,
      name: "PowerGrid Technologies",
      industry: "Commercial Solar Projects",
      logo: "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Large-scale solar projects for businesses and industries",
    },
    {
      id: 6,
      name: "CleanEnergy Partners",
      industry: "Solar Component Suppliers",
      logo: "https://images.unsplash.com/photo-1564059813745-b2c0c42dcd19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Quality components for solar system installations",
    },
    {
      id: 7,
      name: "Sustainable Systems",
      industry: "Solar Water Heating",
      logo: "https://images.unsplash.com/photo-1549399905-02da7514e9a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specialized in solar water heating solutions",
    },
    {
      id: 8,
      name: "Renewable Resources",
      industry: "Solar Consulting & Advisory",
      logo: "https://images.unsplash.com/photo-1575310279751-6864c08763db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
