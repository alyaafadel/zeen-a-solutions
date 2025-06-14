
import { Truck, Package, MapPin, Clock, Shield } from "lucide-react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import BenefitsSection from "@/components/services/BenefitsSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import SEO from "@/components/SEO";

const LogisticsServices = () => {
  const logisticsServices = [
    {
      title: "خدمات النقل والشحن",
      description: "نقل آمن وسريع للبضائع داخل وخارج المملكة",
      duration: "حسب الوجهة",
      features: ["الشحن المحلي", "الشحن الدولي", "النقل السريع", "التتبع المباشر"]
    },
    {
      title: "إدارة سلسلة التوريد",
      description: "حلول شاملة لإدارة وتحسين سلسلة التوريد",
      duration: "مستمر",
      features: ["تخطيط التوريد", "إدارة المخزون", "تحسين التكاليف", "تحليل الأداء"]
    },
    {
      title: "خدمات التخزين",
      description: "مستودعات آمنة ومجهزة بأحدث التقنيات",
      duration: "شهري/سنوي",
      features: ["تخزين آمن", "إدارة المخزون", "مراقبة الحرارة", "نظام أمني متقدم"]
    },
    {
      title: "الاستشارات اللوجستية",
      description: "استشارات متخصصة لتحسين العمليات اللوجستية",
      duration: "مشاريع",
      features: ["تحليل العمليات", "تحسين الطرق", "تقليل التكاليف", "زيادة الكفاءة"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "أمان وموثوقية",
      description: "نضمن وصول بضائعكم بأمان وفي الوقت المحدد"
    },
    {
      icon: Clock,
      title: "توقيت دقيق",
      description: "التزام بمواعيد التسليم مع إمكانية التتبع المباشر"
    },
    {
      icon: Package,
      title: "عناية فائقة",
      description: "التعامل مع البضائع بأعلى معايير الجودة والحماية"
    }
  ];

  const serviceAreas = [
    "الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة", "تبوك", "أبها", "جميع مناطق المملكة"
  ];

  return (
    <>
      <SEO 
        title="الخدمات اللوجستية"
        description="حلول لوجستية متكاملة تشمل النقل والشحن والتخزين وإدارة سلسلة التوريد بأعلى معايير الجودة في السعودية"
        keywords="الخدمات اللوجستية، النقل والشحن، التخزين، سلسلة التوريد، الشحن الدولي، السعودية"
      />
      
      <ServicePageLayout
        title="الخدمات اللوجستية"
        description="حلول لوجستية متكاملة وشاملة"
        icon={Truck}
        heroTitle="الخدمات اللوجستية"
        heroDescription="نقدم حلول لوجستية متكاملة تشمل النقل والشحن والتخزين وإدارة سلسلة التوريد بأعلى معايير الجودة والكفاءة"
        phoneNumber="+966570513821"
        ctaTitle="احصل على عرض سعر مخصص"
        ctaDescription="تواصل معنا للحصول على حلول لوجستية تناسب احتياجاتك"
      >
        <BenefitsSection 
          title="لماذا تختار خدماتنا اللوجستية؟"
          benefits={benefits}
        />
        
        <ServicesGrid 
          title="خدماتنا اللوجستية"
          services={logisticsServices}
          phoneNumber="+966570513821"
        />

        {/* Service Areas Section */}
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <MapPin className="h-16 w-16 text-sky-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-sky-700 mb-4">مناطق الخدمة</h3>
              <p className="text-xl text-sky-600">نخدم جميع مناطق المملكة العربية السعودية</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-lg font-semibold text-sky-700">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default LogisticsServices;
