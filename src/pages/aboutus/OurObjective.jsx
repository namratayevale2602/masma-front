import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUsers,
  FaHandshake,
  FaGraduationCap,
  FaBullhorn,
  FaCog,
  FaSun,
  FaChartLine,
  FaShieldAlt,
  FaBalanceScale,
  FaAward,
  FaRocket,
  FaBuilding,
  FaMoneyCheck,
  FaUserTie,
  FaClipboardCheck,
  FaEye,
  FaBullseye,
  FaFlag,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

const OurObjective = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const objectives = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Industry Unification",
      description:
        "Uniting all manufacturers, installers, and dealers engaged in Solar Hot Water and Solar System in Maharashtra.",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Government Coordination",
      description:
        "Interacting with Central Ministry MNRE, State ministry, and State Nodal Agencies for public awareness.",
    },
    {
      icon: <FaMoneyCheck className="text-2xl" />,
      title: "Banking Partnerships",
      description:
        "Working with nationalized and cooperative banks involved in interest subsidy schemes.",
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Training Programs",
      description:
        "Conducting training for installers, plumbers, marketers in coordination with industry associations.",
    },
    {
      icon: <FaBullhorn className="text-2xl" />,
      title: "Product Awareness",
      description:
        "Organizing webinars and programs for new product launches and solar system awareness.",
    },
    {
      icon: <FaCog className="text-2xl" />,
      title: "Comprehensive Support",
      description:
        "Providing technical support, training, recruitment, and policy guidance across the solar value chain.",
    },
  ];

  const directorResponsibilities = [
    {
      icon: <FaUserTie />,
      task: "Broadening the number of MASMA members",
    },
    {
      icon: <FaClipboardCheck />,
      task: "Conduct monthly meetings",
    },
    {
      icon: <FaBuilding />,
      task: "Interact with MEDA, MSEDCL, and Government officials",
    },
    {
      icon: <FaChartLine />,
      task: "Conduct sponsored knowledge series lectures quarterly",
    },
    {
      icon: <FaSun />,
      task: "Organize Solar Exhibitions at Regional levels",
    },
    {
      icon: <FaGraduationCap />,
      task: "Training of Manpower for Solar Sector",
    },
    {
      icon: <FaMoneyCheck />,
      task: "Take prior sanction for major expenses from HO",
    },
    {
      icon: <FaClipboardCheck />,
      task: "Send expenses and meeting minutes to HO monthly",
    },
    {
      icon: <FaShieldAlt />,
      task: "Resolve members grievances locally under HO guidance",
    },
  ];

  const ethicalStandards = [
    {
      icon: <FaAward />,
      title: "Organizational Representation",
      description:
        "Every member should realize that he represents MASMA as an Organization.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparency",
      description:
        "Member should be transparent about the technology offering to customers.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Fair Pricing & Quality",
      description: "Reasonable pricing & quality standards.",
    },
    {
      icon: <FaHandshake />,
      title: "Ethical Competition",
      description:
        "Ethical practices among business competitors should be maintained.",
    },
  ];

  const visionContent = {
    icon: <FaEye className="text-3xl" />,
    title: "Our Vision",
    description:
      "To establish Maharashtra as the leading solar energy hub in India, driving sustainable development and energy independence through widespread adoption of solar technologies.",
    highlights: [
      "Make proper organisation structure and system for MASMA",
      "Finical empowering to regional team",
      "Solar thermal cell",
      "Nothing else only business!!",
      "Tender cell",
      "Launching “Surya veer” yojan",
      "Promote MASMA till end customer",
      "Quarterly meeting",
      "Regional activity like tech series, factory visit etc.",
      "Training of members about quality.",
    ],
  };

  const missionContent = {
    icon: <FaBullseye className="text-3xl" />,
    title: "Our Mission",
    description:
      "To unite, strengthen, and empower the solar industry in Maharashtra through collaboration, education, and advocacy while promoting ethical practices and sustainable growth.",
    points: [
      {
        text: "MNRE & SECI central govt authorities.",
      },
      {
        text: "MEDA Head office & Regional offices.",
      },
      {
        text: "MSEDCL Local & Regional offices.",
      },
      {
        text: "Municipal Corporations.",
      },
      {
        text: "MASMA membership above 500 Members PAN Maharashtra.",
      },
      {
        text: "Recognition of MASMA activities by Central & State Authorities.",
      },
      {
        text: "Active role of MASMA in making policy decisions with government authorities.",
      },
      {
        text: "Formation of the task force to interact with MEDA & MSEDCL to have the easy implementation of Solar rooftop programmers.",
      },
      {
        text: "MASMA’s own offices & infrastructure.",
      },
      {
        text: "Interaction with Govt. Authorities for a favorable & reasonable subsidy policy for end users.",
      },
      {
        text: "Provide knowledge, business, and employment.",
      },
      {
        text: "Draft quality specifications as per government guidelines & quality standards.",
      },
      {
        text: "To set benchmark prices for solar systems as per the MNRE guidelines.",
      },
    ],
  };

  const goalsContent = {
    icon: <FaFlag className="text-3xl" />,
    title: "Our Goals",
    description:
      "Strategic objectives to achieve our vision and fulfill our mission through focused initiatives and measurable outcomes.",
    categories: [
      {
        title: "Strong advisor committee.",
      },
      {
        title: "Collaboration with other organisation",
      },
      {
        title: "Solve different policy issue.",
      },
      {
        title:
          "Educate member’s for equal purchase price and controlling cost of BOM.",
      },
      {
        title: "Educate member’s on manufacture’s warranty terms.",
      },
      {
        title: "Masma help line desk with number",
      },
      {
        title:
          "Organizing and heading all India solar federation ( Federation of Renewable Association of India)",
      },
    ],
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-8xl">
        {/* Main Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Our Guiding Principles
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MASMA (The Maharashtra Solar Manufactures' Association) - Driving
            solar energy adoption through unity, training, and ethical
            practices.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Vision, Mission & Goals Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision Card */}
            <motion.div
              className="bg-gray-100 rounded-2xl p-8 border-t-4 border-[#005aa8]"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ed6605] rounded-2xl text-white mb-4">
                  {visionContent.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#005aa8]">
                  {visionContent.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {visionContent.description}
              </p>
              <div className="space-y-3">
                {visionContent.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="shrink-0 w-2 h-2 bg-[#005aa8] rounded-full mt-2"></div>
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-gray-100 rounded-2xl p-8 border-t-4 border-[#005aa8]"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#ed6605] to-orange-500 rounded-2xl text-white mb-4">
                  {missionContent.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#005aa8]">
                  {missionContent.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {missionContent.description}
              </p>
              <div className="space-y-3">
                {missionContent.points.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="shrink-0 w-2 h-2 bg-[#005aa8] rounded-full"></div>
                    <span className="text-gray-600 text-sm">{point.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Goals Card */}
            <motion.div
              className="bg-gray-100 rounded-2xl p-8 border-t-4 border-[#005aa8]"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ed6605] rounded-2xl text-white mb-4">
                  {goalsContent.icon}
                </div>

                <h2 className="text-2xl font-bold text-[#005aa8]">
                  {goalsContent.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {goalsContent.description}
              </p>
              <div className="space-y-4">
                {goalsContent.categories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="shrink-0 w-2 h-2 bg-[#005aa8] rounded-full"></div>
                      <h4 className="text-sm text-gray-800">
                        {category.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Section 1: MASMA Objectives */}
          <motion.section
            className="bg-white rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ed6605] rounded-2xl text-white mb-4">
                <FaRocket className="text-2xl" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#005aa8] mb-4">
                Objectives
              </h1>
              <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Uniting the solar industry and driving sustainable energy
                adoption across Maharashtra
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-xl p-6 border-l-4 border-[#ed6605] transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="shrink-0 w-12 h-12 bg-[#005aa8] rounded-lg flex items-center justify-center text-white">
                      {objective.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {objective.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 2: Director Responsibilities */}
          <motion.section className="bg-white rounded-2xl p-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ed6605] rounded-2xl text-white mb-4">
                <FaUserTie className="text-2xl" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#005aa8] mb-4">
                Duties and Responsibilities of Directors
              </h1>
              <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Leadership commitments for driving MASMA's growth and member
                services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directorResponsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg border-l-4 border-[#ed6605] "
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <div className="shrink-0 w-10 h-10 bg-[#005aa8] rounded-lg flex items-center justify-center text-white mt-1">
                    {responsibility.icon}
                  </div>
                  <p className="text-gray-700 font-medium">
                    {responsibility.task}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: Ethical Standards */}
          <motion.section
            className="bg-white rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ed6605] rounded-2xl text-white mb-4">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#005aa8] mb-4">
                Ethical Standards
              </h1>
              <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Commitment to integrity, transparency, and quality in all our
                endeavors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ethicalStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-100 rounded-xl border-l-4 border-[#ed6605]"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#005aa8] rounded-2xl text-white mb-4">
                    {standard.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {standard.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {standard.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default OurObjective;
