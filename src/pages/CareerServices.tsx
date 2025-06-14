
import { FileText, Users, Target, Briefcase, TrendingUp, CheckCircle, ArrowLeft, MessageSquare, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const CareerServices = () => {
  const navigate = useNavigate();

  const careerServices = [
    {
      title: "كتابة السيرة الذاتية",
      description: "سير ذاتية احترافية مصممة لتبرز خبراتك ومهاراتك",
      icon: FileText,
      features: ["السيرة الذاتية التقليدية", "السيرة الذاتية الإبداعية", "السيرة الذاتية الأكاديمية", "السيرة الذاتية التقنية"],
      duration: "3-5 أيام عمل",
      level: "جميع المستويات المهنية"
    },
    {
      title: "التحضير للمقابلات",
      description: "تدريب شامل لإجراء مقابلات العمل بثقة ونجاح",
      icon: Users,
      features: ["تقنيات المقابلة", "الأسئلة الشائعة", "لغة الجسد", "المقابلات الافتراضية"],
      duration: "جلسات أسبوعية",
      level: "مبتدئ إلى متقدم"
    },
    {
      title: "التوجيه المهني",
      description: "استشارات مهنية لتطوير مسارك الوظيفي",
      icon: Target,
      features: ["تخطيط المسار المهني", "تحديد الأهداف", "تطوير المهارات", "استراتيجيات النمو"],
      duration: "برامج مخصصة",
      level: "جميع المراحل المهنية"
    },
    {
      title: "البحث عن عمل",
      description: "استراتيجيات فعالة للعثور على الوظيفة المناسبة",
      icon: Briefcase,
      features: ["البحث الذكي عن الوظائف", "بناء الشبكات المهنية", "تحسين الملف الشخصي", "متابعة الطلبات"],
      duration: "دعم مستمر",
      level: "الباحثين عن عمل"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "خبرة متخصصة",
      description: "فريق من خبراء الموارد البشرية والتوجيه المهني"
    },
    {
      icon: Target,
      title: "نهج مخصص",
      description: "خدمات مصممة خصيصاً لتناسب احتياجاتك المهنية"
    },
    {
      icon: TrendingUp,
      title: "نتائج مؤكدة",
      description: "معدل نجاح عالي في الحصول على المقابلات والوظائف"
    },
    {
      icon: Users,
      title: "متابعة شخصية",
      description: "دعم ومتابعة مستمرة حتى تحقق أهدافك المهنية"
    }
  ];

  const companyInfo = {
    name: "Zeen Career Solutions",
    phone: "+966570513821",
    whatsapp: "+966570513821",
    location: "الرياض، المملكة العربية السعودية"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 space-x-reverse"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>العودة للرئيسية</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{companyInfo.name}</h1>
                  <p className="text-sm text-gray-600">{companyInfo.location}</p>
                </div>
              </div>
            </div>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدمات التوجيه المهني وكتابة السيرة الذاتية"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Briefcase className="text-white h-12 w-12" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              {companyInfo.name}
            </h2>
            <p className="text-2xl text-gray-700 font-medium mb-6">شريكك في بناء مستقبل مهني ناجح</p>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            نقدم خدمات شاملة لتطوير مسارك المهني من كتابة السيرة الذاتية الاحترافية إلى التحضير للمقابلات والتوجيه المهني، لنساعدك في الوصول إلى الوظيفة التي تحلم بها
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد البدء في تطوير مساري المهني"
              variant="cta"
              text="ابدأ رحلتك المهنية"
            />
            <Button variant="outline" size="lg" className="text-lg">
              <Calendar className="ml-2 h-5 w-5" />
              احجز استشارة مجانية
            </Button>
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا المهنية</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              حلول شاملة لتطوير مسارك المهني وتحقيق أهدافك الوظيفية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {careerServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-emerald-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-800 mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>المدة: {service.duration}</span>
                    <span>المستوى: {service.level}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-white">
                    اطلب الخدمة الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار خدماتنا المهنية؟</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نؤمن بأن كل شخص يستحق وظيفة أحلامه
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">نتائج تتحدث عن نفسها</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              إحصائيات نجاح عملائنا في الحصول على الوظائف المناسبة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600">معدل الحصول على مقابلات</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
              <div className="text-gray-600">معدل نجاح المقابلات</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">سيرة ذاتية مكتوبة</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">عميل حصل على وظيفة</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">ابدأ رحلتك نحو الوظيفة المثالية</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            لا تدع الفرص تفوتك. احصل على خدمات مهنية متخصصة تضمن لك التميز في سوق العمل
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد البدء في تطوير سيرتي الذاتية ومساري المهني"
              variant="cta"
              text="احصل على استشارة مجانية"
            />
            <div className="flex items-center space-x-2 space-x-reverse text-white/80">
              <MessageSquare className="h-5 w-5" />
              <span>أو اتصل على: {companyInfo.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدمات التوجيه المهني وكتابة السيرة الذاتية"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default CareerServices;
