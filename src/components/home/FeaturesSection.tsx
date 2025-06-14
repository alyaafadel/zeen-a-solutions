
import { Zap, Shield, Heart } from "lucide-react";

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

        {/* Mobile-First Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          {features.map((feature, index) => (
            <div key={index} className="group text-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-brand-light-blue/30 hover:border-brand-blue/40">
              {/* Responsive Icon Container */}
              <div className={`w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 ${feature.gradientClass} rounded-2xl sm:rounded-3xl lg:rounded-4xl flex items-center justify-center mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-white" />
              </div>
              
              {/* Responsive Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">
                {feature.title}
              </h3>
              
              {/* Responsive Description with Better Line Height */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 line-height-mobile min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center">
                {feature.description}
              </p>
              
              {/* Decorative Bar */}
              <div className={`w-16 sm:w-20 md:w-24 lg:w-28 h-1 ${feature.gradientClass} rounded-full mx-auto group-hover:w-24 sm:group-hover:w-28 md:group-hover:w-32 lg:group-hover:w-40 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
