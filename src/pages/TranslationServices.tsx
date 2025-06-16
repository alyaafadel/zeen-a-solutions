
import { Languages, ArrowRight, CheckCircle, Home, Globe, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const TranslationServices = () => {
  const navigate = useNavigate();

  const translationServices = [
    {
      title: "ترجمة الوثائق الرسمية",
      description: "ترجمة معتمدة للوثائق الحكومية والقانونية",
      duration: "24-48 ساعة",
      features: ["شهادات الميلاد", "عقود الزواج", "الشهادات الجامعية", "التقارير الطبية"]
    },
    {
      title: "ترجمة الأبحاث الأكاديمية",
      description: "ترجمة متخصصة للأبحاث والدراسات العلمية",
      duration: "3-5 أيام",
      features: ["الأبحاث العلمية", "الرسائل الجامعية", "المقالات الأكاديمية", "المؤتمرات العلمية"]
    },
    {
      title: "الترجمة التجارية",
      description: "ترجمة المواد التسويقية والعقود التجارية",
      duration: "2-3 أيام",
      features: ["العقود التجارية", "المواد التسويقية", "التقارير المالية", "خطط الأعمال"]
    },
    {
      title: "الترجمة العاجلة",
      description: "خدمة ترجمة سريعة للحالات الطارئة",
      duration: "6-12 ساعة",
      features: ["ترجمة فورية", "دعم على مدار الساعة", "مراجعة سريعة", "تسليم عاجل"]
    }
  ];

  const supportedLanguages = [
    "العربية", "الإنجليزية", "الفرنسية", "الألمانية", "الإسبانية", "الإيطالية", "البرتغالية", "الروسية"
  ];

  const services = [
    { title: "الموارد البشرية", icon: Home, route: "/hr-services" },
    { title: "خدمات الترجمة", icon: Languages, route: "/translation-services" },
    { title: "التسويق الرقمي", icon: Home, route: "/digital-marketing" },
    { title: "البرمجة والتطوير", icon: Home, route: "/programming-services" },
    { title: "الذكاء الاصطناعي", icon: Home, route: "/ai-services" },
    { title: "الخدمات اللوجستية", icon: Home, route: "/logistics-services" },
    { title: "التدريب المهني", icon: Home, route: "/training-services" },
    { title: "التطوير المهني", icon: Home, route: "/career-services" },
    { title: "الحلول المخصصة", icon: Home, route: "/custom-solutions" }
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "شريكك المتخصص في إنجاز المهام والخدمات",
    phone: "+966570513821",
    email: "join@zeenaplus.solutions",
    whatsapp: "+966570513821",
    linkedin: "https://www.linkedin.com/company/zeen-a-solutions-establishment/",
    location: "الرياض، المملكة العربية السعودية"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 space-x-reverse text-slate-600 hover:text-slate-700"
              >
                <Home className="h-4 w-4" />
                <span>الرئيسية</span>
              </Button>
              <span className="text-slate-400">/</span>
              <Languages className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-slate-700">خدمات الترجمة</span>
            </div>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدمات الترجمة"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Languages className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-700 mb-6">خدمات الترجمة الاحترافية</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              نقدم خدمات ترجمة احترافية ومعتمدة للوثائق الرسمية والأكاديمية والتجارية بأعلى معايير الجودة والدقة
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-700 mb-12">خدماتنا المتخصصة</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {translationServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-6">
                  <CardTitle className="text-2xl text-slate-700 mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-blue-200">
                    <div className="text-right">
                      <div className="text-sm text-blue-600 flex items-center">
                        <Clock className="h-4 w-4 ml-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
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

      {/* Supported Languages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-slate-700 mb-4">اللغات المدعومة</h3>
            <p className="text-xl text-slate-600">نقدم خدمات الترجمة بين مختلف اللغات العالمية</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {supportedLanguages.map((language, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-slate-700">{language}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">هل تحتاج إلى ترجمة احترافية؟</h3>
          <p className="text-xl mb-8 opacity-90">تواصل معنا الآن واحصل على عرض سعر مخصص</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد عرض سعر لخدمات الترجمة"
              variant="cta"
              text="احصل على عرض سعر"
              className="bg-white text-blue-600 hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
            >
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Button>
          </div>
        </div>
      </section>

      <Footer services={services} companyInfo={companyInfo} />
    </div>
  );
};

export default TranslationServices;
