
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
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-dark mb-4 sm:mb-6">لماذا نحن الخيار الأمثل؟</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
            نتميز بعناصر أساسية تجعلنا الشريك المثالي لتحقيق أهدافكم بأعلى جودة وكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="group text-center px-4">
              <div className={`w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 ${feature.gradientClass} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-4 sm:mb-6">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4">
                {feature.description}
              </p>
              
              {/* شريط تزييني */}
              <div className={`w-16 sm:w-20 h-1 ${feature.gradientClass} rounded-full mx-auto mt-6 sm:mt-8 group-hover:w-24 sm:group-hover:w-32 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
