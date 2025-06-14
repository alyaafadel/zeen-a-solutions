
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
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue/30 via-brand-light-blue/10 to-brand-light-blue/20"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 text-brand-blue-dark leading-tight">
            <div className="mb-2 sm:mb-3 md:mb-4">Zeen-A Solutions</div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">شركاؤكم الاستراتيجيون في تحقيق التميز والنمو</div>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-12 md:mb-16 leading-relaxed max-w-5xl mx-auto px-2 sm:px-4">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية تشمل الموارد البشرية، التطوير التقني، التسويق الرقمي، والتطوير المهني. نعمل كجزء لا يتجزأ من فريقكم، ملتزمين بتقديم خبرات متخصصة تضمن إنجاز مهامكم بأعلى معايير الجودة والاحترافية، وتحقيق أهدافكم الاستراتيجية بفعالية.
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:gap-4 md:gap-8 justify-center items-center px-4">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
              variant="cta"
              text="احصل على خدمتك الآن"
              className="bg-gradient-blue hover:bg-brand-accent-blue text-white border-0 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg w-full sm:w-auto"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/about')}
              className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl border-2 border-brand-blue hover:border-brand-accent-blue text-brand-blue hover:text-white hover:bg-brand-blue transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              اعرف المزيد عنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements with blue theme - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-brand-blue/20 rounded-full animate-pulse shadow-lg"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-brand-accent-blue/20 rounded-full animate-pulse delay-75 shadow-lg"></div>
      <div className="hidden md:block absolute top-40 right-20 w-12 h-12 bg-brand-blue-dark/20 rounded-full animate-pulse delay-150 shadow-lg"></div>
      <div className="hidden md:block absolute bottom-40 left-20 w-14 h-14 bg-brand-blue/15 rounded-full animate-pulse delay-300 shadow-lg"></div>
    </section>
  );
};

export default HeroSection;
