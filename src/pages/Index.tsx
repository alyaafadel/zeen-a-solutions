import { Users, Languages, Megaphone, Code, Truck, ArrowRight, CheckCircle, MessageSquare, GraduationCap, Linkedin, Briefcase, Info, UserPlus, Phone, Settings, Star, Mail, Zap, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "الموارد البشرية",
      brandName: "Zeen HR Solutions",
      logo: "👥",
      description: "خدمات شاملة في التوظيف والتدريب وإدارة الأداء لبناء فريق أحلامك",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/hr-services",
      features: ["استقطاب المواهب", "الهياكل التنظيمية", "التدريب والتطوير", "إدارة الأداء"]
    },
    {
      title: "خدمات الترجمة",
      brandName: "Zeen Translation Hub",
      logo: "🌐",
      description: "ترجمة احترافية ودقيقة للوثائق الرسمية والأكاديمية بجودة عالية",
      icon: Languages,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/translation-services", 
      features: ["الوثائق الرسمية", "الأبحاث الأكاديمية", "متعدد اللغات", "ترجمة عاجلة"]
    },
    {
      title: "التسويق الرقمي",
      brandName: "Zeen Digital Marketing",
      logo: "📈",
      description: "استراتيجيات تسويق مبتكرة لزيادة مبيعاتك وتنمية علامتك التجارية",
      icon: Megaphone,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/digital-marketing",
      features: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين SEO", "التسويق بالمحتوى"]
    },
    {
      title: "البرمجة والتطوير",
      brandName: "Zeen Tech Solutions",
      logo: "💻",
      description: "تطوير مواقع وتطبيقات احترافية بأحدث التقنيات والمعايير العالمية",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/programming-services",
      features: ["المواقع الإلكترونية", "تطبيقات الجوال", "الأنظمة الإدارية", "الصيانة والدعم"]
    },
    {
      title: "الخدمات اللوجستية",
      brandName: "Zeen Logistics & 3PL",
      logo: "🚛",
      description: "حلول لوجستية متكاملة وخدمات 3PL احترافية لضمان سلاسة عملياتك",
      icon: Truck,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/logistics-services",
      features: ["التخزين والمستودعات", "النقل والتوصيل", "إدارة سلسلة التوريد", "خدمات 3PL"]
    },
    {
      title: "التدريب المهني",
      brandName: "Zeen Learning Academy",
      logo: "🎓",
      description: "برامج تدريبية متخصصة ومكثفة لتطوير المهارات المهنية والشخصية",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/training-services",
      features: ["دورات تدريبية متخصصة", "ورش عمل تطبيقية", "التدريب الرقمي", "شهادات معتمدة"]
    },
    {
      title: "التوجيه المهني",
      brandName: "Zeen Career Solutions",
      logo: "💼",
      description: "خدمات شاملة لتطوير مسارك المهني وبناء هويتك الوظيفية المتميزة",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/career-services",
      features: ["كتابة السيرة الذاتية", "التحضير للمقابلات", "التوجيه المهني", "البحث عن عمل"]
    },
    {
      title: "الحلول المخصصة",
      brandName: "Zeen Custom Solutions",
      logo: "⭐",
      description: "حلول مبتكرة ومخصصة تماماً لتلبية احتياجات شركتك الفريدة والمتطورة",
      icon: Star,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      route: "/custom-solutions",
      features: ["استشارات متخصصة", "حلول مبتكرة", "تطوير حسب الطلب", "دعم شامل"]
    }
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "شريكك المتخصص في إنجاز المشاريع",
    phone: "+966570513821",
    email: "info@zeenaplusolutions.com",
    whatsapp: "+966570513821",
    linkedin: "https://www.linkedin.com/company/zeen-a-solutions-establishment/",
    location: "الرياض، المملكة العربية السعودية",
    description: "نعمل كشركاء متخصصين مع الشركات الناشئة والمتوسطة، نقدم خدماتنا كأعضاء فريق مؤقتين لإنجاز مشاريعكم دون الحاجة لتوظيف فرق دائمة. نحن مسؤولون عن كل خدمة نقدمها بجودة عالية واحترافية تامة"
  };

  const stats = [
    { icon: Briefcase, number: "250+", label: "مشروع مكتمل", color: "text-blue-500" },
    { icon: Users, number: "120+", label: "عميل راضٍ", color: "text-blue-500" },
    { icon: Shield, number: "8+", label: "سنوات خبرة", color: "text-blue-500" },
    { icon: Heart, number: "24/7", label: "دعم مستمر", color: "text-blue-500" }
  ];

  const features = [
    {
      icon: Zap,
      title: "سرعة في التنفيذ",
      description: "نلتزم بالمواعيد المحددة ونسلم مشاريعك في الوقت المناسب"
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "معايير عالية وضمان شامل على جميع خدماتنا ومشاريعنا"
    },
    {
      icon: Heart,
      title: "دعم مستمر",
      description: "فريق دعم متاح على مدار الساعة لضمان رضاك التام"
    }
  ];

  const handleContactOption = (type: string) => {
    switch (type) {
      case 'whatsapp':
        window.open(`https://wa.me/${companyInfo.whatsapp}?text=مرحباً، أريد التواصل معكم`, '_blank');
        break;
      case 'linkedin':
        window.open(companyInfo.linkedin, '_blank');
        break;
      case 'email':
        window.open(`mailto:${companyInfo.email}?subject=استفسار عن الخدمات`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-md border-2 border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-9 h-9 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-700">{companyInfo.name}</h1>
                <p className="text-sm text-slate-600 font-medium">{companyInfo.slogan}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                title="تابعونا على LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد بدء مشروع جديد مع Zeen A Plus Solutions"
                variant="header"
              />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-slate-200 bg-white/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/about')}
                className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
              >
                <Info className="ml-2 h-4 w-4" />
                من نحن
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/our-team')}
                className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
              >
                <Users className="ml-2 h-4 w-4" />
                فريقنا
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
                  >
                    <Settings className="ml-2 h-4 w-4" />
                    خدماتنا
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white" align="center">
                  {services.map((service, index) => (
                    <DropdownMenuItem 
                      key={index}
                      onClick={() => navigate(service.route)}
                      className="cursor-pointer"
                    >
                      <service.icon className="ml-2 h-4 w-4" />
                      <span>{service.title}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/join-us')}
                className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
              >
                <UserPlus className="ml-2 h-4 w-4" />
                انضم إلينا
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
                  >
                    <Phone className="ml-2 h-4 w-4" />
                    تواصل معنا
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white" align="center">
                  <DropdownMenuItem 
                    onClick={() => handleContactOption('whatsapp')}
                    className="cursor-pointer"
                  >
                    <MessageSquare className="ml-2 h-4 w-4 text-slate-600" />
                    <span>واتس آب</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleContactOption('linkedin')}
                    className="cursor-pointer"
                  >
                    <Linkedin className="ml-2 h-4 w-4 text-slate-600" />
                    <span>لينكد إن</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleContactOption('email')}
                    className="cursor-pointer"
                  >
                    <Mail className="ml-2 h-4 w-4 text-slate-600" />
                    <span>البريد الإلكتروني</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/custom-request')}
                className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white border-0 px-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                طلبك المخصص
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-indigo-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-700 leading-tight">
              شركاؤكم المتخصصون في إنجاز المشاريع
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              نعمل معكم كأعضاء فريق متخصصين لإنجاز مشاريعكم في الموارد البشرية، التطوير التقني، والتسويق الرقمي - 
              دون الحاجة لتوظيف فرق دائمة. نحن مسؤولون عن كل خدمة نقدمها بجودة عالية واحترافية تامة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد بدء مشروع جديد مع Zeen A Plus Solutions"
                variant="cta"
                text="ابدأ مشروعك معنا"
                className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white border-0 px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              />
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/about')}
                className="px-8 py-3 text-lg border-2 border-slate-400 hover:border-slate-500 text-slate-600 hover:text-slate-700 transition-all duration-300"
              >
                اعرف المزيد عنا
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-slate-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-400/20 rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-150"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/70">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-4">خدماتنا المتخصصة</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              نقدم خدمات احترافية متخصصة كشركاء مؤقتين لشركتكم - بدون تكاليف التوظيف الدائم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 bg-white border-0 shadow-sm overflow-hidden border-l-4 border-l-slate-400"
                onClick={() => navigate(service.route)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    <span className="text-sm font-medium ml-2">اعرف المزيد</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
            <p className="text-lg opacity-90">نفخر بالثقة التي منحتموها لنا</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 text-slate-100">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-700 mb-6">لماذا تختار Zeen A Plus Solutions؟</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {companyInfo.description}
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/about')}
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              اعرف المزيد عن قصتنا
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">انضم إلى شبكة المتخصصين لدينا</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            هل تمتلك خبرة متخصصة؟ انضم إلى شبكة الخبراء المستقلين لدينا وكن جزءاً من مشاريع مميزة
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/join-us')}
            className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <UserPlus className="ml-2 h-5 w-5" />
            ابدأ رحلتك معنا
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-slate-600 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل لديك مشروع تريد إنجازه؟</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            تواصل معنا اليوم وسنعمل معك كفريق متخصص لإنجاز مشروعك بأعلى جودة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدمات Zeen A Plus Solutions"
              variant="cta"
              text="تواصل عبر الواتس آب"
              className="bg-slate-500 hover:bg-slate-600 text-white px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            />
            <div className="flex items-center space-x-6 space-x-reverse text-slate-200">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-5 w-5" />
                <span>{companyInfo.phone}</span>
              </div>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse hover:text-slate-100 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدمات Zeen A Plus Solutions"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default Index;
