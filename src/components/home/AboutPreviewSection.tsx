
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CompanyInfo {
  description: string;
}

interface AboutPreviewSectionProps {
  companyInfo: CompanyInfo;
}

const AboutPreviewSection = ({ companyInfo }: AboutPreviewSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 mb-8 md:mb-12">
            لماذا تختار 
            <span className="text-brand-blue block mt-2">Zeen A Plus Solutions؟</span>
          </h2>
          
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-200 mb-10 md:mb-12">
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
              {companyInfo.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-brand-blue text-3xl font-bold mb-2">✓</div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">شراكة حقيقية</h3>
                <p className="text-neutral-600">نعمل كجزء من فريقكم</p>
              </div>
              <div className="text-center">
                <div className="text-brand-blue text-3xl font-bold mb-2">✓</div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">خبرة متنوعة</h3>
                <p className="text-neutral-600">متخصصون في مجالات متعددة</p>
              </div>
              <div className="text-center">
                <div className="text-brand-blue text-3xl font-bold mb-2">✓</div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">نتائج مضمونة</h3>
                <p className="text-neutral-600">ملتزمون بتحقيق أهدافكم</p>
              </div>
            </div>
          </div>
          
          <Button
            size="lg"
            onClick={() => navigate('/about')}
            className="bg-gradient-to-r from-brand-blue to-brand-accent-blue hover:from-brand-blue-dark hover:to-brand-blue text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
          >
            اعرف المزيد عن قصتنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
