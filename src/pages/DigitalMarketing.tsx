
import { TrendingUp, ArrowRight, CheckCircle, Home, Target, BarChart, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const marketingServices = [
    {
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "إدارة شاملة لحساباتكم على منصات التواصل الاجتماعي",
      duration: "مستمر شهرياً",
      features: ["إنشاء المحتوى", "إدارة الحسابات", "تحليل الأداء", "التفاعل مع الجمهور"]
    },
    {
      title: "الإعلانات المدفوعة",
      description: "حملات إعلانية مدروسة لزيادة مبيعاتكم وانتشاركم",
      duration: "حملات شهرية",
      features: ["إعلانات جوجل", "إعلانات فيسبوك", "إعلانات انستجرام", "تحسين الإعلانات"]
    },
    {
      title: "تحسين محركات البحث SEO",
      description: "تحسين موقعكم ليظهر في أولى نتائج البحث",
      duration: "3-6 أشهر",
      features: ["تحليل الكلمات المفتاحية", "تحسين المحتوى", "بناء الروابط", "التقارير الشهرية"]
    },
    {
      title: "التسويق بالمحتوى",
      description: "إنشاء محتوى جذاب يساعد في بناء علامتكم التجارية",
      duration: "مستمر",
      features: ["كتابة المقالات", "إنشاء الفيديوهات", "التصميم الجرافيكي", "استراتيجية المحتوى"]
    }
  ];

  const platforms = [
    "فيسبوك", "انستجرام", "تويتر", "لينكد إن", "يوتيوب", "تيك توك", "سناب شات", "جوجل"
  ];

  const benefits = [
    {
      icon: Target,
      title: "استهداف دقيق",
      description: "نصل إلى جمهوركم المستهدف بدقة عالية"
    },
    {
      icon: BarChart,
      title: "نتائج قابلة للقياس",
      description: "تقارير تفصيلية عن أداء حملاتكم التسويقية"
    },
    {
      icon: Users,
      title: "زيادة العملاء",
      description: "نساعدكم في الحصول على عملاء جدد وزيادة المبيعات"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
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
              <TrendingUp className="h-5 w-5 text-sky-500" />
              <span className="font-semibold text-gray-800">التسويق الرقمي</span>
            </div>
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد الاستفسار عن خدمات التسويق الرقمي"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-sky-400 to-sky-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-sky-700 mb-6">خدمات التسويق الرقمي</h1>
            <p className="text-xl text-sky-600 mb-12 leading-relaxed">
              نساعدك في الوصول إلى عملائك المستهدفين وزيادة مبيعاتك من خلال استراتيجيات تسويق رقمية مدروسة ومجربة
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">لماذا التسويق الرقمي مع Zeen A Plus؟</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-sky-700 mb-2">{benefit.title}</h4>
                <p className="text-sky-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">خدماتنا التسويقية</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {marketingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-sky-50 pb-6">
                  <CardTitle className="text-2xl text-sky-700 mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-sky-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-sky-200">
                    <div className="text-right">
                      <div className="text-sm text-sky-500">{service.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-sky-500 flex-shrink-0" />
                        <span className="text-sky-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber="+966123456789"
                    message={`مرحباً، أريد الاستفسار عن ${service.title}`}
                    variant="service"
                    text="اطلب الخدمة الآن"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-sky-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-sky-700 mb-4">المنصات التي نعمل عليها</h3>
            <p className="text-xl text-sky-600">نغطي جميع منصات التواصل الاجتماعي الرئيسية</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-sky-700">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">ابدأ رحلتك التسويقية معنا</h3>
          <p className="text-xl mb-8 opacity-90">احصل على استراتيجية تسويق مخصصة لنشاطك التجاري</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد استشارة مجانية حول التسويق الرقمي"
              variant="cta"
              text="احصل على استشارة مجانية"
              className="bg-white text-sky-600 hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-sky-600 px-8"
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

export default DigitalMarketing;
