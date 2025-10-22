import { featuresData } from "../context/featuresData";

export default function Features() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Optional: Subtle animated background or particles for more depth */}

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-600 tracking-tight uppercase">
          Innovative Features
        </h2>
        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-700">
          Elevate your educational experience with tools designed for a modern
          look.
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="relative bg-white bg-opacity-70 border border-gray-300 backdrop-blur-lg rounded-[1.75rem] p-8 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ minHeight: "350px" }}
            >
              {/* Icon with a soft gradient or neutral color */}
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 shadow-lg hover:scale-110 transition-transform duration-200">
                {/* Placeholder icon, replace with actual icons */}
                <span className="text-3xl font-semibold text-gray-700">
                  {index + 1}
                </span>
              </div>
              {/* Feature Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              {/* Feature Description */}
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Floating particles or abstract shapes matching the color palette */}
    </section>
  );
}
