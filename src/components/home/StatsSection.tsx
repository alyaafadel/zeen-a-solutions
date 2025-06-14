
import { Briefcase, Users, Shield, Heart } from "lucide-react";
import EnhancedIcon from "@/components/ui/enhanced-icon";

const StatsSection = () => {
  const stats = [
    { icon: Briefcase, number: "250+", label: "مشروع مكتمل", color: "text-white" },
    { icon: Users, number: "120+", label: "عميل راضٍ", color: "text-white" },
    { icon: Shield, number: "8+", label: "سنوات خبرة", color: "text-white" },
    { icon: Heart, number: "24/7", label: "دعم مستمر", color: "text-white" }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-transparent to-brand-accent-blue/10"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg mb-8">
            <span className="text-2xl font-bold text-white">📊</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            إنجازاتنا بالأرقام
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            نفخر بالثقة التي منحتموها لنا وبالنتائج التي حققناها معاً
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container */}
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-xl border border-white/10">
                <EnhancedIcon
                  icon={stat.icon}
                  size="xl"
                  variant="interactive"
                  className="text-white"
                  ariaLabel={`أيقونة ${stat.label}`}
                  title={stat.label}
                  animate={true}
                />
              </div>
              
              {/* Number */}
              <div className="text-5xl lg:text-6xl font-bold mb-4 text-white group-hover:text-brand-light-blue transition-colors duration-300">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-lg lg:text-xl text-white/90 group-hover:text-white transition-colors duration-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default StatsSection;
