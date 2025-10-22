import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0] overflow-hidden">
      {/* Optional abstract wave/vector background for depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#e0e7ff"
            fillOpacity="0.3"
            d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,165.3C672,192,768,192,864,181.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content grid */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 z-10 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
        {/* Left: Image with rounded shape and shadow */}
        <div className="flex-1 flex justify-center">
          <div className="relative rounded-3xl shadow-xl bg-white bg-opacity-50 backdrop-blur-lg p-4 w-full max-w-md md:max-w-lg">
            {/* Replace with actual image */}
            <img
              src="/aboutimage.png"
              alt="Diverse students collaborating around a laptop"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Right: Text content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Empowering Education Through Innovation
            </h2>
            {/* Paragraph */}
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
              Our mission is to simplify school operations, enhance student
              engagement, and bring digital transformation to every classroom.
              We believe learning should be smart, accessible, and connected.
            </p>
            {/* Call-to-action Button */}
            <a
              href="#learn-more"
              className="inline-block mt-6 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Explore Our Mission
            </a>
          </motion.div>
        </div>
      </div>

      {/* Optional: Minimal abstract wave or shape for depth */}
    </section>
  );
}
