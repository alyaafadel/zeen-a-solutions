
import { Code, Monitor, Smartphone, Database, Globe } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import BenefitsSection from "@/components/services/BenefitsSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import SEO from "@/components/SEO";

const ProgrammingServices = () => {
  const programmingServices = [
    {
      title: "تطوير مواقع الويب",
      description: "تصميم وتطوير مواقع إلكترونية احترافية ومتجاوبة",
      duration: "2-6 أسابيع",
      features: ["تصميم متجاوب", "تحسين الأداء", "أمان عالي", "سهولة الإدارة"]
    },
    {
      title: "تطوير التطبيقات",
      description: "تطبيقات موبايل وويب متقدمة لجميع المنصات",
      duration: "4-12 أسبوع",
      features: ["تطبيقات iOS", "تطبيقات Android", "تطبيقات ويب", "تطبيقات مخصصة"]
    },
    {
      title: "المتاجر الإلكترونية",
      description: "حلول كاملة للتجارة الإلكترونية مع أنظمة دفع آمنة",
      duration: "3-8 أسابيع",
      features: ["عربة التسوق", "أنظمة الدفع", "إدارة المنتجات", "تتبع الطلبات"]
    },
    {
      title: "الأنظمة المخصصة",
      description: "تطوير أنظمة برمجية مخصصة حسب احتياجاتكم",
      duration: "6-16 أسبوع",
      features: ["تحليل المتطلبات", "تصميم النظام", "التطوير", "التدريب والدعم"]
    }
  ];

  const benefits = [
    {
      icon: Monitor,
      title: "تقنيات حديثة",
      description: "نستخدم أحدث التقنيات والأدوات في التطوير"
    },
    {
      icon: Smartphone,
      title: "تصميم متجاوب",
      description: "جميع حلولنا تعمل بكفاءة على جميع الأجهزة"
    },
    {
      icon: Database,
      title: "أمان وحماية",
      description: "نضمن أعلى مستويات الأمان لبياناتكم"
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "PHP", "Laravel", "Flutter", "React Native", "WordPress"
  ];

  return (
    <>
      <SEO 
        title="خدمات البرمجة والتطوير"
        description="تطوير مواقع وتطبيقات احترافية، متاجر إلكترونية، وأنظمة مخصصة باستخدام أحدث التقنيات في السعودية"
        keywords="تطوير المواقع، البرمجة، تطبيقات الجوال، المتاجر الإلكترونية، الأنظمة المخصصة، السعودية"
      />
      
      <ServicePageLayout
        title="خدمات البرمجة"
        description="حلول برمجية متقدمة ومبتكرة"
        icon={Code}
        heroTitle="خدمات البرمجة والتطوير"
        heroDescription="نقدم حلول برمجية متقدمة ومبتكرة لتلبية احتياجات أعمالكم الرقمية بأحدث التقنيات العالمية"
        phoneNumber="+966570513821"
        ctaTitle="حول فكرتك إلى واقع رقمي"
        ctaDescription="احصل على استشارة تقنية مجانية وابدأ مشروعك معنا"
      >
        <BenefitsSection 
          title="مميزات حلولنا البرمجية"
          benefits={benefits}
        />
        
        <ServicesGrid 
          title="خدماتنا البرمجية"
          services={programmingServices}
          phoneNumber="+966570513821"
        />

        {/* Technologies Section */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Globe className="h-16 w-16 text-sky-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-sky-700 mb-4">التقنيات التي نستخدمها</h3>
              <p className="text-xl text-sky-600">نعمل بأحدث التقنيات والأدوات البرمجية</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-lg font-semibold text-sky-700">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default ProgrammingServices;
