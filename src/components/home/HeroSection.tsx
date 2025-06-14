
import { Button } from "@/components/ui/button";
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
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue/30 via-brand-light-blue/10 to-brand-light-blue/20"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Title with Better Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 sm:mb-12 md:mb-16 text-brand-blue-dark leading-tight tracking-tight">
            شركاؤكم الاستراتيجيون في تحقيق التميز والنمو
          </h1>
          
          {/* Enhanced Description with Better Spacing */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 sm:mb-16 md:mb-20 leading-relaxed max-w-5xl mx-auto font-medium">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية تشمل الموارد البشرية، التطوير التقني، التسويق الرقمي، والتطوير المهني. نعمل كجزء لا يتجزأ من فريقكم، ملتزمين بتقديم خبرات متخصصة تضمن إنجاز مهامكم بأعلى معايير الجودة والاحترافية.
          </p>
          
          {/* Enhanced Single Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/about')}
              className="px-10 sm:px-12 md:px-16 lg:px-20 py-5 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl border-3 border-brand-blue hover:border-brand-accent-blue text-brand-blue hover:text-white hover:bg-brand-blue transition-all duration-300 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 font-semibold"
            >
              اعرف المزيد عنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-24 h-24 bg-brand-blue/20 rounded-full animate-pulse shadow-xl"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-20 h-20 bg-brand-accent-blue/20 rounded-full animate-pulse delay-75 shadow-xl"></div>
      <div className="hidden xl:block absolute top-40 right-20 w-16 h-16 bg-brand-blue-dark/20 rounded-full animate-pulse delay-150 shadow-xl"></div>
      <div className="hidden xl:block absolute bottom-40 left-20 w-18 h-18 bg-brand-blue/15 rounded-full animate-pulse delay-300 shadow-xl"></div>
    </section>
  );
};

export default HeroSection;
