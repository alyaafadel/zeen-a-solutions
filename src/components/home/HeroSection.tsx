
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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-brand-emerald/5 to-brand-blue-dark/5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-slate-700 leading-tight">
            Zeen-A Solutions: شركاؤكم الاستراتيجيون في تحقيق التميز والنمو
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية تشمل الموارد البشرية، التطوير التقني، التسويق الرقمي، والتطوير المهني. نعمل كجزء لا يتجزأ من فريقكم، ملتزمين بتقديم خبرات متخصصة تضمن إنجاز مهامكم بأعلى معايير الجودة والاحترافية، وتحقيق أهدافكم الاستراتيجية بفعالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
              variant="cta"
              text="احصل على خدمتك الآن"
              className="bg-gradient-purple hover:bg-gradient-to-r hover:from-brand-purple-dark hover:to-brand-purple text-white border-0 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/about')}
              className="px-10 py-4 text-lg border-2 border-brand-purple hover:border-brand-purple-dark text-brand-purple hover:text-white hover:bg-brand-purple transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
            >
              اعرف المزيد عنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-purple/20 rounded-full animate-pulse shadow-lg"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-emerald/20 rounded-full animate-pulse delay-75 shadow-lg"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-brand-blue-dark/20 rounded-full animate-pulse delay-150 shadow-lg"></div>
      <div className="absolute bottom-40 left-20 w-14 h-14 bg-brand-purple/15 rounded-full animate-pulse delay-300 shadow-lg"></div>
    </section>
  );
};

export default HeroSection;
