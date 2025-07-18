import React, { useState } from "react";
import {
  FaFacebook,
  FaGlobe,
  FaPaintBrush,
  FaUsers,
  FaBullhorn,
  FaVideo,
  FaCheck,
  FaStar,
  FaArrowRight,
  FaInstagram,
  FaTiktok,
  FaChartLine,
} from "react-icons/fa";

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaPaintBrush className="text-5xl text-purple-600 mb-6" />,
      title: "Brand Identity Suite",
      subtitle: "Complete Visual Identity",
      price: "NPR 20,000",
      originalPrice: "NPR 25,000",
      period: "/package",
      description:
        "Build a memorable brand that stands out in the marketplace with our complete branding solution.",
      features: [
        "Logo design & variations",
        "Brand color palette",
        "Typography guidelines",
        "Business card design",
        "Brand guideline document",
        "Social media templates",
      ],
      featured: true,
      badge: "Best Value",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/25",
    },
    {
      icon: <FaFacebook className="text-5xl text-blue-600 mb-6" />,
      title: "Social Media Mastery",
      subtitle: "Complete Digital Presence",
      price: "NPR 15,000",
      originalPrice: "NPR 20,000",
      period: "/month",
      description:
        "Transform your social media presence with our comprehensive management across all major platforms.",
      features: [
        "Facebook, Instagram & TikTok management",
        "Content strategy & planning",
        "Engaging captions & hashtags",
        "Community management",
        "Analytics & reporting",
        "Competitor analysis",
      ],
      badge: "Most Popular",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
    },
    {
      icon: <FaGlobe className="text-5xl text-emerald-600 mb-6" />,
      title: "Web Excellence",
      subtitle: "Professional Online Presence",
      price: "NPR 30,000",
      originalPrice: "NPR 40,000",
      period: "/project",
      description:
        "Get a stunning, high-performance website that converts visitors into customers.",
      features: [
        "Responsive design for all devices",
        "SEO optimization included",
        "Speed optimization",
        "6 months free maintenance",
        "Content management system",
        "SSL certificate & security",
      ],
      badge: "Premium",
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "shadow-emerald-500/25",
    },

    {
      icon: <FaUsers className="text-5xl text-rose-600 mb-6" />,
      title: "Content & Growth",
      subtitle: "Viral Content Creation",
      price: "NPR 10,000",
      originalPrice: "NPR 15,000",
      period: "/month",
      description:
        "Create viral content that engages your audience and drives massive growth.",
      features: [
        "High-quality post creation",
        "Reel & video production",
        "Viral campaign strategies",
        "Audience growth tactics",
        "Engagement optimization",
        "Trending content analysis",
      ],
      badge: "Trending",
      gradient: "from-rose-500 to-pink-500",
      shadowColor: "shadow-rose-500/25",
    },
    {
      icon: <FaBullhorn className="text-5xl text-amber-600 mb-6" />,
      title: "Ads That Convert",
      subtitle: "ROI-Focused Advertising",
      price: "NPR 10",
      originalPrice: "",
      period: "/USD managed",
      description:
        "Maximize your advertising ROI with our expert campaign management and optimization.",
      features: [
        "Facebook & Instagram ads",
        "Campaign strategy & setup",
        "A/B testing & optimization",
        "Detailed performance reports",
        "Audience targeting",
        "Budget optimization",
      ],
      badge: "Performance",
      gradient: "from-amber-500 to-orange-500",
      shadowColor: "shadow-amber-500/25",
    },
    {
      icon: <FaVideo className="text-5xl text-red-600 mb-6" />,
      title: "Influencer Connect",
      subtitle: "Creator Collaborations",
      price: "Custom",
      originalPrice: "",
      period: "/project",
      description:
        "Partner with the right influencers to amplify your brand reach and credibility.",
      features: [
        "Influencer research & outreach",
        "Campaign planning & execution",
        "Content collaboration",
        "Performance tracking",
        "Relationship management",
        "ROI measurement",
      ],
      badge: "Custom",
      gradient: "from-red-500 to-pink-500",
      shadowColor: "shadow-red-500/25",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
            Pricing That
            <span className="bg-gradient-to-b from-[#C848C1] to-[#54A6F9] bg-clip-text text-transparent">
              {" "}
              Delivers Results
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose the perfect package to elevate your brand and dominate your
            market. Every service is designed to deliver measurable results and
            exceptional ROI.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group ${
                service.featured ? "xl:scale-105 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ {service.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative bg-white rounded-3xl p-8 h-full transition-all duration-500 ${
                  service.shadowColor
                } ${
                  hoveredIndex === index
                    ? "shadow-2xl -translate-y-2"
                    : "shadow-lg"
                } border border-gray-100 flex flex-col`}
              >
                {/* Top Badge */}
                {!service.featured && (
                  <div className="absolute -top-2 -right-2">
                    <div
                      className={`bg-gradient-to-r ${service.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}
                    >
                      {service.badge}
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="text-center mb-6">{service.icon}</div>

                {/* Title & Subtitle */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-black text-gray-900">
                      {service.price}
                    </span>
                    <span className="text-gray-500 ml-1">{service.period}</span>
                  </div>
                  {service.originalPrice && (
                    <div className="text-gray-400 line-through text-sm">
                      {service.originalPrice}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl flex items-center justify-center`}
                  >
                    Get Started Now
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ satisfied clients who've grown their business with our
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <FaChartLine className="mr-2" />
              View Our Results
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
