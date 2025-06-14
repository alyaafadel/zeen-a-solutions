
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

const Index = () => {
  const services = [
    {
      title: "الموارد البشرية",
      brandName: "Zeen HR Solutions",
      logo: "👥",
      description: "خدمات شاملة في التوظيف والتدريب وإدارة الأداء للشركات والأفراد",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/hr-services",
      features: ["استقطاب المواهب", "الهياكل التنظيمية", "التدريب والتطوير", "إدارة الأداء"]
    },
    {
      title: "خدمات الترجمة",
      brandName: "Zeen Translation Hub",
      logo: "🌐",
      description: "ترجمة احترافية ودقيقة للوثائق الرسمية والأكاديمية للشركات والأفراد",
      icon: Languages,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/translation-services", 
      features: ["الوثائق الرسمية", "الأبحاث الأكاديمية", "متعدد اللغات", "ترجمة عاجلة"]
    },
    {
      title: "التسويق الرقمي",
      brandName: "Zeen Digital Marketing",
      logo: "📈",
      description: "استراتيجيات تسويق مبتكرة للشركات والعلامات التجارية الشخصية",
      icon: Megaphone,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/digital-marketing",
      features: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين SEO", "التسويق بالمحتوى"]
    },
    {
      title: "البرمجة والتطوير",
      brandName: "Zeen Tech Solutions",
      logo: "💻",
      description: "تطوير مواقع وتطبيقات احترافية للشركات والمشاريع الشخصية",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/programming-services",
      features: ["المواقع الإلكترونية", "تطبيقات الجوال", "الأنظمة الإدارية", "الصيانة والدعم"]
    },
    {
      title: "الذكاء الاصطناعي",
      brandName: "Zeen AI Solutions",
      logo: "🤖",
      description: "استخدام تقنيات الذكاء الاصطناعي لتطوير الأعمال وزيادة الكفاءة للشركات والأفراد",
      icon: Bot,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/ai-services",
      features: ["أتمتة العمليات", "تحليل البيانات", "الذكاء الاصطناعي التوليدي", "الحلول المخصصة"]
    },
    {
      title: "الخدمات اللوجستية",
      brandName: "Zeen Logistics & 3PL",
      logo: "🚛",
      description: "حلول لوجستية متكاملة وخدمات 3PL للشركات والمشاريع الناشئة",
      icon: Truck,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/logistics-services",
      features: ["التخزين والمستودعات", "النقل والتوصيل", "إدارة سلسلة التوريد", "خدمات 3PL"]
    },
    {
      title: "التدريب المهني",
      brandName: "Zeen Learning Academy",
      logo: "🎓",
      description: "برامج تدريبية متخصصة للشركات والأفراد الراغبين في تطوير مهاراتهم",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/training-services",
      features: ["دورات تدريبية متخصصة", "ورش عمل تطبيقية", "التدريب الرقمي", "شهادات معتمدة"]
    },
    {
      title: "التطوير المهني",
      brandName: "Zeen Career Solutions",
      logo: "💼",
      description: "خدمات شاملة لتطوير المسار المهني وبناء الهوية المهنية المتميزة",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/career-services",
      features: ["كتابة السيرة الذاتية", "بناء بروفايل LinkedIn الاحترافي", "التحضير للمقابلات", "التوجيه المهني"]
    },
    {
      title: "الحلول المخصصة",
      brandName: "Zeen Custom Solutions",
      logo: "⭐",
      description: "حلول مبتكرة ومخصصة للشركات والأفراد لتلبية احتياجاتهم الفريدة",
      icon: Star,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/custom-solutions",
      features: ["استشارات متخصصة", "حلول مبتكرة", "تطوير حسب الطلب", "دعم شامل"]
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
    </div>
  );
};

export default Index;
