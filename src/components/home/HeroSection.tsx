
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
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue/30 via-brand-light-blue/10 to-brand-light-blue/20"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Simplified and Elegant Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-10 md:mb-12 text-brand-blue-dark leading-tight">
            شركاؤكم الاستراتيجيون في تحقيق التميز والنمو
          </h1>
          
          {/* Enhanced Description with Better Typography */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-10 sm:mb-12 md:mb-14 leading-relaxed max-w-4xl mx-auto">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية تشمل الموارد البشرية، التطوير التقني، التسويق الرقمي، والتطوير المهني. نعمل كجزء لا يتجزأ من فريقكم، ملتزمين بتقديم خبرات متخصصة تضمن إنجاز مهامكم بأعلى معايير الجودة والاحترافية.
          </p>
          
          {/* Single Centered Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/about')}
              className="px-8 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl border-2 border-brand-blue hover:border-brand-accent-blue text-brand-blue hover:text-white hover:bg-brand-blue transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              اعرف المزيد عنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 bg-brand-blue/20 rounded-full animate-pulse shadow-lg"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-16 h-16 bg-brand-accent-blue/20 rounded-full animate-pulse delay-75 shadow-lg"></div>
      <div className="hidden xl:block absolute top-40 right-20 w-12 h-12 bg-brand-blue-dark/20 rounded-full animate-pulse delay-150 shadow-lg"></div>
      <div className="hidden xl:block absolute bottom-40 left-20 w-14 h-14 bg-brand-blue/15 rounded-full animate-pulse delay-300 shadow-lg"></div>
    </section>
  );
};

export default HeroSection;
