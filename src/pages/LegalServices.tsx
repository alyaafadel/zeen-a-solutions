
import { Scale, ArrowRight, CheckCircle, Home, FileText, Gavel, Shield, Users, Building, BookOpen, AlertTriangle, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const LegalServices = () => {
  const navigate = useNavigate();

  const legalServices = [
    {
      title: "تأسيس الشركات والكيانات القانونية",
      description: "خدمات شاملة لتأسيس جميع أنواع الشركات والمؤسسات",
      features: ["اختيار الشكل القانوني المناسب", "إعداد عقد التأسيس", "تسجيل السجل التجاري", "الحصول على التراخيص اللازمة"]
    },
    {
      title: "صياغة ومراجعة العقود التجارية",
      description: "إعداد ومراجعة جميع أنواع العقود والاتفاقيات التجارية",
      features: ["عقود البيع والشراء", "اتفاقيات الشراكة", "عقود العمل والتوظيف", "عقود الخدمات والاستشارات"]
    },
    {
      title: "الامتثال التنظيمي والقانوني",
      description: "ضمان امتثال الشركات للقوانين واللوائح المحلية والدولية",
      features: ["مراجعة السياسات الداخلية", "التدقيق القانوني", "تحديث الإجراءات", "التدريب على الامتثال"]
    },
    {
      title: "حل النزاعات التجارية",
      description: "خدمات متخصصة في حل النزاعات والخلافات التجارية",
      features: ["التفاوض والوساطة", "التحكيم التجاري", "الاستشارات القضائية", "إعداد المرافعات القانونية"]
    },
    {
      title: "حماية الملكية الفكرية",
      description: "حماية وتسجيل حقوق الملكية الفكرية للشركات",
      features: ["تسجيل العلامات التجارية", "حماية براءات الاختراع", "حقوق الطبع والنشر", "اتفاقيات عدم الإفشاء"]
    },
    {
      title: "الاستشارات الضريبية والمالية",
      description: "استشارات قانونية متخصصة في الشؤون الضريبية والمالية",
      features: ["التخطيط الضريبي", "مراجعة الإقرارات الضريبية", "التعامل مع الهيئات الضريبية", "الاستشارات المصرفية"]
    },
    {
      title: "قانون العمل والموارد البشرية",
      description: "خدمات قانونية شاملة في مجال علاقات العمل",
      features: ["صياغة لوائح العمل", "حل نزاعات العمل", "الاستشارات في التوظيف", "التدريب على قوانين العمل"]
    },
    {
      title: "الاستشارات التنظيمية والحوكمة",
      description: "تطوير أنظمة الحوكمة وإدارة المخاطر القانونية",
      features: ["تطوير هياكل الحوكمة", "إدارة المخاطر القانونية", "السياسات والإجراءات", "أنظمة الرقابة الداخلية"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Scale,
      title: "خبرة قانونية متخصصة",
      description: "فريق من المحامين والاستشاريين القانونيين ذوي الخبرة الواسعة"
    },
    {
      icon: Shield,
      title: "حماية شاملة",
      description: "نضمن الحماية القانونية الكاملة لأعمالكم ومصالحكم التجارية"
    },
    {
      icon: Users,
      title: "خدمة مخصصة",
      description: "حلول قانونية مصممة خصيصاً لطبيعة عملكم ومتطلباتكم"
    }
  ];

  const process = [
    {
      icon: FileText,
      title: "تقييم الوضع القانوني",
      description: "نحلل وضعكم القانوني الحالي ونحدد الاحتياجات"
    },
    {
      icon: BookOpen,
      title: "وضع الاستراتيجية القانونية",
      description: "نطور استراتيجية قانونية شاملة تناسب أهدافكم"
    },
    {
      icon: Gavel,
      title: "التنفيذ والمتابعة",
      description: "ننفذ الحلول القانونية ونتابع تطبيقها بدقة"
    },
    {
      icon: Shield,
      title: "الدعم المستمر",
      description: "نقدم الدعم والمشورة القانونية المستمرة"
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
              <Scale className="h-5 w-5 text-brand-purple" />
              <span className="font-semibold text-gray-800">الاستشارات القانونية للشركات</span>
            </div>
            <WhatsAppButton 
              phoneNumber="+966570513821"
              message="مرحباً، أريد الاستفسار عن الاستشارات القانونية للشركات"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-purple rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Scale className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-brand-purple mb-6">الاستشارات القانونية للشركات</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              نقدم خدمات قانونية متخصصة وشاملة للشركات والمؤسسات مع فريق من المحامين والاستشاريين القانونيين ذوي الخبرة الواسعة في القانون التجاري والشركات
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-12">لماذا تختار خدماتنا القانونية؟</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brand-purple mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-12">خدماتنا القانونية المتخصصة</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {legalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-brand-purple/5 pb-6">
                  <CardTitle className="text-2xl text-brand-purple mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-brand-purple flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber="+966570513821"
                    message={`مرحباً، أريد الاستفسار عن ${service.title}`}
                    variant="service"
                    text="اطلب الخدمة الآن"
                    className="w-full bg-gradient-purple hover:bg-brand-purple-dark text-white"
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
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-12">كيف نعمل</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative">
                  <step.icon className="h-8 w-8 text-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-purple-dark text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-brand-purple mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">تحتاج استشارة قانونية متخصصة؟</h3>
          <p className="text-xl mb-8 opacity-90">تحدث مع فريقنا القانوني المتخصص واحصل على الحماية القانونية الكاملة لأعمالك</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966570513821"
              message="مرحباً، أحتاج استشارة قانونية متخصصة للشركات"
              variant="cta"
              text="احصل على استشارة مجانية"
              className="bg-white text-brand-purple hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/custom-request')}
              className="border-white text-white hover:bg-white hover:text-brand-purple px-8"
            >
              أرسل طلب استشارة
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalServices;
