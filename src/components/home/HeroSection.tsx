
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CompanyInfo {
  whatsapp: string;
}

interface HeroSectionProps {
  companyInfo: CompanyInfo;
}

const HeroSection = ({ companyInfo }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue/30 via-brand-light-blue/10 to-brand-light-blue/20"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Responsive Title with Better Mobile Sizing */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-brand-blue-dark leading-tight">
            <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5">Zeen-A Solutions</div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">شركاؤكم الاستراتيجيون في تحقيق التميز والنمو</div>
          </h1>
          
          {/* Responsive Description with Better Line Height */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 leading-relaxed max-w-5xl mx-auto px-2 sm:px-4 line-height-mobile">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية تشمل الموارد البشرية، التطوير التقني، التسويق الرقمي، والتطوير المهني. نعمل كجزء لا يتجزأ من فريقكم، ملتزمين بتقديم خبرات متخصصة تضمن إنجاز مهامكم بأعلى معايير الجودة والاحترافية، وتحقيق أهدافكم الاستراتيجية بفعالية.
          </p>
          
          {/* Enhanced Mobile-First Button Layout */}
          <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:gap-8 lg:gap-12 xl:gap-16 justify-center items-center px-4">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
              variant="cta"
              text="احصل على خدمتك الآن"
              className="bg-gradient-blue hover:bg-brand-accent-blue text-white border-0 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg w-full sm:w-auto min-h-[48px] touch-manipulation"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/about')}
              className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl border-2 border-brand-blue hover:border-brand-accent-blue text-brand-blue hover:text-white hover:bg-brand-blue transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl w-full sm:w-auto min-h-[48px] touch-manipulation"
            >
              اعرف المزيد عنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements with blue theme - Hidden on mobile for better performance */}
      <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 bg-brand-blue/20 rounded-full animate-pulse shadow-lg"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-16 h-16 bg-brand-accent-blue/20 rounded-full animate-pulse delay-75 shadow-lg"></div>
      <div className="hidden xl:block absolute top-40 right-20 w-12 h-12 bg-brand-blue-dark/20 rounded-full animate-pulse delay-150 shadow-lg"></div>
      <div className="hidden xl:block absolute bottom-40 left-20 w-14 h-14 bg-brand-blue/15 rounded-full animate-pulse delay-300 shadow-lg"></div>
    </section>
  );
};

export default HeroSection;
