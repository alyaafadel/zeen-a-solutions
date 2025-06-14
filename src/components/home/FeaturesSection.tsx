
import { Zap, Shield, Heart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "سرعة في التنفيذ",
      description: "نضمن سرعة وكفاءة في إنجاز المهام وتسليم المشاريع ضمن الجداول الزمنية المحددة، دون المساومة على الجودة.",
      gradientClass: "bg-gradient-purple"
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "نلتزم بأعلى معايير الجودة العالمية في جميع خدماتنا ومشاريعنا، مع ضمان شامل للنتائج التي تفوق توقعاتكم.",
      gradientClass: "bg-gradient-purple-emerald"
    },
    {
      icon: Heart,
      title: "دعم مستمر",
      description: "فريق دعم متخصص ومتاح لضمان استمرارية أعمالكم وتقديم المساعدة الفورية عند الحاجة، لضمان رضاكم التام ونجاح مشاريعكم.",
      gradientClass: "bg-gradient-blue-purple"
    }
  ];

  return (
    <section className="py-20 bg-pattern-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">لماذا نحن الخيار الأمثل؟</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            نتميز بعناصر أساسية تجعلنا الشريك المثالي لتحقيق أهدافكم بأعلى جودة وكفاءة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className={`w-20 h-20 ${feature.gradientClass} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 group-hover:text-brand-purple transition-colors duration-300 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed px-4">
                {feature.description}
              </p>
              
              {/* شريط تزييني */}
              <div className={`w-16 h-1 ${feature.gradientClass} rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
