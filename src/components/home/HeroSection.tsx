
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
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-blue/30 via-brand-light-blue/10 to-brand-light-blue/20"></div>
      <div className="container mx-auto px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 text-brand-blue-dark leading-tight">
            Zeen-A Solutions: شركاؤكم الاستراتيجيون في تحقيق التميز والنمو
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-16 leading-relaxed max-w-5xl mx-auto">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية تشمل الموارد البشرية، التطوير التقني، التسويق الرقمي، والتطوير المهني. نعمل كجزء لا يتجزأ من فريقكم، ملتزمين بتقديم خبرات متخصصة تضمن إنجاز مهامكم بأعلى معايير الجودة والاحترافية، وتحقيق أهدافكم الاستراتيجية بفعالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
              variant="cta"
              text="احصل على خدمتك الآن"
              className="bg-gradient-blue hover:bg-brand-accent-blue text-white border-0 px-12 py-5 text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/about')}
              className="px-12 py-5 text-xl border-2 border-brand-blue hover:border-brand-accent-blue text-brand-blue hover:text-white hover:bg-brand-blue transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            >
              اعرف المزيد عنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements with blue theme */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-blue/20 rounded-full animate-pulse shadow-lg"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-accent-blue/20 rounded-full animate-pulse delay-75 shadow-lg"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-brand-blue-dark/20 rounded-full animate-pulse delay-150 shadow-lg"></div>
      <div className="absolute bottom-40 left-20 w-14 h-14 bg-brand-blue/15 rounded-full animate-pulse delay-300 shadow-lg"></div>
    </section>
  );
};

export default HeroSection;
