
import { Users, ArrowRight, CheckCircle, Home, User, FileText, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const HRServices = () => {
  const navigate = useNavigate();

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
              <Users className="h-5 w-5 text-sky-500" />
              <span className="font-semibold text-gray-800">خدمات الموارد البشرية</span>
            </div>
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد الاستفسار عن خدمات الموارد البشرية"
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
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-sky-700 mb-6">خدمات الموارد البشرية</h1>
            <p className="text-xl text-sky-600 mb-12 leading-relaxed">
              نساعد الشركات في إدارة وتطوير مواردها البشرية بأحدث الممارسات العالمية وأفضل الحلول المتخصصة
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">لماذا تختار خدماتنا؟</h2>
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
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">خدماتنا المتخصصة</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hrServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-sky-50 pb-6">
                  <CardTitle className="text-2xl text-sky-700 mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-sky-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-sky-200">
                    <div className="text-right">
                      <div className="text-sm text-sky-500 flex items-center">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">استثمر في مواردك البشرية</h3>
          <p className="text-xl mb-8 opacity-90">فريقنا المتخصص جاهز لمساعدتك في تطوير إدارة الموارد البشرية في شركتك</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد استشارة مجانية حول خدمات الموارد البشرية"
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

export default HRServices;
