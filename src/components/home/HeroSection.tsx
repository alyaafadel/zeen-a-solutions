
import { useNavigate } from "react-router-dom";

interface CompanyInfo {
  whatsapp: string;
}

interface HeroSectionProps {
  companyInfo: CompanyInfo;
}

const HeroSection = ({ companyInfo }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue/30 via-brand-light-blue/10 to-brand-light-blue/20"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Improved Title with Better Typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-brand-blue-dark leading-tight">
            شركاؤكم الاستراتيجيون في تحقيق التميز والنمو
          </h1>
          
          {/* Improved Description with Better Spacing */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية تشمل الموارد البشرية، التطوير التقني، التسويق الرقمي، والتطوير المهني. نعمل كجزء لا يتجزأ من فريقكم، ملتزمين بتقديم خبرات متخصصة تضمن إنجاز مهامكم بأعلى معايير الجودة والاحترافية.
          </p>
        </div>
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 bg-brand-blue/20 rounded-full animate-pulse shadow-lg"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-16 h-16 bg-brand-accent-blue/20 rounded-full animate-pulse delay-75 shadow-lg"></div>
      <div className="hidden xl:block absolute top-32 right-20 w-14 h-14 bg-brand-blue-dark/20 rounded-full animate-pulse delay-150 shadow-lg"></div>
      <div className="hidden xl:block absolute bottom-32 left-20 w-12 h-12 bg-brand-blue/15 rounded-full animate-pulse delay-300 shadow-lg"></div>
    </section>
  );
};

export default HeroSection;
