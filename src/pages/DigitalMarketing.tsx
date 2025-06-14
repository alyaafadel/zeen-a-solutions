
import { Megaphone, ArrowRight, CheckCircle, Home, TrendingUp, Target, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const marketingServices = [
    {
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "إدارة شاملة لحساباتك على منصات التواصل الاجتماعي",
      price: "1500 ريال شهرياً",
      duration: "خدمة شهرية",
      features: ["إنشاء المحتوى", "التفاعل مع الجمهور", "التحليلات الشهرية", "الإعلانات المدفوعة"]
    },
    {
      title: "الإعلانات المدفوعة",
      description: "حملات إعلانية فعالة على جوجل وفيسبوك وإنستقرام",
      price: "10% من الميزانية الإعلانية",
      duration: "حملات مستمرة",
      features: ["تصميم الإعلانات", "استهداف الجمهور", "تحسين الأداء", "تقارير مفصلة"]
    },
    {
      title: "تحسين محركات البحث SEO",
      description: "تحسين موقعك ليظهر في النتائج الأولى لمحركات البحث",
      price: "2500 ريال شهرياً",
      duration: "3-6 أشهر",
      features: ["تحليل الكلمات المفتاحية", "تحسين المحتوى", "بناء الروابط", "التقارير الشهرية"]
    },
    {
      title: "التسويق بالمحتوى",
      description: "إنشاء محتوى جذاب يزيد من تفاعل عملائك",
      price: "2000 ريال شهرياً",
      duration: "خدمة شهرية",
      features: ["كتابة المقالات", "تصميم الجرافيك", "الفيديوهات التسويقية", "استراتيجية المحتوى"]
    }
  ];

  const marketingStats = [
    { icon: TrendingUp, title: "زيادة المبيعات", value: "300%", description: "متوسط زيادة المبيعات" },
    { icon: Users, title: "نمو الجمهور", value: "500%", description: "زيادة المتابعين" },
    { icon: Target, title: "دقة الاستهداف", value: "95%", description: "معدل الوصول للجمهور المستهدف" },
    { icon: BarChart3, title: "عائد الاستثمار", value: "400%", description: "متوسط عائد الاستثمار" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100" dir="rtl">
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
              <Megaphone className="h-5 w-5 text-green-600" />
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
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Megaphone className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">التسويق الرقمي المتقدم</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              نساعدك في بناء حضور قوي على الإنترنت وزيادة مبيعاتك من خلال استراتيجيات تسويق رقمي مبتكرة ومؤثرة
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">إنجازاتنا في أرقام</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {marketingStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">خدماتنا التسويقية</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {marketingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-green-50 pb-6">
                  <CardTitle className="text-2xl text-gray-800 mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-green-200">
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{service.price}</div>
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
                    text="ابدأ حملتك الآن"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">هل أنت مستعد لزيادة مبيعاتك؟</h3>
          <p className="text-xl mb-8 opacity-90">ابدأ رحلتك التسويقية معنا واحصل على استشارة مجانية</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد استشارة مجانية في التسويق الرقمي"
              variant="cta"
              text="استشارة مجانية"
              className="bg-white text-green-600 hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-green-600 px-8"
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
