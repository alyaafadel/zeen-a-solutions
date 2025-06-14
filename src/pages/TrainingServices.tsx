
import { GraduationCap, Users, Award, Clock, BookOpen, Target, CheckCircle, ArrowLeft, MessageSquare, Calendar, Languages, Megaphone, Code, Truck, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const TrainingServices = () => {
  const navigate = useNavigate();

  const trainingPrograms = [
    {
      title: "تدريب الموارد البشرية",
      description: "برامج شاملة في إدارة الموارد البشرية والتوظيف",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      features: ["استراتيجيات التوظيف", "إدارة الأداء", "تطوير السياسات", "قوانين العمل"],
      duration: "4-6 أسابيع",
      level: "متوسط إلى متقدم",
      category: "إدارة الأعمال"
    },
    {
      title: "تدريب الترجمة المهنية",
      description: "تطوير مهارات الترجمة والتحرير اللغوي",
      icon: Languages,
      color: "from-purple-500 to-purple-600",
      features: ["تقنيات الترجمة", "الترجمة المتخصصة", "استخدام أدوات الترجمة", "مراجعة النصوص"],
      duration: "3-5 أسابيع",
      level: "متوسط إلى متقدم",
      category: "اللغات والترجمة"
    },
    {
      title: "تدريب التسويق الرقمي",
      description: "استراتيجيات التسويق الإلكتروني والإعلانات",
      icon: Megaphone,
      color: "from-green-500 to-green-600",
      features: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحليل البيانات", "كتابة المحتوى"],
      duration: "2-4 أسابيع",
      level: "مبتدئ إلى متقدم",
      category: "تسويق رقمي"
    },
    {
      title: "تدريب البرمجة والتطوير",
      description: "مهارات البرمجة والتقنيات الحديثة",
      icon: Code,
      color: "from-orange-500 to-orange-600",
      features: ["لغات البرمجة", "تطوير المواقع", "تطبيقات الجوال", "قواعد البيانات"],
      duration: "6-12 أسبوع",
      level: "مبتدئ إلى متقدم",
      category: "تقنية المعلومات"
    },
    {
      title: "تدريب الخدمات اللوجستية",
      description: "إدارة سلسلة التوريد والعمليات اللوجستية",
      icon: Truck,
      color: "from-teal-500 to-teal-600",
      features: ["إدارة المخازن", "تخطيط النقل", "سلسلة التوريد", "خدمات 3PL"],
      duration: "3-6 أسابيع",
      level: "متوسط إلى متقدم",
      category: "لوجستيات وتوريد"
    },
    {
      title: "تدريب التوجيه المهني",
      description: "مهارات التوجيه المهني وكتابة السيرة الذاتية",
      icon: Briefcase,
      color: "from-emerald-500 to-emerald-600",
      features: ["كتابة السيرة الذاتية", "التحضير للمقابلات", "التخطيط المهني", "البحث عن عمل"],
      duration: "2-3 أسابيع",
      level: "جميع المستويات",
      category: "تطوير مهني"
    },
    {
      title: "تدريب إدارة المشاريع",
      description: "مبادئ وأدوات إدارة المشاريع الحديثة",
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
      features: ["تخطيط المشاريع", "إدارة المخاطر", "القيادة الفعالة", "أدوات إدارة المشاريع"],
      duration: "4-8 أسابيع",
      level: "متوسط إلى متقدم",
      category: "إدارة الأعمال"
    },
    {
      title: "تدريب المهارات الشخصية",
      description: "تنمية القدرات الفردية والمهنية",
      icon: Users,
      color: "from-pink-500 to-pink-600",
      features: ["مهارات التواصل", "إدارة الوقت", "التفكير النقدي", "العمل الجماعي"],
      duration: "1-2 أسبوع",
      level: "جميع المستويات",
      category: "تطوير شخصي"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "شهادات معتمدة",
      description: "احصل على شهادات معترف بها محلياً ودولياً"
    },
    {
      icon: Users,
      title: "مدربون متخصصون",
      description: "فريق من الخبراء في كل مجال تخصص"
    },
    {
      icon: Clock,
      title: "جدولة مرنة",
      description: "مواعيد تناسب ظروفك الشخصية والمهنية"
    },
    {
      icon: BookOpen,
      title: "مواد تدريبية حديثة",
      description: "محتوى محدث ومواكب لأحدث التطورات"
    }
  ];

  const trainingMethods = [
    {
      title: "التدريب الحضوري",
      description: "ورش عمل تفاعلية في مقر الشركة",
      icon: "🏢"
    },
    {
      title: "التدريب الافتراضي",
      description: "دورات عبر الإنترنت مع تفاعل مباشر",
      icon: "💻"
    },
    {
      title: "التدريب المدمج",
      description: "جمع بين التدريب الحضوري والافتراضي",
      icon: "🔄"
    },
    {
      title: "التدريب المخصص",
      description: "برامج مصممة خصيصاً لاحتياجاتك",
      icon: "🎯"
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
            <p className="text-2xl text-gray-700 font-medium mb-6">برامج تدريبية متخصصة في جميع المجالات المهنية</p>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            نقدم برامج تدريبية شاملة ومتخصصة في جميع مجالات خدماتنا، بقيادة فريق من الخبراء المتخصصين في كل مجال لضمان أفضل تجربة تعليمية وتطبيقية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد التسجيل في برامج التدريب المهني المتخصصة"
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
            <h3 className="text-4xl font-bold text-gray-800 mb-4">برامجنا التدريبية المتخصصة</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              برامج متنوعة تغطي جميع مجالات خدماتنا مع شهادات معتمدة ومدربين خبراء
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">{program.category}</div>
                      <CardTitle className="text-xl text-gray-800 mb-2">{program.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {program.description}
                  </CardDescription>
                  <div className="flex justify-between text-sm text-gray-500 mt-4 pt-4 border-t">
                    <span>المدة: {program.duration}</span>
                    <span>المستوى: {program.level}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white`}>
                    تفاصيل البرنامج
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">طرق التدريب المتنوعة</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر طرق تدريب متعددة تناسب جميع الاحتياجات والظروف
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingMethods.map((method, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/50">
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
            استثمر في مستقبلك المهني واحصل على المهارات التي تحتاجها لتحقيق أهدافك في مجالك المفضل
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد معرفة المزيد عن برامج التدريب المتخصصة المتاحة"
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
          message="مرحباً، أريد الاستفسار عن برامج التدريب المهني المتخصصة"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default TrainingServices;
