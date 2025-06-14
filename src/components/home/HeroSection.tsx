
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
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-indigo-500/5 to-blue-500/5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-700 leading-tight">
            شركاؤكم في إنجاز المهام والخدمات المتخصصة
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            نقدم خدمات متخصصة للشركات والأفراد - من الموارد البشرية إلى التطوير التقني والتسويق الرقمي والتطوير المهني. 
            نعمل معكم كأعضاء فريق متخصصين لإنجاز مهامكم بجودة عالية واحترافية تامة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
              variant="cta"
              text="احصل على خدمتك الآن"
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white border-0 px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/about')}
              className="px-8 py-3 text-lg border-2 border-slate-400 hover:border-slate-500 text-slate-600 hover:text-slate-700 transition-all duration-300"
            >
              اعرف المزيد عنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-slate-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-400/20 rounded-full animate-pulse delay-75"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-150"></div>
    </section>
  );
};

export default HeroSection;
