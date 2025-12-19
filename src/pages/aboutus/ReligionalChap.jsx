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
  AbhijitVichare,
  ArunSingavi,
  OmkarKorgaokkar,
  SubhashChandane,
  SushilPetkar,
  GajananChinkar,
  GauravKulkarni,
  SwpnilVernekar,
  ShashikantJamdar,
  SandipDesale,
  GauravKapadnis,
  RajendraPanchal,
  GaneshSutar,
  DhanajiraoEkal,
  Dhairyashiljadhav,
} from "../../assets/index";

const ReligionalChap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamCategories = [
    {
      id: 1,
      title: "Regional Director",
      icon: <FaUserTie className="text-2xl" />,
      members: [
        {
          name: "Mr. Abhijit Vichare",
          city: "Kolhapur",
          position: "West Maharastra",
          image: AbhijitVichare,
        },
        {
          name: "Mr. Arun Singavi",
          city: "Nashik",
          position: "North Maharastra",
          image: ArunSingavi,
        },
      ],
    },
    {
      id: 3,
      title: "District Director",
      icon: <FaCrown className="text-2xl" />,
      members: [
        {
          name: "Mr. Omkar Korgaonkar",
          city: "Vengurla",
          position: "Sindhudurg",
          image: OmkarKorgaokkar,
        },
        {
          name: "Mr. Subhash Chandane",
          city: "Ch.SambhajiNagar",
          position: "Ch.SambhajiNagar",
          image: SubhashChandane,
        },
        {
          name: "Mr. Sushil Petkar",
          city: "Ratnagiri",
          position: "Ratnagiri",
          image: SushilPetkar,
        },
        {
          name: "Mr. Gajanan Chipkar",
          city: "Mumbai",
          position: "Mumbai+Thane+Raigad",
          image: GajananChinkar,
        },
        {
          name: "Mr. Gururaj Kulkarni",
          city: "Solapur",
          position: "Solapur",
          image: GauravKulkarni,
        },
        {
          name: "Mr. Swapnil Vernekar",
          city: "Solapur",
          position: "Solapur",
          image: SwpnilVernekar,
        },
        {
          name: "Mr. Shashikant Jamadar",
          city: "Solapur",
          position: "Solapur",
          image: ShashikantJamdar,
        },
        {
          name: "Mr. Sandip Desale",
          city: "Nashik",
          position: "Nashik",
          image: SandipDesale,
        },
        {
          name: "Mr. Gaurav Kapadnis",
          city: "Nashik",
          position: "Nashik",
          image: GauravKapadnis,
        },
        {
          name: "Mr. Rajendra Panchal",
          city: "Pune",
          position: "Pune",
          image: RajendraPanchal,
        },
        {
          name: "Mr. Ganesh Sutar",
          city: "Pune",
          position: "Pune",
          image: GaneshSutar,
        },
        {
          name: "Mr. Dhanajirao Ekal",
          city: "Kolhapur",
          position: "Kolhapur+Sangli",
          image: DhanajiraoEkal,
        },
        {
          name: "Mr. Dhairyashil Jadhav",
          city: "Kolhapur",
          position: "Kolhapur+Sangli",
          image: Dhairyashiljadhav,
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
            Directors
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
                      <p className="text-[#005aa8] font-medium text-sm">
                        {member.city}
                      </p>
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
