import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserTie,
  FaUsers,
  FaCrown,
  FaUserShield,
  FaUserGraduate,
} from "react-icons/fa";

import noimg from "../../assets/religional/noimg.png";
import atul from "../../assets/religional/Atul-Honole.jpg";
import manisha from "../../assets/religional/Manisha-Barbind.jpg";
import narendra from "../../assets/religional/Narendra-Pawar.jpg";
import vijay from "../../assets/religional/Vijay-Wani.jpg";
import vinod from "../../assets/religional/Vinod-Suryavanshi.jpg";

const ReligionalChap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamCategories = [
    {
      id: 1,
      title: "West Maharastra",
      icon: <FaUserTie className="text-2xl" />,
      members: [
        {
          name: "Mr. Vinod Suryavanshi",
          position: "",
          image: vinod,
        },
        {
          name: "Mr. Pradeep Khade",
          position: "",
          image: noimg,
        },
        {
          name: "Mr. Atul Honole",
          position: "",
          image: atul,
        },
        {
          name: "Ms. Vaibhavi Vivek Kop",
          position: "",
          image: noimg,
        },
      ],
    },
    {
      id: 2,
      title: "North Maharasta",
      icon: <FaUserShield className="text-2xl" />,
      members: [
        {
          name: "Mr. Arun Singavi",
          position: "",
          image: noimg,
        },
        {
          name: "Mr. Vijay Patil",
          position: "",
          image: noimg,
        },
      ],
    },
    {
      id: 3,
      title: "Mumbai",
      icon: <FaCrown className="text-2xl" />,
      members: [
        {
          name: "Mr. Jagadish Hadap",
          position: "",
          image: noimg,
        },
        {
          name: "Mr. Vijay Vani",
          position: "",
          image: vijay,
        },
      ],
    },
    {
      id: 4,
      title: "Pune",
      icon: <FaUsers className="text-2xl" />,
      members: [
        {
          name: "Mr. Rajendra Panchal",
          position: "",
          image: noimg,
        },
        {
          name: "Mr. Akshay Panchal",
          position: "",
          image: noimg,
        },
        {
          name: "Mr. Ashish Mule",
          position: "",
          image: noimg,
        },
        {
          name: "Mr. Narendra Pawar",
          position: "",
          image: narendra,
        },
        {
          name: "Mr. Sahaj Mutha",
          position: "",
          image: noimg,
        },
      ],
    },
    {
      id: 5,
      title: "Maharastra",
      icon: <FaUserGraduate className="text-2xl" />,
      members: [
        {
          name: "Ms. Manisha Barbind",
          position: "",
          image: manisha,
        },
        {
          name: "Mr. Subhash Chandane",
          position: "",
          image: noimg,
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 pt-40">
      <div className="container mx-auto max-w-7xl">
        {/* Main Header */}
        <motion.div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Directors
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals driving MASMA's mission forward
            with expertise and commitment
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {teamCategories.map((category, categoryIndex) => (
            <motion.section key={category.id} className=" p-8">
              {/* Category Header */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-3xl font-bold text-[#ed6605]">
                      {category.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Team Members Row */}
              <div className="flex flex-wrap justify-center gap-8">
                {category.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    className="w-64 bg-white rounded-xl border border-gray-200"
                  >
                    {/* Member Image */}
                    <div className="h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ed6605] font-medium text-sm">
                        {member.position}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReligionalChap;
