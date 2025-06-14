
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CompanyInfo {
  whatsapp: string;
}

interface HeroSectionProps {
  companyInfo: CompanyInfo;
}

const HeroSection = ({ companyInfo }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Unified background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-neutral-50/50"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--brand-blue)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              <span className="text-neutral-800">شركاؤكم الاستراتيجيون في</span>
              <span className="block mt-3 bg-gradient-to-r from-brand-blue via-brand-accent-blue to-brand-blue-dark bg-clip-text text-transparent">
                تحقيق التميز والنمو
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto font-medium">
              في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية متنوعة
            </p>
          </div>
          
          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-100/50 group-hover:shadow-xl group-hover:border-brand-blue/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-brand-blue to-brand-accent-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">+</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">خبرة متخصصة</h3>
                <p className="text-neutral-600 leading-relaxed">فريق من المتخصصين في كافة المجالات</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-100/50 group-hover:shadow-xl group-hover:border-brand-blue/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-brand-accent-blue to-brand-blue-dark rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">✓</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">جودة مضمونة</h3>
                <p className="text-neutral-600 leading-relaxed">نلتزم بأعلى معايير الجودة والاحترافية</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-100/50 group-hover:shadow-xl group-hover:border-brand-blue/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-brand-blue-dark to-brand-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">دعم مستمر</h3>
                <p className="text-neutral-600 leading-relaxed">متابعة ودعم في جميع مراحل العمل</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-12 border border-blue-100/50 shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
              انضموا إلى قائمة شركائنا الناجحين
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              تواصلوا معنا اليوم لمناقشة كيف يمكن أن نكون شريككم الأمثل في رحلة النجاح
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate('/about')}
                className="bg-gradient-to-r from-brand-blue to-brand-accent-blue hover:from-brand-blue-dark hover:to-brand-blue text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
              >
                اكتشف قصة نجاحنا
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`https://wa.me/${companyInfo.whatsapp}?text=مرحباً، أريد التواصل معكم`, '_blank')}
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
              >
                ابدأ مشروعك معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-brand-accent-blue/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
