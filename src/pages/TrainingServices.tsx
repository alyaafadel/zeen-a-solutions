import { GraduationCap, Users, Award, Clock, BookOpen, Target, CheckCircle, ArrowLeft, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const TrainingServices = () => {
  const navigate = useNavigate();

  const trainingPrograms = [
    {
      title: "دورات إدارة الأعمال",
      description: "برامج شاملة في إدارة المشاريع والقيادة",
      icon: Target,
      features: ["إدارة المشاريع", "القيادة الفعالة", "التخطيط الاستراتيجي", "إدارة الفرق"],
      duration: "3-6 أشهر",
      level: "متوسط إلى متقدم"
    },
    {
      title: "التدريب التقني",
      description: "مهارات البرمجة والتقنيات الحديثة",
      icon: BookOpen,
      features: ["البرمجة والتطوير", "قواعد البيانات", "الذكاء الاصطناعي", "الأمن السيبراني"],
      duration: "2-4 أشهر",
      level: "مبتدئ إلى متقدم"
    },
    {
      title: "التسويق الرقمي",
      description: "استراتيجيات التسويق الإلكتروني المتقدمة",
      icon: Target,
      features: ["إدارة المحتوى", "الإعلانات المدفوعة", "تحليل البيانات", "التسويق عبر المؤثرين"],
      duration: "1-3 أشهر",
      level: "مبتدئ إلى متوسط"
    },
    {
      title: "تطوير المهارات الشخصية",
      description: "تنمية القدرات الفردية والمهنية",
      icon: Users,
      features: ["مهارات التواصل", "إدارة الوقت", "التفكير النقدي", "العمل الجماعي"],
      duration: "1-2 شهر",
      level: "جميع المستويات"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "شهادات معتمدة",
      description: "احصل على شهادات معترف بها دولياً"
    },
    {
      icon: Users,
      title: "مدربون خبراء",
      description: "فريق من المتخصصين ذوي الخبرة العملية"
    },
    {
      icon: Clock,
      title: "مرونة في المواعيد",
      description: "جدولة مرنة تناسب ظروفك"
    },
    {
      icon: BookOpen,
      title: "مواد تدريبية حديثة",
      description: "محتوى محدث ومواكب لأحدث التطورات"
    }
  ];

  const companyInfo = {
    name: "Zeen Learning Academy",
    phone: "+966570513821",
    whatsapp: "+966570513821",
    location: "الرياض، المملكة العربية السعودية"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100" dir="rtl">
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
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{companyInfo.name}</h1>
                  <p className="text-sm text-gray-600">{companyInfo.location}</p>
                </div>
              </div>
            </div>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن برامج التدريب المهني"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <GraduationCap className="text-white h-12 w-12" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              {companyInfo.name}
            </h2>
            <p className="text-2xl text-gray-700 font-medium mb-6">برامج تدريبية متخصصة لتطوير المهارات المهنية</p>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            نقدم برامج تدريبية شاملة ومتخصصة تهدف إلى تطوير المهارات المهنية والشخصية، مع شهادات معتمدة ومدربين خبراء لضمان أفضل تجربة تعليمية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد التسجيل في برامج التدريب المهني"
              variant="cta"
              text="سجل الآن"
            />
            <Button variant="outline" size="lg" className="text-lg">
              <Calendar className="ml-2 h-5 w-5" />
              استعرض الجدول التدريبي
            </Button>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">برامجنا التدريبية</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              برامج متنوعة تغطي جميع التخصصات المهنية مع شهادات معتمدة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-indigo-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-800 mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-base">
                        {program.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>المدة: {program.duration}</span>
                    <span>المستوى: {program.level}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-90 text-white">
                    تفاصيل البرنامج
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
            <h3 className="text-4xl font-bold text-gray-800 mb-4">مميزات التدريب معنا</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نضمن لك أفضل تجربة تدريبية بمعايير عالمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">ابدأ رحلتك التدريبية اليوم</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            استثمر في مستقبلك المهني واحصل على المهارات التي تحتاجها لتحقيق أهدافك
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد معرفة المزيد عن برامج التدريب المتاحة"
              variant="cta"
              text="احجز استشارة مجانية"
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
          message="مرحباً، أريد الاستفسار عن برامج التدريب المهني"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default TrainingServices;
