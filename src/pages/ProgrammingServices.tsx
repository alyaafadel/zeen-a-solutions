
import { Code, ArrowRight, CheckCircle, Home, Monitor, Smartphone, Database, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProgrammingServices = () => {
  const navigate = useNavigate();

  const programmingServices = [
    {
      title: "تطوير المواقع الإلكترونية",
      description: "تصميم وتطوير مواقع احترافية متجاوبة مع جميع الأجهزة",
      price: "5000 - 15000 ريال",
      duration: "2-6 أسابيع",
      features: ["تصميم متجاوب", "لوحة تحكم", "تحسين SEO", "أمان عالي"]
    },
    {
      title: "تطبيقات الجوال",
      description: "تطوير تطبيقات iOS و Android بأحدث التقنيات",
      price: "10000 - 30000 ريال",
      duration: "6-12 أسبوع",
      features: ["iOS & Android", "واجهة مستخدم حديثة", "إشعارات فورية", "تحديثات مستمرة"]
    },
    {
      title: "الأنظمة الإدارية",
      description: "أنظمة إدارة مخصصة لتسهيل عمليات شركتك",
      price: "15000 - 50000 ريال",
      duration: "8-16 أسبوع",
      features: ["إدارة المخزون", "نظام المحاسبة", "تقارير تفصيلية", "إدارة الموظفين"]
    },
    {
      title: "الصيانة والدعم الفني",
      description: "خدمات صيانة وتطوير مستمرة لضمان أداء أمثل",
      price: "500 - 2000 ريال شهرياً",
      duration: "خدمة مستمرة",
      features: ["دعم 24/7", "تحديثات أمنية", "نسخ احتياطية", "مراقبة الأداء"]
    }
  ];

  const technologies = [
    { name: "React", description: "مكتبة جافاسكريبت حديثة" },
    { name: "Node.js", description: "بيئة تشغيل الخادم" },
    { name: "Python", description: "لغة برمجة متعددة الاستخدامات" },
    { name: "MySQL", description: "قواعد البيانات العلائقية" },
    { name: "Flutter", description: "تطوير تطبيقات الجوال" },
    { name: "AWS", description: "خدمات الحوسبة السحابية" },
    { name: "Docker", description: "تقنية الحاويات" },
    { name: "Git", description: "نظام إدارة الإصدارات" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Home className="h-4 w-4" />
                <span>الرئيسية</span>
              </Button>
              <span className="text-gray-400">/</span>
              <Code className="h-5 w-5 text-orange-600" />
              <span className="font-semibold text-gray-800">البرمجة والتطوير</span>
            </div>
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد الاستفسار عن خدمات البرمجة والتطوير"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Code className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">البرمجة والتطوير المتقدم</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              نطور لك مواقع وتطبيقات وأنظمة احترافية بأحدث التقنيات العالمية لتحقيق أهدافك التجارية والتقنية
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">خدماتنا البرمجية</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programmingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-orange-50 pb-6">
                  <CardTitle className="text-2xl text-gray-800 mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-orange-200">
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber="+966123456789"
                    message={`مرحباً، أريد الاستفسار عن ${service.title}`}
                    variant="service"
                    text="ابدأ مشروعك"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Settings className="h-16 w-16 text-orange-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">التقنيات التي نستخدمها</h3>
            <p className="text-xl text-gray-600">نعمل بأحدث التقنيات والأدوات العالمية</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-xl font-bold text-orange-600 mb-2">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">مراحل التطوير</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">التخطيط</h4>
              <p className="text-sm text-gray-600">تحليل المتطلبات ووضع الخطة</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">التصميم</h4>
              <p className="text-sm text-gray-600">تصميم واجهة المستخدم</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">التطوير</h4>
              <p className="text-sm text-gray-600">كتابة الكود والبرمجة</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">التسليم</h4>
              <p className="text-sm text-gray-600">الاختبار والتسليم النهائي</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">هل لديك فكرة مشروع؟</h3>
          <p className="text-xl mb-8 opacity-90">تواصل معنا الآن وحول فكرتك إلى واقع رقمي</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، لدي فكرة مشروع وأريد مناقشتها معكم"
              variant="cta"
              text="ناقش مشروعك"
              className="bg-white text-orange-600 hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8"
            >
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammingServices;
