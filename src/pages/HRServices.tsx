
import { Users, User, TrendingUp, FileText } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import BenefitsSection from "@/components/services/BenefitsSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import SEO from "@/components/SEO";

const HRServices = () => {
  const hrServices = [
    {
      title: "الاستقطاب والتوظيف",
      description: "خدمات شاملة لاستقطاب أفضل المواهب لشركتكم",
      duration: "2-4 أسابيع",
      features: ["البحث عن المواهب", "إجراء المقابلات", "فحص المرشحين", "التوصية بالمرشحين المناسبين"]
    },
    {
      title: "تطوير السياسات والإجراءات",
      description: "وضع السياسات والإجراءات الإدارية المناسبة",
      duration: "3-6 أسابيع",
      features: ["سياسات الموارد البشرية", "دليل الموظفين", "إجراءات العمل", "نظام الحوافز والمكافآت"]
    },
    {
      title: "إدارة الأداء والتطوير",
      description: "تقييم وتطوير أداء الموظفين بطرق علمية",
      duration: "عملية مستمرة",
      features: ["تقييم الأداء", "خطط التطوير", "برامج التدريب", "إدارة المواهب"]
    },
    {
      title: "الاستشارات الإدارية",
      description: "استشارات متخصصة في إدارة الموارد البشرية",
      duration: "حسب الحاجة",
      features: ["تحليل الاحتياجات", "إعادة الهيكلة", "تحسين العمليات", "الامتثال القانوني"]
    }
  ];

  const benefits = [
    {
      icon: User,
      title: "خبرة متخصصة",
      description: "فريق من خبراء الموارد البشرية مع سنوات من الخبرة"
    },
    {
      icon: TrendingUp,
      title: "نتائج مضمونة",
      description: "نضمن تحسين كفاءة إدارة الموارد البشرية في شركتكم"
    },
    {
      icon: FileText,
      title: "حلول مخصصة",
      description: "نقدم حلول مصممة خصيصاً لتناسب احتياجات شركتكم"
    }
  ];

  return (
    <>
      <SEO 
        title="خدمات الموارد البشرية"
        description="خدمات شاملة في إدارة وتطوير الموارد البشرية تشمل التوظيف والاختيار، تقييم الأداء، تطوير السياسات للشركات في السعودية"
        keywords="خدمات الموارد البشرية، التوظيف، إدارة الأداء، السياسات الإدارية، استشارات الموارد البشرية، السعودية"
      />
      
      <ServicePageLayout
        title="خدمات الموارد البشرية"
        description="خدمات شاملة في إدارة وتطوير الموارد البشرية"
        icon={Users}
        heroTitle="خدمات الموارد البشرية"
        heroDescription="نساعد الشركات في إدارة وتطوير مواردها البشرية بأحدث الممارسات العالمية وأفضل الحلول المتخصصة"
        phoneNumber="+966570513821"
        ctaTitle="استثمر في مواردك البشرية"
        ctaDescription="فريقنا المتخصص جاهز لمساعدتك في تطوير إدارة الموارد البشرية في شركتك"
      >
        <BenefitsSection 
          title="لماذا تختار خدماتنا؟"
          benefits={benefits}
        />
        
        <ServicesGrid 
          title="خدماتنا المتخصصة"
          services={hrServices}
          phoneNumber="+966570513821"
        />
      </ServicePageLayout>
    </>
  );
};

export default HRServices;
