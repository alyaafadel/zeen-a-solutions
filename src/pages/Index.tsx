
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
      description: "حلول شاملة في إدارة وتطوير الموارد البشرية تشمل التوظيف والاختيار، تقييم الأداء، وتطوير السياسات المؤسسية",
      icon: Users,
      route: "/hr-services"
    },
    {
      title: "التطوير المهني للأفراد",
      description: "خدمات تطوير المسار المهني وبناء الهوية المهنية مع استراتيجيات مخصصة لتحقيق الأهداف المهنية",
      icon: Briefcase,
      route: "/career-services"
    },
    {
      title: "التدريب المهني",
      description: "برامج تدريبية متخصصة للشركات والأفراد في المهارات التقنية والقيادية مع شهادات معتمدة",
      icon: GraduationCap,
      route: "/training-services"
    },
    {
      title: "خدمات الترجمة",
      description: "ترجمة احترافية للوثائق الرسمية والأكاديمية والتجارية مع ضمان الدقة اللغوية والمصطلحات المتخصصة",
      icon: Languages,
      route: "/translation-services"
    },
    {
      title: "التطوير التقني والبرمجة",
      description: "تطوير مواقع وتطبيقات احترافية وحلول تقنية متطورة باستخدام أحدث التقنيات والممارسات العالمية",
      icon: Code,
      route: "/programming-services"
    },
    {
      title: "التسويق الرقمي المتكامل",
      description: "استراتيجيات تسويق رقمية مبتكرة لزيادة الوصول والمبيعات وبناء الهوية التجارية القوية",
      icon: Megaphone,
      route: "/digital-marketing"
    },
    {
      title: "الاستشارات القانونية للشركات",
      description: "خدمات قانونية متخصصة تشمل التأسيس القانوني، صياغة العقود، والامتثال التنظيمي",
      icon: Scale,
      route: "/legal-services"
    },
    {
      title: "الذكاء الاصطناعي",
      description: "تقنيات الذكاء الاصطناعي المتقدمة لتطوير الأعمال وزيادة الكفاءة التشغيلية بحلول ذكية ومبتكرة",
      icon: Bot,
      route: "/ai-services"
    },
    {
      title: "الخدمات اللوجستية",
      description: "حلول لوجستية متكاملة وخدمات 3PL تشمل إدارة سلسلة التوريد والتخزين والتوزيع",
      icon: Truck,
      route: "/logistics-services"
    },
    {
      title: "الحلول المخصصة",
      description: "حلول مبتكرة ومخصصة حسب احتياجاتكم الفريدة مع خبرات متخصصة ونهج مخصص",
      icon: Star,
      route: "/custom-solutions"
    }
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "شريكك المتخصص في إنجاز المهام والخدمات",
    phone: "+966570513821",
    email: "join@zeenaplus.solutions",
    whatsapp: "+966570513821",
    linkedin: "https://www.linkedin.com/company/zeen-a-solutions-establishment/",
    location: "الرياض، المملكة العربية السعودية",
    description: "نعمل كشركاء متخصصين مع الشركات والأفراد، نقدم خدماتنا كأعضاء فريق مؤقتين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة. نحن مسؤولون عن كل خدمة ومهمة نقدمها بجودة عالية واحترافية تامة",
    countries: [
      {
        country: "السعودية",
        flag: "🇸🇦",
        phoneNumber: "+966570513821"
      },
      {
        country: "سوريا",
        flag: "🇸🇾",
        phoneNumber: "+963987920420"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="الصفحة الرئيسية"
        description="Zeen A Plus Solutions - شريكك المتخصص في الموارد البشرية، التطوير التقني، التسويق الرقمي، والخدمات المهنية في السعودية"
        keywords="خدمات الموارد البشرية السعودية، التطوير التقني، التسويق الرقمي، الترجمة المعتمدة، الاستشارات القانونية، التدريب المهني"
      />
      
      <Header services={services} companyInfo={companyInfo} />
      <HeroSection companyInfo={companyInfo} />
      <ServicesSection services={services} />
      <StatsSection />
      <AboutPreviewSection companyInfo={companyInfo} />

      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
          variant="floating"
          text="تحدث معنا"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 min-h-[56px] min-w-[56px] touch-manipulation"
          countries={companyInfo.countries}
        />
      </div>

      <Footer services={services} companyInfo={companyInfo} />
    </div>
  );
};

export default Index;
