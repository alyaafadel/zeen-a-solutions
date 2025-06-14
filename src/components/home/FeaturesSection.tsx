
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
    <section className="py-24 bg-pattern-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-6">لماذا نحن الخيار الأمثل؟</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            نتميز بعناصر أساسية تجعلنا الشريك المثالي لتحقيق أهدافكم بأعلى جودة وكفاءة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className={`w-24 h-24 ${feature.gradientClass} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-6">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed px-4">
                {feature.description}
              </p>
              
              {/* شريط تزييني */}
              <div className={`w-20 h-1 ${feature.gradientClass} rounded-full mx-auto mt-8 group-hover:w-32 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
