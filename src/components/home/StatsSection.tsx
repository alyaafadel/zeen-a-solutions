
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
    <section className="py-20 md:py-32 bg-gradient-to-r from-neutral-800 to-neutral-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">إنجازاتنا بالأرقام</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            نفخر بالثقة التي منحتموها لنا وبالنتائج التي حققناها معاً
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
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
              <div className="text-4xl md:text-5xl font-bold mb-3 text-white group-hover:text-brand-light-blue transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
