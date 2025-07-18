import React from "react";

export default function WhyChooseUs({ features }) {
  const defaultFeatures = [
    {
      icon: "🎯",
      title: "6-Month Brand Transformation",
      description:
        "We don't just create logos—we architect complete brand ecosystems that increase recognition by 300% and drive measurable market differentiation.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: "⚡",
      title: "Revenue-First Marketing",
      description:
        "Our performance campaigns average 4.2x ROAS across industries. We optimize for actual sales, not vanity metrics like impressions.",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: "🔥",
      title: "Conversion-Engineered Websites",
      description:
        "Every pixel serves a purpose. Our websites convert 67% better than industry standard through psychological design principles and A/B tested user flows.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: "📈",
      title: "Viral Content Strategy",
      description:
        "Our reels consistently hit 100K+ views. We decode platform algorithms and create thumb-stopping content that builds genuine audiences, not just followers.",
      color: "from-pink-400 to-rose-500",
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="py-24 bg-gradient-to-b from-[#C848C1] to-[#54A6F9] rounded-4xl text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 mb-2">
            <span className="text-white font-medium">Results That Matter</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
            Why We're <span className="logo">Different</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-extralight">
            While others make promises, we deliver measurable transformations.
            Here's why industry leaders choose us over the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white bg-gradent-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl border flex items-center justify-center ">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-black ">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-black text-base leading-relaxed mb-4 ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
