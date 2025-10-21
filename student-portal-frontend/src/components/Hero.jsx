import React from "react";

const Hero = () => {
  return (
    // Slightly more compact section padding for a "smaller" feel
    <section className="py-20 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
        {" "}
        {/* max-w-6xl for a slightly more contained layout */}
        {/* Left Side: Text and Call-to-Action - Enhanced for prominence */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left animate-fadeInLeft z-10">
          {" "}
          {/* z-10 to ensure text overlays nicely */}
          {/* Main Heading with a fresh, impactful gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
            Unlock Your Potential with{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 pb-1">
              Student Portal
            </span>
          </h1>
          {/* Subheading/Description with refined styling and emphasis */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 pt-2 font-light leading-relaxed">
            **Seamlessly manage** your academic journey — from **intelligent
            dashboards** to instant record access, all designed for **modern
            education**.
          </p>
          {/* Call-to-Action Buttons - Slightly bolder appearance */}
          <div className="flex justify-center md:justify-start gap-4 pt-6">
            <a
              href="#get-started"
              className="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full shadow-xl hover:bg-blue-700 transition transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-60 text-lg"
              aria-label="Navigate to the Get Started section"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition transform hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-60 text-lg"
              aria-label="Navigate to the Learn More section"
            >
              Discover More &rarr;
            </a>
          </div>
        </div>
        {/* Right Side: Image with adjusted size and effects */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 animate-fadeInRight relative">
          <img
            src="/heroimage.png"
            alt="Young professional smiling confidently, representing the Student Portal's modern interface"
            // Smaller max-w for the image, focused, and maintaining good aspect ratio
            className="w-full max-w-sm lg:max-w-md h-auto object-contain rounded-full shadow-2xl transition-transform duration-700 hover:scale-105 z-0 transform translate-x-4 md:translate-x-8" // Added translate-x for subtle offset
            loading="eager"
          />
          {/* Subtle blurred background element behind the image */}
          <div className="absolute inset-0 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
