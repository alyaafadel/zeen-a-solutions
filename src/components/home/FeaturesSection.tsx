
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
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-pattern-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20 sm:mb-24 md:mb-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-dark mb-8 sm:mb-10">لماذا نحن الخيار الأمثل؟</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
            نتميز بعناصر أساسية تجعلنا الشريك المثالي لتحقيق أهدافكم بأعلى جودة وكفاءة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          {features.map((feature, index) => (
            <div key={index} className="group text-center px-8 sm:px-10">
              <div className={`w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 ${feature.gradientClass} rounded-3xl sm:rounded-4xl flex items-center justify-center mx-auto mb-10 sm:mb-12 md:mb-14 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-8 sm:mb-10">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4 mb-10 sm:mb-12">
                {feature.description}
              </p>
              
              {/* شريط تزييني */}
              <div className={`w-24 sm:w-28 h-1 ${feature.gradientClass} rounded-full mx-auto group-hover:w-32 sm:group-hover:w-40 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
