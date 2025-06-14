
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-pattern-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-dark mb-6 sm:mb-8">لماذا نحن الخيار الأمثل؟</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
            نتميز بعناصر أساسية تجعلنا الشريك المثالي لتحقيق أهدافكم بأعلى جودة وكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center px-6 sm:px-8">
              <div className={`w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 ${feature.gradientClass} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-8 sm:mb-10 md:mb-12 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-6 sm:mb-8">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4 mb-8 sm:mb-10">
                {feature.description}
              </p>
              
              {/* شريط تزييني */}
              <div className={`w-20 sm:w-24 h-1 ${feature.gradientClass} rounded-full mx-auto group-hover:w-28 sm:group-hover:w-36 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
