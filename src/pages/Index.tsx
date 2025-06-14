
import { Users, Languages, Megaphone, Code, Truck, GraduationCap, Briefcase, Star, Bot, Scale } from "lucide-react";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const services = [
    {
      title: "خدمات الموارد البشرية",
      description: "حلول شاملة ومتكاملة في إدارة وتطوير الموارد البشرية للشركات والمؤسسات من جميع الأحجام، تشمل التوظيف والاختيار، إدارة الأداء، وتطوير الكفاءات",
      icon: Users,
      route: "/hr-services"
    },
    {
      title: "التطوير المهني للأفراد",
      description: "خدمات شاملة لتطوير المسار المهني وبناء الهوية المهنية المتميزة للأفراد الطموحين، مع استراتيجيات مخصصة لتحقيق الأهداف المهنية",
      icon: Briefcase,
      route: "/career-services"
    },
    {
      title: "التدريب المهني",
      description: "برامج تدريبية متخصصة ومصممة بعناية للشركات والأفراد الراغبين في تطوير مهاراتهم وقدراتهم في مختلف المجالات المهنية والتقنية",
      icon: GraduationCap,
      route: "/training-services"
    },
    {
      title: "خدمات الترجمة",
      description: "ترجمة احترافية ودقيقة للوثائق الرسمية والأكاديمية والتجارية للشركات والأفراد، مع ضمان الجودة والدقة اللغوية والمصطلحات المتخصصة",
      icon: Languages,
      route: "/translation-services"
    },
    {
      title: "التطوير التقني والبرمجة",
      description: "تطوير حلول تقنية متطورة ومواقع وتطبيقات احترافية تلبي احتياجات الأعمال الحديثة باستخدام أحدث التقنيات والممارسات العالمية",
      icon: Code,
      route: "/programming-services"
    },
    {
      title: "التسويق الرقمي المتكامل",
      description: "استراتيجيات تسويق رقمية مبتكرة ومدروسة لزيادة الوصول والمبيعات وبناء الهوية التجارية القوية عبر جميع القنوات الرقمية",
      icon: Megaphone,
      route: "/digital-marketing"
    },
    {
      title: "الاستشارات القانونية للشركات",
      description: "خدمات قانونية متخصصة وشاملة للشركات والمؤسسات، تشمل التأسيس القانوني، صياغة العقود، الامتثال التنظيمي، وجميع الاستشارات القانونية التجارية",
      icon: Scale,
      route: "/legal-services"
    },
    {
      title: "الذكاء الاصطناعي",
      description: "استخدام تقنيات الذكاء الاصطناعي المتقدمة لتطوير الأعمال وزيادة الكفاءة التشغيلية للشركات والأفراد من خلال حلول ذكية ومبتكرة",
      icon: Bot,
      route: "/ai-services"
    },
    {
      title: "الخدمات اللوجستية",
      description: "حلول لوجستية متكاملة وخدمات 3PL احترافية للشركات والمشاريع الناشئة، تشمل إدارة سلسلة التوريد والتخزين والتوزيع",
      icon: Truck,
      route: "/logistics-services"
    },
    {
      title: "الحلول المخصصة",
      description: "حلول مبتكرة ومخصصة حسب الطلب للشركات والأفراد لتلبية احتياجاتهم الفريدة والمتخصصة التي تتطلب خبرات ونهج مخصص",
      icon: Star,
      route: "/custom-solutions"
    }
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "شريكك المتخصص في إنجاز المهام والخدمات",
    phone: "+966570513821",
    email: "info@zeenaplusolutions.com",
    whatsapp: "+966570513821",
    linkedin: "https://www.linkedin.com/company/zeen-a-solutions-establishment/",
    location: "الرياض، المملكة العربية السعودية",
    description: "نعمل كشركاء متخصصين مع الشركات والأفراد، نقدم خدماتنا كأعضاء فريق مؤقتين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة. نحن مسؤولون عن كل خدمة ومهمة نقدمها بجودة عالية واحترافية تامة"
  };

  return (
    <div className="min-h-screen bg-pattern-subtle" dir="rtl">
      <SEO 
        title="الصفحة الرئيسية"
        description="Zeen A Plus Solutions - شريكك المتخصص في الموارد البشرية، التطوير التقني، التسويق الرقمي، والخدمات المهنية في السعودية"
        keywords="خدمات الموارد البشرية السعودية، التطوير التقني، التسويق الرقمي، الترجمة المعتمدة، الاستشارات القانونية، التدريب المهني"
      />
      
      {/* Header with Logo, Navigation and Mobile Menu */}
      <Header services={services} companyInfo={companyInfo} />
      
      {/* Hero Section with reduced spacing */}
      <HeroSection companyInfo={companyInfo} />
      
      {/* Services Section */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <ServicesSection services={services} />
      </div>
      
      {/* Stats Section */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <StatsSection />
      </div>
      
      {/* About Preview Section */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <AboutPreviewSection companyInfo={companyInfo} />
      </div>

      {/* Enhanced Floating WhatsApp Button - Mobile Optimized */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
          variant="floating"
          text="تحدث معنا"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 min-h-[56px] min-w-[56px] touch-manipulation"
        />
      </div>

      <Footer services={services} companyInfo={companyInfo} />
    </div>
  );
};

export default Index;
