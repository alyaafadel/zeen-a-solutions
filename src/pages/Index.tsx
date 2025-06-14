
import { Users, Languages, Megaphone, Code, Truck, ArrowRight, CheckCircle, MessageSquare, GraduationCap, Linkedin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "الموارد البشرية",
      brandName: "Zeen HR Solutions",
      logo: "👥",
      description: "خدمات شاملة في التوظيف والتدريب وإدارة الأداء",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      route: "/hr-services",
      features: ["استقطاب المواهب", "الهياكل التنظيمية", "التدريب والتطوير", "إدارة الأداء"]
    },
    {
      title: "خدمات الترجمة",
      brandName: "Zeen Translation Hub",
      logo: "🌐",
      description: "ترجمة احترافية للوثائق الرسمية والأكاديمية",
      icon: Languages,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      route: "/translation-services", 
      features: ["الوثائق الرسمية", "الأبحاث الأكاديمية", "متعدد اللغات", "ترجمة عاجلة"]
    },
    {
      title: "التسويق الرقمي",
      brandName: "Zeen Digital Marketing",
      logo: "📈",
      description: "استراتيجيات تسويق فعالة لزيادة مبيعاتك",
      icon: Megaphone,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      route: "/digital-marketing",
      features: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين SEO", "التسويق بالمحتوى"]
    },
    {
      title: "البرمجة والتطوير",
      brandName: "Zeen Tech Solutions",
      logo: "💻",
      description: "تطوير مواقع وتطبيقات احترافية بأحدث التقنيات",
      icon: Code,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      route: "/programming-services",
      features: ["المواقع الإلكترونية", "تطبيقات الجوال", "الأنظمة الإدارية", "الصيانة والدعم"]
    },
    {
      title: "الخدمات اللوجستية",
      brandName: "Zeen Logistics & 3PL",
      logo: "🚛",
      description: "حلول لوجستية متكاملة وخدمات 3PL احترافية",
      icon: Truck,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      route: "/logistics-services",
      features: ["التخزين والمستودعات", "النقل والتوصيل", "إدارة سلسلة التوريد", "خدمات 3PL"]
    },
    {
      title: "التدريب المهني والتطوير",
      brandName: "Zeen Learning Academy",
      logo: "🎓",
      description: "برامج تدريبية متخصصة لتطوير المهارات المهنية",
      icon: GraduationCap,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      route: "/training-services",
      features: ["دورات تدريبية متخصصة", "ورش عمل تطبيقية", "التدريب الرقمي", "شهادات معتمدة"]
    },
    {
      title: "التوجيه المهني والسيرة الذاتية",
      brandName: "Zeen Career Solutions",
      logo: "💼",
      description: "خدمات شاملة لتطوير مسارك المهني وكتابة السيرة الذاتية",
      icon: Briefcase,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      route: "/career-services",
      features: ["كتابة السيرة الذاتية", "التحضير للمقابلات", "التوجيه المهني", "البحث عن عمل"]
    }
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "شريكك المتميز في النجاح والتطوير",
    phone: "+966570513821",
    email: "info@zeenaplusolutions.com",
    whatsapp: "+966570513821",
    linkedin: "https://www.linkedin.com/company/zeen-a-solutions-establishment/",
    location: "الرياض، المملكة العربية السعودية",
    description: "شركة متخصصة في تقديم حلول متكاملة للأعمال تشمل الموارد البشرية، الترجمة، التسويق الرقمي، التطوير التقني، والخدمات اللوجستية."
  };

  // Calculate positions for circular layout
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{companyInfo.name}</h1>
                <p className="text-sm text-gray-600">{companyInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                title="تابعونا على LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد الاستفسار عن خدماتكم"
                variant="header"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Circular Design */}
      <section className="py-20 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Circular Services Layout */}
          <div className="relative flex items-center justify-center" style={{ minHeight: '800px' }}>
            {/* Central Company Info */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-12 shadow-2xl border-4 border-blue-200 text-center max-w-md w-80 h-80 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border mb-4">
                  <img 
                    src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                    alt="Zeen A Plus Solutions Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
                  {companyInfo.name}
                </h2>
                <p className="text-lg text-gray-600 font-medium mb-3">{companyInfo.slogan}</p>
                <div className="text-sm text-gray-500">{companyInfo.location}</div>
              </div>
            </div>

            {/* Services in Circular Layout */}
            {services.map((service, index) => {
              const position = getCircularPosition(index, services.length, 320);
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-80px',
                    marginTop: '-80px',
                  }}
                  onClick={() => navigate(service.route)}
                >
                  <div className={`w-40 h-40 ${service.bgColor} rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}>
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full`}></div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg mb-2 relative z-10`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Service Title */}
                    <div className="text-center relative z-10">
                      <h3 className="text-sm font-bold text-gray-800 leading-tight px-2">{service.title}</h3>
                      <div className="text-xs text-gray-500 mt-1">{service.logo}</div>
                    </div>

                    {/* Arrow indicator */}
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors absolute bottom-3 right-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description below the circular design */}
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {companyInfo.description}
            </p>
            <p className="text-lg text-gray-500">
              انقر على أي خدمة لاستكشاف التفاصيل والحصول على عرض مخصص
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار {companyInfo.name}؟</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة وفريق متخصص يضمن لك أفضل الخدمات والحلول المتكاملة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">مشروع مكتمل</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">80+</div>
              <div className="text-gray-600">عميل راضٍ</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">7+</div>
              <div className="text-gray-600">سنوات خبرة</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">دعم مستمر</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">ابدأ مشروعك مع {companyInfo.name}</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لجميع خدماتنا
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدمات Zeen A Plus Solutions"
              variant="cta"
              text="تواصل عبر الواتس آب"
            />
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                <MessageSquare className="h-5 w-5" />
                <span>أو اتصل على: {companyInfo.phone}</span>
              </div>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>تابعونا على LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدمات Zeen A Plus Solutions"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default Index;
