
import { Users, Languages, Megaphone, Code, Truck, GraduationCap, Briefcase, Star, Bot } from "lucide-react";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import JoinUsSection from "@/components/home/JoinUsSection";
import ContactSection from "@/components/home/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      title: "خدمات الموارد البشرية",
      description: "حلول شاملة ومتكاملة في إدارة وتطوير الموارد البشرية للشركات والمؤسسات من جميع الأحجام",
      icon: Users,
      route: "/hr-services"
    },
    {
      title: "التطوير التقني والبرمجة",
      description: "تطوير حلول تقنية متطورة ومواقع وتطبيقات احترافية تلبي احتياجات الأعمال الحديثة",
      icon: Code,
      route: "/programming-services"
    },
    {
      title: "التسويق الرقمي المتكامل",
      description: "استراتيجيات تسويق رقمية مبتكرة ومدروسة لزيادة الوصول والمبيعات وبناء الهوية التجارية",
      icon: Megaphone,
      route: "/digital-marketing"
    },
    {
      title: "التطوير المهني للأفراد",
      description: "خدمات شاملة لتطوير المسار المهني وبناء الهوية المهنية المتميزة للأفراد الطموحين",
      icon: Briefcase,
      route: "/career-services"
    },
    {
      title: "خدمات الترجمة",
      description: "ترجمة احترافية ودقيقة للوثائق الرسمية والأكاديمية للشركات والأفراد",
      icon: Languages,
      route: "/translation-services"
    },
    {
      title: "الذكاء الاصطناعي",
      description: "استخدام تقنيات الذكاء الاصطناعي لتطوير الأعمال وزيادة الكفاءة للشركات والأفراد",
      icon: Bot,
      route: "/ai-services"
    },
    {
      title: "الخدمات اللوجستية",
      description: "حلول لوجستية متكاملة وخدمات 3PL للشركات والمشاريع الناشئة",
      icon: Truck,
      route: "/logistics-services"
    },
    {
      title: "التدريب المهني",
      description: "برامج تدريبية متخصصة للشركات والأفراد الراغبين في تطوير مهاراتهم",
      icon: GraduationCap,
      route: "/training-services"
    },
    {
      title: "الحلول المخصصة",
      description: "حلول مبتكرة ومخصصة للشركات والأفراد لتلبية احتياجاتهم الفريدة",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      <Header services={services} companyInfo={companyInfo} />
      <HeroSection companyInfo={companyInfo} />
      <FeaturesSection />
      <ServicesSection services={services} />
      <StatsSection />
      <AboutPreviewSection companyInfo={companyInfo} />
      <JoinUsSection />
      <ContactSection companyInfo={companyInfo} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدماتكم المتخصصة"
          variant="floating"
          text="تحدث معنا"
        />
      </div>

      <Footer services={services} companyInfo={companyInfo} />
    </div>
  );
};

export default Index;
