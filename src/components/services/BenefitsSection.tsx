
import { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

const BenefitsSection = ({ title, benefits }: BenefitsSectionProps) => {
  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-sky-700 mb-2">{benefit.title}</h4>
              <p className="text-sky-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
