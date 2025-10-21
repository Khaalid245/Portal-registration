import { featuresData } from "../context/FeaturesData";

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Dynamic animated background with flowing shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
          {/* Animated SVG shapes for a futuristic flowing background */}
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 720"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2" />
                <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,720 C480,600 960,840 1440,720 L1440,0 L0,0 Z"
              fill="url(#grad)"
            />
            <path
              d="M0,720 C300,800 900,500 1440,720 L1440,0 L0,0 Z"
              fill="url(#grad)"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Container for content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          data-sr="fade-up"
        >
          Our Smart Features
        </h2>
        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-16 px-4"
          data-sr="fade-up"
          data-sr-delay="100"
        >
          Experience a modern student management system designed for simplicity,
          flexibility, and speed.
        </p>

        {/* Features Grid with animated cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="relative bg-white/10 backdrop-blur-md rounded-[2rem] p-8 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
              style={{ minHeight: "350px" }}
              data-sr="fade-up"
              data-sr-delay={index * 150}
            >
              {/* Interactive icon with glow and hover effect */}
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg hover:scale-110 transition-transform duration-200">
                {/* Placeholder for icon or number */}
                <span className="text-white text-2xl font-bold">
                  {index + 1}
                </span>
              </div>
              {/* Feature Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              {/* Feature Description */}
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle floating animated particles for a sense of motion */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute top-${Math.random() * 80 + 10}% left-${
              Math.random() * 80 + 10
            }% w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20 animate-floating`}
            style={{
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
