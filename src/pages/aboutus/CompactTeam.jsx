import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserTie,
  FaUsers,
  FaCrown,
  FaUserShield,
  FaUserGraduate,
} from "react-icons/fa";

import {
  AmitKulkarni,
  PradipKhade,
  SahajMuta,
  ChinmayKulkani,
  ShashikantWakde,
  ManishaBirbind,
  BharteshDhooli,
  RiyaMahajani,
  VaibhaviKop,
  NarendraPawar,
  AtulHonole,
  DyaneshDeshpande,
  ShrinidhiN,
  AkshayWakade,
  SurajDoke,
} from "../../assets/index";

const CompactTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamCategories = [
    {
      id: 1,
      title: "Public Relations Committee",
      icon: <FaUserTie className="text-2xl" />,
      members: [
        {
          name: "Mr. Amit Kulkarni",
          city: "Nashik",
          position: "President",
          image: AmitKulkarni,
        },
        {
          name: "Mr. Pradip Khade",
          city: "Kolhapur",
          position: "Voice President",
          image: PradipKhade,
        },
        {
          name: "Mr. Sahaj Mutha",
          city: "Pune",
          position: "Secretary",
          image: SahajMuta,
        },
        {
          name: "Mr. Chinmay Kulkarni",
          city: "Pune",
          position: "Treasurer",
          image: ChinmayKulkani,
        },
        {
          name: "Mr. Shashikant Wakade",
          city: "Pune",
          position: "Imm. Past President",
          image: ShashikantWakde,
        },
        {
          name: "Mr. Manisha Barbind",
          city: "Ch.SambhajiNagar",
          position: "Director",
          image: ManishaBirbind,
        },
        {
          name: "Mr. Bhartesh Dhooli",
          city: "Pune",
          position: "Director",
          image: BharteshDhooli,
        },
      ],
    },
    {
      id: 2,
      title: "Women Entrepreneur's Committee",
      icon: <FaUserShield className="text-2xl" />,
      members: [
        {
          name: "Riya Mahajani",
          city: "Pune",
          position: "Committee head",
          image: RiyaMahajani,
        },
        {
          name: "Vaibhavi Kop",
          city: "Kolhapur",
          position: "Committee Member",
          image: VaibhaviKop,
        },
      ],
    },
    {
      id: 3,
      title: "Legal Committee",
      icon: <FaCrown className="text-2xl" />,
      members: [
        {
          name: "Mr. Narendra Pawar",
          city: "pune",
          position: "Committee Head",
          image: NarendraPawar,
        },
      ],
    },
    {
      id: 4,
      title: "Membership Committee",
      icon: <FaUsers className="text-2xl" />,
      members: [
        {
          name: "Mr. Atul Honole",
          city: "Kolhapur",
          position: "Committee Head",
          image: AtulHonole,
        },
        {
          name: "Mr. Dnyanesh Deshpande",
          city: "Nashik",
          position: "Committee Member",
          image: DyaneshDeshpande,
        },
      ],
    },
    {
      id: 5,
      title: "Young Entrepreneur's Committee",
      icon: <FaUserGraduate className="text-2xl" />,
      members: [
        {
          name: "Mr. Shrinidhi N Kulkarni",
          city: "Kolhapur",
          position: "Committee Head",
          image: ShrinidhiN,
        },
        {
          name: "Mr. Akshay Wakade",
          city: "Pune",
          position: "Committee Member",
          image: AkshayWakade,
        },
        {
          name: "Mr. Suraj Doke",
          city: "Solapur",
          position: "Committee Member",
          image: SurajDoke,
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 pt-40">
      <div className="container mx-auto max-w-7xl">
        {/* Main Header */}
        <motion.div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Various Committees
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
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
                        {member.city}
                      </p>
                      <p className="text-[#005aa8] font-medium text-sm">
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

export default CompactTeam;
