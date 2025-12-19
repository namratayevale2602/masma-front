import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserTie,
  FaUsers,
  FaCrown,
  FaUserShield,
  FaUserGraduate,
} from "react-icons/fa";

import chandramohan from "../../assets/apex-body/chandramohan.jpg";
import mangal from "../../assets/apex-body/mangal.jpg";
import pradeep from "../../assets/apex-body/Mr.-Pradeep-Kulkarni.jpg";
import rajesh from "../../assets/apex-body/Mr.-Rajesh-Mutha.jpg";
import mukund from "../../assets/apex-body/mukund.jpg";
import nitin from "../../assets/apex-body/Nitin-Kulkarni.jpg";
import rohan from "../../assets/apex-body/Rohan-Upasni.jpg";
import samir from "../../assets/apex-body/samir.jpg";
import sanjau from "../../assets/apex-body/sanjau-kulkanri.jpg";
import sanjay from "../../assets/apex-body/sanjay-deshmukh.jpg";
import shashikant from "../../assets/apex-body/shashikant.jpg";
import suhas from "../../assets/apex-body/suhas-gjotikar.png";
import sushil from "../../assets/apex-body/sushil-pungalia.jpg";
import noimg from "../../assets/apex-body/no-img.png";

const CompactTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const teamCategories = [
    {
      id: 1,
      title: "Leadership",
      icon: <FaUserTie className="text-2xl" />,
      members: [
        {
          name: "Mr. Shashikant Wakade",
          position: "President",
          image: shashikant,
        },
        {
          name: "Mr. Mayur Pande",
          position: "Secretory",
          image: noimg,
        },
        {
          name: "Mr. Samir Gandhi",
          position: "Secretory",
          image: samir,
        },
      ],
    },
    {
      id: 2,
      title: "Trusty Members",
      icon: <FaUserShield className="text-2xl" />,
      members: [
        {
          name: "",
          position: "Trust Member",
          image: noimg,
        },
        {
          name: "",
          position: "Trust Member",
          image: noimg,
        },
        {
          name: "",
          position: "Trust Member",
          image: noimg,
        },
        {
          name: "",
          position: "Trust Member",
          image: noimg,
        },
      ],
    },
    {
      id: 3,
      title: "Ex. Presidents & Founder Members",
      icon: <FaCrown className="text-2xl" />,
      members: [
        {
          name: "Mr. Wagh",
          position: "Founder & Ex-President",
          image: noimg,
        },
        {
          name: "Mr. Sushil Pungalia",
          position: "Ex-President",
          image: sushil,
        },
        {
          name: "Mr. Suhas Ghotikar",
          position: "Founder Member",
          image: suhas,
        },
        {
          name: "Mr. Chandramohan Kaushal",
          position: "Founder Member",
          image: chandramohan,
        },
        {
          name: "Mr. Mangal Akole",
          position: "Founder Member",
          image: mangal,
        },
        {
          name: "Mr. Mukund Kamlakar",
          position: "Founder Member",
          image: mukund,
        },
        {
          name: "Mr. Sanjay Deshmukh",
          position: "Founder Member",
          image: sanjau,
        },
        {
          name: "Mr. Sanjay Kulkarni",
          position: "Founder Member",
          image: sanjay,
        },
        {
          name: "Mr. Pradeep Kulkarni",
          position: "Founder Member",
          image: pradeep,
        },
        {
          name: "Mr. Rajesh Mutha",
          position: "Founder Member",
          image: rajesh,
        },
        {
          name: "Mr. Rohan Upasani",
          position: "Founder Member",
          image: rohan,
        },
      ],
    },
    {
      id: 4,
      title: "Board of Directors",
      icon: <FaUsers className="text-2xl" />,
      members: [
        {
          name: "Mr. Nitin Kulkarni",
          position: "Director",
          image: nitin,
        },
        {
          name: "Mr. Vishal Kumbhardare",
          position: "Director",
          image: noimg,
        },
        {
          name: "Mr.Pratik Pokharkar",
          position: "Director",
          image: noimg,
        },
        {
          name: "Mr. Bharthesh Dhuli",
          position: "Director",
          image: noimg,
        },
      ],
    },
    {
      id: 5,
      title: "Special Advisors",
      icon: <FaUserGraduate className="text-2xl" />,
      members: [
        {
          name: "",
          position: "Technical Advisor",
          image: noimg,
        },
        {
          name: "",
          position: "Policy Advisor",
          image: noimg,
        },
        {
          name: "",
          position: "Financial Advisor",
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
            Our Team
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
