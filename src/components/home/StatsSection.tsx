
import { Briefcase, Users, Shield, Heart } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Briefcase, number: "250+", label: "مشروع مكتمل", color: "blue" },
    { icon: Users, number: "120+", label: "عميل راضٍ", color: "purple" },
    { icon: Shield, number: "8+", label: "سنوات خبرة", color: "indigo" },
    { icon: Heart, number: "24/7", label: "دعم مستمر", color: "pink" }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600", 
    indigo: "from-indigo-500 to-indigo-600",
    pink: "from-pink-500 to-pink-600"
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            📊 إنجازاتنا بالأرقام
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            نفخر بالثقة التي منحتموها لنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            إنجازات حقيقية ونتائج ملموسة حققناها معاً عبر رحلة طويلة من الشراكة والتميز
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon Container */}
                <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${colorClasses[stat.color]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                
                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
