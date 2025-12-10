import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserTie,
  FaUsers,
  FaCrown,
  FaUserShield,
  FaUserGraduate,
} from "react-icons/fa";

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
          name: "Rajesh Sharma",
          position: "President",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Priya Patel",
          position: "Vice President",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Amit Kumar",
          position: "Secretary",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Sunita Reddy",
          position: "Treasurer",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      id: 2,
      title: "North Maharasta",
      icon: <FaUserShield className="text-2xl" />,
      members: [
        {
          name: "Vikram Singh",
          position: "Trust Member",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Neha Gupta",
          position: "Trust Member",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Rahul Mehta",
          position: "Trust Member",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Anjali Joshi",
          position: "Trust Member",
          image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      id: 3,
      title: "Mumbai",
      icon: <FaCrown className="text-2xl" />,
      members: [
        {
          name: "Dr. Suresh Kapoor",
          position: "Founder & Ex-President",
          image:
            "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Mr. Ramesh Iyer",
          position: "Ex-President",
          image:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Mrs. Lata Desai",
          position: "Founder Member",
          image:
            "https://images.unsplash.com/photo-1551836026-d5c88ac5c4e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Mr. Prakash Rao",
          position: "Founder Member",
          image:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      id: 4,
      title: "Pune",
      icon: <FaUsers className="text-2xl" />,
      members: [
        {
          name: "Sanjay Malhotra",
          position: "Director",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Meera Chatterjee",
          position: "Director",
          image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Arun Verma",
          position: "Director",
          image:
            "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Kavita Nair",
          position: "Director",
          image:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Deepak Choudhary",
          position: "Director",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Pooja Mehta",
          position: "Director",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      id: 5,
      title: "Maharastra",
      icon: <FaUserGraduate className="text-2xl" />,
      members: [
        {
          name: "Prof. Anil Deshmukh",
          position: "Technical Advisor",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Dr. Nandini Roy",
          position: "Policy Advisor",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
          name: "Mr. Sameer Khan",
          position: "Financial Advisor",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
