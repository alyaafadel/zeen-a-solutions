import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Users, Target, Award, UserCheck, TrendingUp, Briefcase, MessageSquare, Globe, FileText, Calendar, Clock, Star, Languages, BookOpen, Shield, Users2, Megaphone, BarChart, Search, Smartphone, Code, Database, Monitor, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
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

  const translationServices = [
    {
      title: "ترجمة الوثائق الرسمية",
      description: "ترجمة احترافية للوثائق الرسمية جاهزة لختم المترجم القانوني للتقديم للسفارات والمنح والجهات الحكومية",
      icon: Shield,
      specialist: "مترجم قانوني معتمد",
      services: ["ترجمة الشهادات", "ترجمة العقود", "ترجمة الوثائق الحكومية", "ختم المترجم القانوني"],
      whatsappMessage: "مرحباً، أحتاج ترجمة وثائق رسمية مع ختم المترجم القانوني",
      duration: "1-3 أيام",
      price: "من 50 ريال/صفحة"
    },
    {
      title: "ترجمة الدراسات والأبحاث",
      description: "ترجمة أكاديمية متخصصة للدراسات والأبحاث العلمية بدقة عالية حسب المجال والاختصاص",
      icon: BookOpen,
      specialist: "مترجم أكاديمي متخصص",
      services: ["ترجمة الأبحاث العلمية", "ترجمة الأطروحات", "ترجمة المقالات الأكاديمية", "مراجعة لغوية"],
      whatsappMessage: "مرحباً، أحتاج ترجمة دراسة أو بحث أكاديمي متخصص",
      duration: "3-7 أيام",
      price: "من 80 ريال/صفحة"
    },
    {
      title: "ترجمة متعددة اللغات",
      description: "خدمات ترجمة شاملة من وإلى جميع اللغات الشائعة مع فريق فريلانس متخصص جاهز للتنفيذ",
      icon: Languages,
      specialist: "فريق مترجمين متعددي اللغات",
      services: ["الإنجليزية", "الفرنسية", "الألمانية", "التركية", "الصينية", "الروسية"],
      whatsappMessage: "مرحباً، أحتاج خدمات ترجمة متعددة اللغات",
      duration: "1-5 أيام",
      price: "من 40 ريال/صفحة"
    },
    {
      title: "ترجمة فورية وعاجلة",
      description: "خدمة ترجمة سريعة للحالات العاجلة مع ضمان الجودة والدقة في أقصر وقت ممكن",
      icon: Clock,
      specialist: "فريق الترجمة السريعة",
      services: ["ترجمة خلال 24 ساعة", "ترجمة فورية", "ترجمة عاجلة", "خدمة على مدار الساعة"],
      whatsappMessage: "مرحباً، أحتاج ترجمة عاجلة في أسرع وقت ممكن",
      duration: "12-24 ساعة",
      price: "من 100 ريال/صفحة"
    }
  ];

  const digitalMarketingServices = [
    {
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "إدارة شاملة لحساباتك على منصات التواصل الاجتماعي مع إنشاء محتوى جذاب واستراتيجيات تسويق فعالة",
      icon: Megaphone,
      specialist: "أخصائي وسائل التواصل الاجتماعي",
      services: ["إنشاء المحتوى", "جدولة المنشورات", "إدارة التفاعل", "تحليل الأداء"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن إدارة وسائل التواصل الاجتماعي",
      duration: "خدمة شهرية",
      price: "من 500 ريال/شهر"
    },
    {
      title: "الإعلانات الرقمية المدفوعة",
      description: "إنشاء وإدارة حملات إعلانية احترافية على جوجل وفيسبوك وإنستغرام مع تحسين مستمر للنتائج",
      icon: BarChart,
      specialist: "خبير الإعلانات المدفوعة",
      services: ["إعلانات جوجل", "إعلانات فيسبوك", "إعلانات إنستغرام", "تحليل وتحسين الحملات"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن الإعلانات الرقمية",
      duration: "2-4 أسابيع",
      price: "من 800 ريال + ميزانية الإعلان"
    },
    {
      title: "تحسين محركات البحث (SEO)",
      description: "تحسين موقعك الإلكتروني لمحركات البحث لزيادة الظهور والوصول لعملاء أكثر بطريقة طبيعية",
      icon: Search,
      specialist: "خبير تحسين محركات البحث",
      services: ["تحليل الكلمات المفتاحية", "تحسين المحتوى", "البناء التقني", "تقارير الأداء"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات SEO",
      duration: "3-6 أشهر",
      price: "من 600 ريال/شهر"
    },
    {
      title: "التسويق بالمحتوى",
      description: "إنشاء استراتيجيات محتوى فعالة مع كتابة مقالات ومحتوى تسويقي يجذب العملاء ويبني الثقة",
      icon: FileText,
      specialist: "أخصائي التسويق بالمحتوى",
      services: ["كتابة المقالات", "إنشاء المحتوى التسويقي", "استراتيجيات المحتوى", "التحليل والتحسين"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن التسويق بالمحتوى",
      duration: "مستمر شهرياً",
      price: "من 400 ريال/شهر"
    }
  ];

  const programmingServices = [
    {
      title: "تطوير المواقع الإلكترونية",
      description: "تصميم وتطوير مواقع إلكترونية احترافية ومتجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات",
      icon: Globe,
      specialist: "مطور مواقع متخصص",
      services: ["مواقع الشركات", "المتاجر الإلكترونية", "المواقع الشخصية", "لوحات الإدارة"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن تطوير موقع إلكتروني",
      duration: "2-6 أسابيع",
      price: "من 1000 ريال"
    },
    {
      title: "تطوير تطبيقات الجوال",
      description: "تطوير تطبيقات جوال احترافية لأنظمة iOS و Android مع تصميم عصري وتجربة مستخدم ممتازة",
      icon: Smartphone,
      specialist: "مطور تطبيقات الجوال",
      services: ["تطبيقات iOS", "تطبيقات Android", "تطبيقات هجينة", "تطبيقات الويب التقدمية"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن تطوير تطبيق جوال",
      duration: "6-12 أسبوع",
      price: "من 2500 ريال"
    },
    {
      title: "تطوير الأنظمة والبرمجيات",
      description: "تطوير أنظمة إدارية وبرمجيات مخصصة تناسب احتياجات عملك مع قواعد بيانات متقدمة",
      icon: Database,
      specialist: "مطور أنظمة متخصص",
      services: ["أنظمة إدارة المخزون", "أنظمة المحاسبة", "أنظمة CRM", "أنظمة ERP"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن تطوير نظام إداري",
      duration: "4-12 أسبوع",
      price: "من 3000 ريال"
    },
    {
      title: "الصيانة والتطوير المستمر",
      description: "خدمات صيانة وتطوير مستمرة للمواقع والتطبيقات مع دعم تقني على مدار الساعة وتحديثات دورية",
      icon: Zap,
      specialist: "فريق الدعم التقني",
      services: ["صيانة دورية", "تحديثات الأمان", "حل المشاكل التقنية", "تطوير ميزات جديدة"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات الصيانة والدعم",
      duration: "خدمة شهرية",
      price: "من 300 ريال/شهر"
    }
  ];

  const whyChooseUs = [
    "خبرة عملية في مجال الموارد البشرية لأكثر من 5 سنوات",
    "تقديم حلول مخصصة تناسب طبيعة كل عمل",
    "أسعار تنافسية مع جودة عالية في الخدمة",
    "مرونة في التعامل مع المشاريع الصغيرة والكبيرة",
    "دعم مستمر حتى بعد انتهاء المشروع",
    "تسليم في المواعيد المحددة مع ضمان الجودة"
  ];

  const companyInfo = {
    name: "خدمات الموارد البشرية المتخصصة",
    slogan: "شريكك في بناء فريق عمل متميز",
    phone: "+966123456789",
    email: "hr.services@gmail.com",
    whatsapp: "+966123456789",
    description: "متخصص في تقديم خدمات الموارد البشرية الشاملة للشركات والمؤسسات، مع خبرة واسعة في التوظيف والتدريب وإدارة الأداء."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <UserCheck className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{companyInfo.name}</h1>
                <p className="text-sm text-gray-600">{companyInfo.slogan}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <nav className="hidden md:flex space-x-8 space-x-reverse">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">الموارد البشرية</a>
                <a href="#translation" className="text-gray-700 hover:text-blue-600 transition-colors">الترجمة</a>
                <a href="#marketing" className="text-gray-700 hover:text-blue-600 transition-colors">التسويق الرقمي</a>
                <a href="#programming" className="text-gray-700 hover:text-blue-600 transition-colors">البرمجة</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
              </nav>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد الاستفسار عن خدماتكم"
                variant="header"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            خدمات <span className="text-blue-600">الموارد البشرية</span> و <span className="text-purple-600">الترجمة</span> و <span className="text-green-600">التسويق</span> و <span className="text-orange-600">البرمجة</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            نقدم خدمات متكاملة في الموارد البشرية والتوظيف، الترجمة المتخصصة، التسويق الرقمي، وتطوير المواقع والتطبيقات بأعلى معايير الجودة
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center max-w-4xl mx-auto">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6">
              <a href="#services">الموارد البشرية</a>
              <Users className="mr-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 px-6">
              <a href="#translation">الترجمة</a>
              <Languages className="mr-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-6">
              <a href="#marketing">التسويق الرقمي</a>
              <Megaphone className="mr-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-6">
              <a href="#programming">البرمجة</a>
              <Code className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* HR Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدمات الموارد البشرية</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الموارد البشرية المصممة خصيصاً لتلبية احتياجات شركتك
            </p>
          </div>
          
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

      {/* Translation Services Section */}
      <section id="translation" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدمات الترجمة المتخصصة</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ترجمة احترافية للوثائق الرسمية والأكاديمية من فريق متخصص جاهز للتنفيذ بأقصر وقت وأفضل جودة
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {translationServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-1">{service.title}</CardTitle>
                      <p className="text-sm text-purple-600 font-medium">{service.specialist}</p>
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

          {/* Translation Languages Section */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">اللغات المتاحة</h4>
                <p className="text-gray-600">فريق متخصص من المترجمين في جميع اللغات الشائعة</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "الإنجليزية", "الفرنسية", "الألمانية", "التركية", "الصينية", "الروسية",
                  "الإسبانية", "الإيطالية", "اليابانية", "الكورية", "الهندية", "الفارسية"
                ].map((language, index) => (
                  <div key={index} className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-purple-600 font-medium text-sm">{language}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <WhatsAppButton 
                  phoneNumber={companyInfo.whatsapp}
                  message="مرحباً، أحتاج خدمات ترجمة متعددة اللغات"
                  variant="cta"
                  text="استفسر عن لغة أخرى"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section id="marketing" className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدمات التسويق الرقمي</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نساعدك في الوصول لعملائك المحتملين وزيادة مبيعاتك من خلال استراتيجيات تسويق رقمي فعالة ومبتكرة
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {digitalMarketingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-1">{service.title}</CardTitle>
                      <p className="text-sm text-green-600 font-medium">{service.specialist}</p>
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

      {/* Programming Services Section */}
      <section id="programming" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدمات البرمجة والتطوير</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نطور لك مواقع وتطبيقات احترافية باستخدام أحدث التقنيات مع ضمان الجودة والأمان والسرعة
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {programmingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-1">{service.title}</CardTitle>
                      <p className="text-sm text-orange-600 font-medium">{service.specialist}</p>
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

          {/* Programming Technologies Section */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">التقنيات المستخدمة</h4>
                <p className="text-gray-600">نستخدم أحدث التقنيات والأدوات في التطوير</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "React", "Node.js", "PHP", "Python", "Flutter", "React Native",
                  "WordPress", "Laravel", "Vue.js", "MySQL", "MongoDB", "AWS"
                ].map((tech, index) => (
                  <div key={index} className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-orange-600 font-medium text-sm">{tech}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <WhatsAppButton 
                  phoneNumber={companyInfo.whatsapp}
                  message="مرحباً، أريد الاستفسار عن تقنية معينة أو مشروع خاص"
                  variant="cta"
                  text="استفسر عن مشروعك الخاص"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة في مجال الموارد البشرية مع التزام بالجودة والمواعيد
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-6">مميزاتنا التنافسية</h4>
              <div className="grid gap-4">
                {whyChooseUs.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">إنجازاتنا</h4>
                <p className="text-gray-600">أرقام تعكس جودة خدماتنا</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 text-sm">مشروع مكتمل</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600 text-sm">عميل راضٍ</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-gray-600 text-sm">سنوات خبرة</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">دعم مستمر</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">ابدأ مشروعك معنا</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية لخدمات الموارد البشرية، الترجمة، التسويق الرقمي، أو البرمجة
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">معلومات التواصل</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800">واتس آب (الأسرع)</h5>
                    <p className="text-gray-600">{companyInfo.whatsapp}</p>
                    <WhatsAppButton 
                      phoneNumber={companyInfo.whatsapp}
                      message="مرحباً، أريد الاستفسار عن خدماتكم المتنوعة"
                      variant="inline"
                      text="ابدأ المحادثة"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">الهاتف</h5>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">البريد الإلكتروني</h5>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">طبيعة العمل</h5>
                    <p className="text-gray-600">خدمات فريلانس متخصصة</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">احصل على عرض سعر مجاني</CardTitle>
                <CardDescription>
                  سنتواصل معك خلال 24 ساعة مع عرض سعر مفصل
                  <br />
                  <span className="text-green-600 font-medium">أو تواصل معنا مباشرة عبر الواتس آب للرد الفوري</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">الاسم</Label>
                    <Input id="firstName" placeholder="الاسم الأول" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input id="lastName" placeholder="اسم العائلة" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">اسم الشركة</Label>
                  <Input id="company" placeholder="اسم شركتكم" />
                </div>
                
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="البريد الإلكتروني للتواصل" />
                </div>
                
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" placeholder="رقم الهاتف مع رمز الدولة" />
                </div>
                
                <div>
                  <Label htmlFor="service">الخدمة المطلوبة</Label>
                  <select id="service" className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="">اختر الخدمة</option>
                    <optgroup label="الموارد البشرية">
                      <option value="recruitment">استقطاب وتوظيف المواهب</option>
                      <option value="structure">إعداد الهياكل التنظيمية</option>
                      <option value="training">التدريب وتطوير الموظفين</option>
                      <option value="performance">إدارة الأداء والتقييم</option>
                      <option value="consulting">استشارات الموارد البشرية</option>
                      <option value="contracts">إعداد العقود والوثائق</option>
                    </optgroup>
                    <optgroup label="الترجمة">
                      <option value="official-translation">ترجمة الوثائق الرسمية</option>
                      <option value="academic-translation">ترجمة الدراسات والأبحاث</option>
                      <option value="multi-language">ترجمة متعددة اللغات</option>
                      <option value="urgent-translation">ترجمة فورية وعاجلة</option>
                    </optgroup>
                    <optgroup label="التسويق الرقمي">
                      <option value="social-media">إدارة وسائل التواصل الاجتماعي</option>
                      <option value="paid-ads">الإعلانات الرقمية المدفوعة</option>
                      <option value="seo">تحسين محركات البحث</option>
                      <option value="content-marketing">التسويق بالمحتوى</option>
                    </optgroup>
                    <optgroup label="البرمجة والتطوير">
                      <option value="web-development">تطوير المواقع الإلكترونية</option>
                      <option value="mobile-apps">تطوير تطبيقات الجوال</option>
                      <option value="systems">تطوير الأنظمة والبرمجيات</option>
                      <option value="maintenance">الصيانة والتطوير المستمر</option>
                    </optgroup>
                    <option value="package">باقة شاملة متعددة الخدمات</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">تفاصيل المشروع</Label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                    placeholder="أخبرنا عن احتياجاتك وحجم مشروعك..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    إرسال الطلب
                  </Button>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
                    message="مرحباً، أريد عرض سعر لخدماتكم المتنوعة"
                    variant="form"
                    text="أو احصل على عرض سعر فوري عبر الواتس آب"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <UserCheck className="text-white h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">{companyInfo.name}</h5>
                  <p className="text-sm text-gray-400">{companyInfo.slogan}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                {companyInfo.description}
              </p>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد معرفة المزيد عن خدماتكم"
                variant="footer"
                text="تواصل معنا الآن"
              />
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">الموارد البشرية</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>استقطاب وتوظيف المواهب</li>
                <li>إعداد الهياكل التنظيمية</li>
                <li>التدريب والتطوير</li>
                <li>إدارة الأداء</li>
                <li>الاستشارات الإدارية</li>
                <li>إعداد العقود</li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-4">الترجمة والتسويق</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>ترجمة الوثائق الرسمية</li>
                <li>ترجمة الأبحاث الأكاديمية</li>
                <li>إدارة وسائل التواصل</li>
                <li>الإعلانات المدفوعة</li>
                <li>تحسين محركات البحث</li>
                <li>التسويق بالمحتوى</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">البرمجة والتواصل</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>تطوير المواقع الإلكترونية</li>
                <li>تطبيقات الجوال</li>
                <li>الأنظمة الإدارية</li>
                <li>الصيانة والدعم</li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <MessageSquare className="h-4 w-4" />
                  <span>{companyInfo.whatsapp}</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <Mail className="h-4 w-4" />
                  <span>{companyInfo.email}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {companyInfo.name}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدماتكم المتنوعة"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default Index;
