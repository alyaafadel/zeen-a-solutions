
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Users, Target, Award, UserCheck, TrendingUp, Briefcase, MessageSquare, Globe, FileText, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useNavigate } from "react-router-dom";

const HRServices = () => {
  const navigate = useNavigate();

  const mainServices = [
    {
      title: "استقطاب وتوظيف المواهب",
      description: "البحث عن أفضل المواهب والكفاءات المناسبة لشركتك، مع فحص شامل للمهارات والخبرات وضمان الجودة في الاختيار",
      icon: Users,
      specialist: "خبير التوظيف والاستقطاب",
      services: ["البحث عن المواهب", "فحص وتقييم المرشحين", "إجراء المقابلات", "التحقق من المراجع"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات التوظيف والاستقطاب",
      duration: "2-4 أسابيع",
      price: "من 500 ريال"
    },
    {
      title: "إعداد الهياكل التنظيمية",
      description: "تصميم وبناء الهياكل التنظيمية المناسبة لطبيعة عملك، مع تحديد الأدوار والمسؤوليات وخطوط التواصل",
      icon: Target,
      specialist: "خبير التنظيم الإداري",
      services: ["تصميم الهياكل التنظيمية", "تحديد الأدوار والمسؤوليات", "إعداد الوصف الوظيفي", "تحسين سير العمل"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات الهياكل التنظيمية",
      duration: "1-2 أسبوع",
      price: "من 300 ريال"
    },
    {
      title: "التدريب وتطوير الموظفين",
      description: "برامج تدريبية مخصصة لتطوير مهارات فريق العمل وزيادة الإنتاجية، مع متابعة مستمرة لقياس التقدم",
      icon: TrendingUp,
      specialist: "مدرب الموارد البشرية",
      services: ["تصميم البرامج التدريبية", "التدريب عن بُعد", "تقييم المهارات", "خطط التطوير الشخصي"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات التدريب والتطوير",
      duration: "1-4 أسابيع",
      price: "من 400 ريال"
    },
    {
      title: "إدارة الأداء والتقييم",
      description: "نظم متطورة لقياس وتقييم أداء الموظفين، مع إعداد تقارير شاملة وخطط تحسين الأداء المستمر",
      icon: Award,
      specialist: "خبير تقييم الأداء",
      services: ["أنظمة تقييم الأداء", "تقارير الأداء", "خطط التحسين", "مراجعات دورية"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات إدارة الأداء",
      duration: "2-3 أسابيع",
      price: "من 600 ريال"
    },
    {
      title: "استشارات الموارد البشرية",
      description: "استشارات شاملة في جميع جوانب إدارة الموارد البشرية، من السياسات واللوائح إلى حل المشكلات الإدارية",
      icon: UserCheck,
      specialist: "مستشار الموارد البشرية",
      services: ["وضع السياسات", "حل المشكلات الإدارية", "تحسين بيئة العمل", "الامتثال القانوني"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن الاستشارات الإدارية",
      duration: "حسب المشروع",
      price: "من 200 ريال"
    },
    {
      title: "إعداد العقود والوثائق",
      description: "صياغة عقود العمل والوثائق الرسمية بما يتوافق مع القوانين المحلية، مع ضمان حماية حقوق جميع الأطراف",
      icon: FileText,
      specialist: "أخصائي العقود والوثائق",
      services: ["عقود العمل", "اللوائح الداخلية", "الوثائق القانونية", "مراجعة العقود"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات إعداد العقود",
      duration: "3-7 أيام",
      price: "من 150 ريال"
    }
  ];

  const companyInfo = {
    name: "خدمات الموارد البشرية المتخصصة",
    phone: "+966123456789",
    email: "hr.services@gmail.com",
    whatsapp: "+966123456789"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 space-x-reverse"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>العودة للرئيسية</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="text-white h-5 w-5" />
                </div>
                <h1 className="text-xl font-bold text-gray-800">خدمات الموارد البشرية</h1>
              </div>
            </div>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدمات الموارد البشرية"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            خدمات <span className="text-blue-600">الموارد البشرية</span> الشاملة
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات الموارد البشرية المصممة خصيصاً لتلبية احتياجات شركتك
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-1">{service.title}</CardTitle>
                      <p className="text-sm text-blue-600 font-medium">{service.specialist}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">المدة: {service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-green-600">{service.price}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">ما نقدمه:</h4>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.services.map((item, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
                    message={service.whatsappMessage}
                    variant="service"
                    text="اطلب هذه الخدمة"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">جاهز لبدء مشروعك؟</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية في خدمات الموارد البشرية
          </p>
          
          <WhatsAppButton 
            phoneNumber={companyInfo.whatsapp}
            message="مرحباً، أريد الاستفسار عن خدمات الموارد البشرية بالتفصيل"
            variant="cta"
            text="ابدأ الآن - تواصل معنا"
          />
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدمات الموارد البشرية"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default HRServices;
