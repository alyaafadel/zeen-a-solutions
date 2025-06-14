
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
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Improved Title with Better Typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-neutral-800 leading-tight">
            شركاؤكم الاستراتيجيون في 
            <span className="text-brand-blue block mt-2">تحقيق التميز والنمو</span>
          </h1>
          
          {/* Improved Description with Better Spacing */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
            في Zeen-A Solutions، نقدم حلولاً متكاملة ومخصصة للشركات والأفراد في مجالات حيوية متنوعة
          </p>
          
          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-neutral-200">
              <div className="text-brand-blue text-2xl font-bold mb-2">خبرة متخصصة</div>
              <p className="text-neutral-600">فريق من المتخصصين في كافة المجالات</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-neutral-200">
              <div className="text-brand-blue text-2xl font-bold mb-2">جودة مضمونة</div>
              <p className="text-neutral-600">نلتزم بأعلى معايير الجودة والاحترافية</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-neutral-200">
              <div className="text-brand-blue text-2xl font-bold mb-2">دعم مستمر</div>
              <p className="text-neutral-600">متابعة ودعم في جميع مراحل العمل</p>
            </div>
          </div>
          
          {/* Call to Action with improved design */}
          <div className="bg-brand-blue/5 rounded-3xl p-8 md:p-12 border border-brand-blue/20">
            <p className="text-xl md:text-2xl text-neutral-800 font-semibold leading-relaxed mb-6">
              انضموا إلى قائمة شركائنا الناجحين
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              تواصلوا معنا اليوم لمناقشة كيف يمكن أن نكون شريككم الأمثل في رحلة النجاح
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Elements - More subtle */}
      <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 bg-brand-blue/10 rounded-full animate-pulse shadow-lg"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-16 h-16 bg-brand-blue/8 rounded-full animate-pulse delay-75 shadow-lg"></div>
      <div className="hidden xl:block absolute top-32 right-20 w-14 h-14 bg-brand-blue/6 rounded-full animate-pulse delay-150 shadow-lg"></div>
    </section>
  );
};

export default HeroSection;
