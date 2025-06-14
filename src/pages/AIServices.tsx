
import { Bot, ArrowRight, CheckCircle, Home, Zap, BarChart3, Cog, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const AIServices = () => {
  const navigate = useNavigate();

  const aiServices = [
    {
      title: "أتمتة العمليات التجارية",
      description: "نساعدك في أتمتة المهام المتكررة وتحسين كفاءة العمل باستخدام الذكاء الاصطناعي",
      features: ["أتمتة إدخال البيانات", "معالجة الوثائق", "إدارة المخزون الذكية", "خدمة العملاء الآلية"]
    },
    {
      title: "تحليل البيانات والتقارير الذكية",
      description: "تحويل بياناتك إلى رؤى قابلة للتنفيذ باستخدام أدوات الذكاء الاصطناعي المتقدمة",
      features: ["تحليل البيانات المتقدم", "التقارير التفاعلية", "التنبؤ بالاتجاهات", "لوحات المعلومات الذكية"]
    },
    {
      title: "الذكاء الاصطناعي التوليدي",
      description: "استخدام أحدث تقنيات الذكاء الاصطناعي لإنتاج المحتوى والحلول الإبداعية",
      features: ["إنتاج المحتوى", "تصميم الصور", "كتابة النصوص", "الترجمة الذكية"]
    },
    {
      title: "تطوير الحلول المخصصة بالذكاء الاصطناعي",
      description: "حلول ذكاء اصطناعي مصممة خصيصاً لاحتياجات عملك الفريدة",
      features: ["روبوتات المحادثة", "أنظمة التوصية", "التعرف على الأنماط", "معالجة اللغة الطبيعية"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "تحسين الكفاءة",
      description: "زيادة الإنتاجية وتقليل الوقت المطلوب لإنجاز المهام"
    },
    {
      icon: BarChart3,
      title: "اتخاذ قرارات مدروسة",
      description: "رؤى دقيقة وتحليلات متقدمة لاتخاذ قرارات أفضل"
    },
    {
      icon: Cog,
      title: "تقليل التكاليف",
      description: "توفير في التكاليف التشغيلية من خلال الأتمتة الذكية"
    },
    {
      icon: Users,
      title: "تحسين تجربة العملاء",
      description: "خدمة عملاء محسنة وتفاعل أكثر ذكاءً مع العملاء"
    }
  ];

  const process = [
    {
      step: "01",
      title: "تحليل الاحتياجات",
      description: "نحلل عمليات عملك ونحدد المجالات التي يمكن تحسينها بالذكاء الاصطناعي"
    },
    {
      step: "02", 
      title: "تصميم الحل",
      description: "نصمم حلول ذكاء اصطناعي مخصصة تناسب احتياجاتك المحددة"
    },
    {
      step: "03",
      title: "التطوير والتنفيذ",
      description: "ننفذ الحلول بأحدث تقنيات الذكاء الاصطناعي مع ضمان الجودة"
    },
    {
      step: "04",
      title: "التدريب والدعم",
      description: "نقدم التدريب اللازم ودعم مستمر لضمان الاستفادة القصوى"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50" dir="rtl">
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
              <Bot className="h-5 w-5 text-purple-500" />
              <span className="font-semibold text-gray-800">خدمات الذكاء الاصطناعي</span>
            </div>
            <WhatsAppButton 
              phoneNumber="+966570513821"
              message="مرحباً، أريد الاستفسار عن خدمات الذكاء الاصطناعي"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Bot className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-purple-700 mb-6">خدمات الذكاء الاصطناعي</h1>
            <p className="text-xl text-purple-600 mb-12 leading-relaxed">
              نساعد الشركات والأفراد في الاستفادة من قوة الذكاء الاصطناعي لتطوير أعمالهم وزيادة كفاءتهم التشغيلية 
              باستخدام أحدث التقنيات والحلول المبتكرة
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">فوائد الذكاء الاصطناعي لأعمالك</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-purple-700 mb-2">{benefit.title}</h4>
                <p className="text-purple-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">خدماتنا في الذكاء الاصطناعي</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-purple-50 pb-6">
                  <CardTitle className="text-2xl text-purple-700 mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-purple-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                        <span className="text-purple-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber="+966570513821"
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

      {/* Process Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">كيف نعمل معك</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-purple-700 mb-2">{step.title}</h4>
                <p className="text-purple-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">جاهز لتحويل عملك بالذكاء الاصطناعي؟</h3>
          <p className="text-xl mb-8 opacity-90">تحدث معنا واكتشف كيف يمكن للذكاء الاصطناعي أن يرفع من كفاءة أعمالك</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966570513821"
              message="مرحباً، أريد استشارة مجانية حول الذكاء الاصطناعي لأعمالي"
              variant="cta"
              text="احصل على استشارة مجانية"
              className="bg-white text-purple-600 hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/custom-request')}
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8"
            >
              اطلب حل مخصص
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;
