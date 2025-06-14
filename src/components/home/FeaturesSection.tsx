
import { Zap, Shield, Heart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "سرعة في التنفيذ",
      description: "نضمن سرعة وكفاءة في إنجاز المهام وتسليم المشاريع ضمن الجداول الزمنية المحددة، دون المساومة على الجودة."
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "نلتزم بأعلى معايير الجودة العالمية في جميع خدماتنا ومشاريعنا، مع ضمان شامل للنتائج التي تفوق توقعاتكم."
    },
    {
      icon: Heart,
      title: "دعم مستمر",
      description: "فريق دعم متخصص ومتاح لضمان استمرارية أعمالكم وتقديم المساعدة الفورية عند الحاجة، لضمان رضاكم التام ونجاح مشاريعكم."
    }
  ];

  return (
    <section className="py-16 bg-white/70">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
