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
      brandName: "Zeen HR Solutions",
      logo: "👥",
      description: "حلول شاملة ومتكاملة في إدارة وتطوير الموارد البشرية للشركات والمؤسسات من جميع الأحجام",
      benefits: "توفير الوقت والجهد في عمليات التوظيف، ضمان الامتثال للقوانين العمالية، تحسين أداء الموظفين وزيادة الإنتاجية، وبناء ثقافة مؤسسية إيجابية",
      subServices: [
        "التوظيف والاستقطاب المتخصص",
        "تطوير السياسات والإجراءات الإدارية", 
        "إدارة الأداء وتقييم الموظفين",
        "التدريب والتطوير المهني",
        "الاستشارات الإدارية والقانونية"
      ],
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/hr-services",
      features: ["استقطاب المواهب", "الهياكل التنظيمية", "التدريب والتطوير", "إدارة الأداء"]
    },
    {
      title: "التطوير التقني والبرمجة",
      brandName: "Zeen Tech Solutions",
      logo: "💻",
      description: "تطوير حلول تقنية متطورة ومواقع وتطبيقات احترافية تلبي احتياجات الأعمال الحديثة",
      benefits: "الحصول على حلول تقنية مخصصة ومتطورة، زيادة كفاءة العمليات التجارية، تحسين تجربة العملاء الرقمية، والحصول على ميزة تنافسية في السوق",
      subServices: [
        "تطوير المواقع الإلكترونية الاحترافية",
        "تطبيقات الهواتف الذكية (iOS & Android)",
        "الأنظمة الإدارية والمؤسسية",
        "التجارة الإلكترونية والمتاجر الرقمية",
        "الصيانة والدعم التقني المستمر"
      ],
      icon: Code,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/programming-services",
      features: ["المواقع الإلكترونية", "تطبيقات الجوال", "الأنظمة الإدارية", "الصيانة والدعم"]
    },
    {
      title: "التسويق الرقمي المتكامل",
      brandName: "Zeen Digital Marketing",
      logo: "📈",
      description: "استراتيجيات تسويق رقمية مبتكرة ومدروسة لزيادة الوصول والمبيعات وبناء الهوية التجارية",
      benefits: "زيادة الوعي بالعلامة التجارية، الوصول للعملاء المستهدفين بدقة، زيادة المبيعات والأرباح، وبناء علاقات طويلة المدى مع العملاء",
      subServices: [
        "إدارة وسائل التواصل الاجتماعي",
        "الإعلانات المدفوعة (Google & Social Media)",
        "تحسين محركات البحث SEO",
        "التسويق بالمحتوى والتصميم الجرافيكي",
        "تحليل الأداء والتقارير التفصيلية"
      ],
      icon: Megaphone,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/digital-marketing",
      features: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين SEO", "التسويق بالمحتوى"]
    },
    {
      title: "التطوير المهني للأفراد",
      brandName: "Zeen Career Solutions",
      logo: "💼",
      description: "خدمات شاملة لتطوير المسار المهني وبناء الهوية المهنية المتميزة للأفراد الطموحين",
      benefits: "تحسين فرص الحصول على وظائف أفضل، بناء سمعة مهنية قوية، تطوير المهارات والقدرات، والوصول لشبكة علاقات مهنية واسعة",
      subServices: [
        "كتابة السيرة الذاتية الاحترافية",
        "بناء بروفايل LinkedIn المتميز",
        "التدريب على المقابلات الشخصية",
        "الاستشارات المهنية والتوجيه الوظيفي",
        "تطوير المهارات الشخصية والمهنية"
      ],
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/career-services",
      features: ["كتابة السيرة الذاتية", "بناء بروفايل LinkedIn الاحترافي", "التحضير للمقابلات", "التوجيه المهني"]
    },
    {
      title: "خدمات الترجمة",
      brandName: "Zeen Translation Hub",
      logo: "🌐",
      description: "ترجمة احترافية ودقيقة للوثائق الرسمية والأكاديمية للشركات والأفراد",
      benefits: "ترجمة دقيقة ومعتمدة، توفير الوقت والجهد، ضمان الامتثال للمعايير الدولية",
      subServices: ["الوثائق الرسمية", "الأبحاث الأكاديمية", "متعدد اللغات", "ترجمة عاجلة"],
      icon: Languages,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/translation-services", 
      features: ["الوثائق الرسمية", "الأبحاث الأكاديمية", "متعدد اللغات", "ترجمة عاجلة"]
    },
    {
      title: "الذكاء الاصطناعي",
      brandName: "Zeen AI Solutions",
      logo: "🤖",
      description: "استخدام تقنيات الذكاء الاصطناعي لتطوير الأعمال وزيادة الكفاءة للشركات والأفراد",
      benefits: "أتمتة العمليات، تحليل البيانات بذكاء، تحسين اتخاذ القرارات",
      subServices: ["أتمتة العمليات", "تحليل البيانات", "الذكاء الاصطناعي التوليدي", "الحلول المخصصة"],
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
      benefits: "تحسين كفاءة سلسلة التوريد، توفير التكاليف، ضمان التسليم في الوقت المحدد",
      subServices: ["التخزين والمستودعات", "النقل والتوصيل", "إدارة سلسلة التوريد", "خدمات 3PL"],
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
      benefits: "تطوير مهارات الموظفين، زيادة الإنتاجية، الحصول على شهادات معتمدة",
      subServices: ["دورات تدريبية متخصصة", "ورش عمل تطبيقية", "التدريب الرقمي", "شهادات معتمدة"],
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/training-services",
      features: ["دورات تدريبية متخصصة", "ورش عمل تطبيقية", "التدريب الرقمي", "شهادات معتمدة"]
    },
    {
      title: "الحلول المخصصة",
      brandName: "Zeen Custom Solutions",
      logo: "⭐",
      description: "حلول مبتكرة ومخصصة للشركات والأفراد لتلبية احتياجاتهم الفريدة",
      benefits: "حلول مصممة خصيصاً، مرونة في التنفيذ، دعم شامل",
      subServices: ["استشارات متخصصة", "حلول مبتكرة", "تطوير حسب الطلب", "دعم شامل"],
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

      <Footer services={services} companyInfo={companyInfo} />
    </div>
  );
};

export default Index;
