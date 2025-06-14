
import { Zap, Shield, Heart } from "lucide-react";
import EnhancedIcon from "@/components/ui/enhanced-icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "سرعة في التنفيذ",
      description: "نضمن سرعة وكفاءة في إنجاز المهام وتسليم المشاريع ضمن الجداول الزمنية المحددة، دون المساومة على الجودة.",
      gradientClass: "bg-gradient-blue"
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "نلتزم بأعلى معايير الجودة العالمية في جميع خدماتنا ومشاريعنا، مع ضمان شامل للنتائج التي تفوق توقعاتكم.",
      gradientClass: "bg-gradient-blue-light"
    },
    {
      icon: Heart,
      title: "دعم مستمر",
      description: "فريق دعم متخصص ومتاح لضمان استمرارية أعمالكم وتقديم المساعدة الفورية عند الحاجة، لضمان رضاكم التام ونجاح مشاريعكم.",
      gradientClass: "bg-gradient-dark-blue"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-pattern-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-blue-dark mb-6 sm:mb-8 md:mb-10 leading-tight">لماذا نحن الخيار الأمثل؟</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2 line-height-mobile">
            نتميز بعناصر أساسية تجعلنا الشريك المثالي لتحقيق أهدافكم بأعلى جودة وكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center px-4 sm:px-6 py-6 sm:py-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-brand-light-blue/30 hover:border-brand-blue/40">
              <div className={`w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 ${feature.gradientClass} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                <EnhancedIcon
                  icon={feature.icon}
                  size="xl"
                  variant="gradient"
                  className="text-white"
                  ariaLabel={`أيقونة ${feature.title}`}
                  title={feature.title}
                  animate={true}
                />
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-4 sm:mb-6 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-2 mb-6 sm:mb-8 line-height-mobile min-h-[100px] sm:min-h-[120px] flex items-center">
                {feature.description}
              </p>
              
              <div className={`w-12 sm:w-16 md:w-20 h-1 ${feature.gradientClass} rounded-full mx-auto group-hover:w-16 sm:group-hover:w-20 md:group-hover:w-24 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
