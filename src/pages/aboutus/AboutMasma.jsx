import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import founder from "../../assets/image/founder.jpg";
import OurObjective from "./OurObjective";

const AboutMasma = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-100 pt-30 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={founder}
                alt="MASMA Association"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover rounded-2xl"
              />

              {/* Overlay for better text readability on small screens */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl lg:hidden"></div>
            </div>

            {/* Years Badge - Responsive positioning */}
            <div className="absolute -bottom-4 left-0 right-0 mx-auto lg:mx-0 lg:-bottom-6 lg:right-0 lg:left-auto bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 max-w-[280px] lg:max-w-none">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#005aa8] leading-tight">
                  Mr. Shashikant Wakade
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#ed6605] mt-1">
                  President
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            ref={ref}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#005aa8] leading-tight">
                Welcome To Our Association
              </h2>
              <div className="w-16 h-1 bg-[#ed6605] rounded-full mx-auto lg:mx-0 mt-3 mb-4"></div>
            </div>

            {/* President's Message Section */}
            <div className="backdrop-blur-sm rounded-xl p-4 md:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#ed6605] mb-3">
                President's Message
              </h3>
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  I am honored to be the incoming President of MASMA and I want
                  to acknowledge the leadership and support provided by our
                  board members and past presidents. I am excited to welcome the
                  new board directors, new and renewing members. There is a
                  definite common urge to see advancements in solar energy's
                  future. MASMA is the right vehicle to add fuel to this while
                  delivering value to each and every member.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  I'm proud of MASMA successes over years, particularly in
                  providing more opportunities for our members. In the year
                  ahead, we will continue these initiatives, as well as adding
                  furthermore training and awareness to promote solar energy,
                  aligning the interests of both solar promoters and consumers
                  to harness maximum solar energy and events held in
                  collaboration with other organizations and regional chapters.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  We can take this organization, which has come this far,
                  further by joining our forces and moving towards the same
                  goal. To overcome the challenges we face, we need to our
                  knowledge and act more organized. Everyone who contributes to
                  this sustainable sector should gather under the roof of the
                  MASMA. We would like to invite not only business, EPC who are
                  working in this field to be active members of MASMA but also
                  collaborations with different organizations working for
                  climate change.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                  All of the MASMA is focused on enriching your experience as
                  members, so if you have an idea, suggestion, or would like to
                  get involved, feel free to reach out to me, any of our board
                  members/leaders
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section for larger screens */}
        <motion.div
          className="hidden lg:block mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-2xl font-bold text-[#005aa8] mb-2">20+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-2xl font-bold text-[#005aa8] mb-2">500+</div>
              <div className="text-gray-600">Member Companies</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-2xl font-bold text-[#005aa8] mb-2">
                1000+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Stats */}
        <motion.div
          className="lg:hidden grid grid-cols-3 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-lg font-bold text-[#005aa8]">20+</div>
            <div className="text-xs text-gray-600 mt-1">Years</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-lg font-bold text-[#005aa8]">500+</div>
            <div className="text-xs text-gray-600 mt-1">Members</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-lg font-bold text-[#005aa8]">1000+</div>
            <div className="text-xs text-gray-600 mt-1">Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMasma;
