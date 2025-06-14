
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
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Consistent background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-neutral-50/50"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.03) 1px, transparent 1px)`,
        backgroundSize: '28px 28px'
      }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-accent-blue rounded-2xl shadow-lg mb-8">
              <span className="text-2xl font-bold text-white">🌟</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-neutral-800">لماذا تختار</span>
              <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-accent-blue bg-clip-text text-transparent">
                Zeen A Plus Solutions؟
              </span>
            </h2>
          </div>
          
          {/* Main Content Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-blue-100/50 shadow-xl mb-12">
            <p className="text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-12 font-medium">
              {companyInfo.description}
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-brand-blue to-brand-accent-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-brand-blue transition-colors duration-300">شراكة حقيقية</h3>
                <p className="text-neutral-600 leading-relaxed">نعمل كجزء من فريقكم</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-brand-accent-blue to-brand-blue-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-brand-blue transition-colors duration-300">خبرة متنوعة</h3>
                <p className="text-neutral-600 leading-relaxed">متخصصون في مجالات متعددة</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-brand-blue-dark to-brand-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">🏆</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-brand-blue transition-colors duration-300">نتائج مضمونة</h3>
                <p className="text-neutral-600 leading-relaxed">ملتزمون بتحقيق أهدافكم</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <Button
            size="lg"
            onClick={() => navigate('/about')}
            className="bg-gradient-to-r from-brand-blue to-brand-accent-blue hover:from-brand-blue-dark hover:to-brand-blue text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
          >
            اعرف المزيد عن قصتنا
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-10 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-brand-accent-blue/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default AboutPreviewSection;
