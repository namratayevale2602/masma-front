import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFilePdf,
  FaExternalLinkAlt,
  FaDownload,
  FaFileAlt,
  FaClipboardList,
} from "react-icons/fa";

const Circulars = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const circularSections = [
    {
      id: 1,
      title: "Important Circular",
      subtitle: "Circulars",
      icon: <FaClipboardList className="text-2xl" />,
      items: [
        {
          id: 1,
          title: "Empanellment Procedure",
          type: "pdf",
          link: "/documents/empanellment-procedure.pdf",
          description:
            "Detailed procedure for empanellment of solar installers and vendors",
        },
        {
          id: 2,
          title: "MNRE 16.03.2023_PM Surya Ghar Muft Bijli Yojana",
          type: "pdf",
          link: "/documents/pm-surya-ghar-yojana.pdf",
          description:
            "PM Surya Ghar Muft Bijli Yojana scheme details and guidelines",
        },
      ],
    },
    {
      id: 2,
      title: "Important Documents",
      subtitle: "Procedures & Forms",
      icon: <FaFileAlt className="text-2xl" />,
      items: [
        {
          id: 1,
          title: "Timely processing of Rooftop RE application",
          type: "pdf",
          link: "/documents/timely-processing-rooftop-application.pdf",
          description:
            "Guidelines for timely processing of rooftop renewable energy applications",
        },
        {
          id: 2,
          title:
            "Procedure for Application for connectivity of Renewable Energy Generating System with MSEDCL's Network",
          type: "pdf",
          link: "/documents/connectivity-procedure.pdf",
          description:
            "Step-by-step procedure for connecting renewable energy systems to MSEDCL network",
        },
        {
          id: 3,
          title:
            "Application Form for installation of Renewable Energy Generating System under Net Metering Arrangement or Net Billing Arrangement",
          type: "pdf",
          link: "/documents/application-form-net-metering.pdf",
          description:
            "Official application form for net metering and net billing arrangements",
        },
        {
          id: 4,
          title: "Net Metering Connection Agreement",
          type: "pdf",
          link: "/documents/net-metering-agreement.pdf",
          description:
            "Standard agreement for net metering connections with distribution companies",
        },
        {
          id: 5,
          title: "Net Billing Connection Agreement",
          type: "pdf",
          link: "/documents/net-billing-agreement.pdf",
          description:
            "Standard agreement for net billing connections with distribution companies",
        },
        {
          id: 6,
          title:
            "Prior Intimation for Installation of Renewable Energy Generator behind the Consumer's Meter",
          type: "pdf",
          link: "/documents/prior-intimation-form.pdf",
          description:
            "Form for prior intimation of renewable energy generator installation",
        },
        {
          id: 7,
          title: "Commercial Circular-No.322",
          type: "pdf",
          link: "/documents/commercial-circular-322.pdf",
          description:
            "Commercial circular regarding renewable energy policies and regulations",
        },
      ],
    },
  ];

  const handleDocumentClick = (document) => {
    // Simulate document opening - in real implementation, this would open the actual PDF
    console.log(`Opening document: ${document.title}`);

    // For demo purposes, show an alert. In production, this would open the PDF
    alert(
      `Opening: ${document.title}\n\nThis would typically open the PDF document or redirect to the document viewer.`
    );

    // In actual implementation, you would use:
    // window.open(document.link, '_blank');
    // or
    // navigate to document viewer page
  };

  const handleDownload = (document, event) => {
    event.stopPropagation(); // Prevent triggering the document click
    console.log(`Downloading: ${document.title}`);

    // Simulate download - in real implementation, this would trigger actual download
    alert(`Downloading: ${document.title}`);

    // In actual implementation:
    // const link = document.createElement('a');
    // link.href = document.link;
    // link.download = document.title + '.pdf';
    // link.click();
  };

  const DocumentCard = ({ document, index }) => (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden group transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => handleDocumentClick(document)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4 flex-1">
            <div className="shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
              <FaFilePdf className="text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#005aa8] transition-colors line-clamp-2">
                {document.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {document.description}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={(e) => handleDownload(document, e)}
              className="p-2 text-gray-400 hover:text-[#ed6605] hover:bg-orange-50 rounded-lg transition-colors"
              title="Download Document"
            >
              <FaDownload />
            </button>
            <div className="text-gray-400 group-hover:text-[#005aa8] transition-colors">
              <FaExternalLinkAlt />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            PDF Document
          </span>
          <span className="text-sm text-gray-500">Click to open</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 pt-40 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Main Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
            Important Circulars & Documents
          </h1>
          <div className="w-24 h-1 bg-[#ed6605] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access important government circulars, application forms, and
            procedural documents for solar energy systems
          </p>
        </motion.div>

        {/* Circular Sections */}
        <div className="space-y-12">
          {circularSections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              className=" rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            >
              {/* Section Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="shrink-0 w-16 h-16 bg-linear-to-br from-[#005aa8] to-blue-600 rounded-2xl flex items-center justify-center text-white">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#005aa8]">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 mt-1">
                    {section.subtitle}
                  </p>
                  <div className="w-16 h-1 bg-[#ed6605] rounded-full mt-2"></div>
                </div>
              </div>

              {/* Documents Grid */}
              <div className="grid grid-cols-1 gap-6">
                {section.items.map((document, docIndex) => (
                  <DocumentCard
                    key={document.id}
                    document={document}
                    index={docIndex}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Circulars;
