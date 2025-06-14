
import { Briefcase, Users, Shield, Heart } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Briefcase, number: "250+", label: "مشروع مكتمل", color: "text-blue-500" },
    { icon: Users, number: "120+", label: "عميل راضٍ", color: "text-blue-500" },
    { icon: Shield, number: "8+", label: "سنوات خبرة", color: "text-blue-500" },
    { icon: Heart, number: "24/7", label: "دعم مستمر", color: "text-blue-500" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-600 to-slate-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
          <p className="text-lg opacity-90">نفخر بالثقة التي منحتموها لنا</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-slate-100">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
