
import { ArrowLeft, Star, Lightbulb, Users, Target, CheckCircle, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const CustomSolutions = () => {
  const navigate = useNavigate();

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    whatsapp: "+966570513821"
  };

  const features = [
    {
      title: "تحليل شامل للاحتياجات",
      description: "ندرس وضع شركتك الحالي ونحدد الفجوات والفرص المتاحة",
      icon: Target
    },
    {
      title: "حلول مبتكرة ومخصصة",
      description: "نطور حلول فريدة تناسب طبيعة عملك ومتطلباتك الخاصة",
      icon: Lightbulb
    },
    {
      title: "فريق متعدد التخصصات",
      description: "نجمع أفضل الخبراء من مختلف المجالات لخدمة مشروعك",
      icon: Users
    },
    {
      title: "تنفيذ مراقب ومتابعة مستمرة",
      description: "نضمن جودة التنفيذ ونقدم الدعم المستمر لضمان النجاح",
      icon: CheckCircle
    }
  ];

  const solutions = [
    {
      title: "التحول الرقمي الشامل",
      description: "نساعدك في رقمنة عملياتك وتحديث أنظمتك لمواكبة العصر الرقمي",
      icon: "🔄"
    },
    {
      title: "استراتيجيات النمو المخصصة",
      description: "نضع خطط نمو مدروسة ومصممة خصيصاً لتحقيق أهدافك",
      icon: "📈"
    },
    {
      title: "تطوير الأنظمة الإدارية",
      description: "نبني أنظمة إدارية متكاملة تلبي احتياجات شركتك بدقة",
      icon: "⚙️"
    },
    {
      title: "حلول التكامل والأتمتة",
      description: "نربط أنظمتك المختلفة ونؤتمت العمليات لزيادة الكفاءة",
      icon: "🔗"
    },
    {
      title: "استشارات الابتكار",
      description: "نساعدك في ابتكار منتجات وخدمات جديدة تميزك عن المنافسين",
      icon: "💡"
    },
    {
      title: "حلول الأمان السيبراني",
      description: "نحمي بياناتك وأنظمتك بأحدث تقنيات الأمان المتقدمة",
      icon: "🛡️"
    }
  ];

  const process = [
    {
      step: "01",
      title: "الاستشارة المجانية",
      description: "نبدأ بجلسة استشارية مجانية لفهم احتياجاتك وتحدياتك"
    },
    {
      step: "02", 
      title: "التحليل والدراسة",
      description: "نقوم بتحليل شامل لوضعك الحالي وتحديد الفرص المتاحة"
    },
    {
      step: "03",
      title: "تصميم الحل",
      description: "نطور حل مخصص يناسب احتياجاتك وميزانيتك"
    },
    {
      step: "04",
      title: "التنفيذ والمتابعة",
      description: "ننفذ الحل بعناية ونقدم الدعم المستمر لضمان النجاح"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg border">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h1 className="text-lg font-bold text-gray-800">{companyInfo.name}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="h-10 w-10 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold mb-6">الحلول المخصصة</h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8 opacity-90">
            حلول مبتكرة ومخصصة تماماً لتلبية احتياجات شركتك الفريدة. نحن لا نقدم حلول جاهزة، بل نبتكر حلول تناسبك أنت تحديداً
          </p>
          <WhatsAppButton 
            phoneNumber={companyInfo.whatsapp}
            message="مرحباً، أريد الاستفسار عن الحلول المخصصة"
            variant="cta"
            text="احصل على استشارة مجانية"
            className="bg-white text-pink-600 hover:bg-gray-100 border-0"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">لماذا تختار حلولنا المخصصة؟</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4 border-pink-500">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">أنواع الحلول المخصصة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-center">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">عملية العمل</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">نتائج مثبتة</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">حل مخصص</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-gray-600">تحسن الكفاءة</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">دعم مستمر</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لحل مخصص يناسب شركتك؟</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            لا تضيع وقتك في حلول لا تناسبك. احصل على حل مصمم خصيصاً لك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد حل مخصص لشركتي"
              variant="cta"
              text="ابدأ مشروعك الآن"
              className="bg-white text-pink-600 hover:bg-gray-100 border-0"
            />
            <Button
              onClick={() => navigate('/custom-request')}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-pink-600"
            >
              املأ نموذج التفاصيل
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;
