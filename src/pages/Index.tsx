import { Users, Languages, Megaphone, Code, Truck, ArrowRight, CheckCircle, MessageSquare, GraduationCap, Linkedin, Briefcase, Info, UserPlus, Phone, Settings, Star, Mail } from "lucide-react";
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
      description: "خدمات شاملة في التوظيف والتدريب وإدارة الأداء",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      route: "/hr-services",
      features: ["استقطاب المواهب", "الهياكل التنظيمية", "التدريب والتطوير", "إدارة الأداء"]
    },
    {
      title: "خدمات الترجمة",
      brandName: "Zeen Translation Hub",
      logo: "🌐",
      description: "ترجمة احترافية للوثائق الرسمية والأكاديمية",
      icon: Languages,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      route: "/translation-services", 
      features: ["الوثائق الرسمية", "الأبحاث الأكاديمية", "متعدد اللغات", "ترجمة عاجلة"]
    },
    {
      title: "التسويق الرقمي",
      brandName: "Zeen Digital Marketing",
      logo: "📈",
      description: "استراتيجيات تسويق فعالة لزيادة مبيعاتك",
      icon: Megaphone,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      route: "/digital-marketing",
      features: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين SEO", "التسويق بالمحتوى"]
    },
    {
      title: "البرمجة والتطوير",
      brandName: "Zeen Tech Solutions",
      logo: "💻",
      description: "تطوير مواقع وتطبيقات احترافية بأحدث التقنيات",
      icon: Code,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      route: "/programming-services",
      features: ["المواقع الإلكترونية", "تطبيقات الجوال", "الأنظمة الإدارية", "الصيانة والدعم"]
    },
    {
      title: "الخدمات اللوجستية",
      brandName: "Zeen Logistics & 3PL",
      logo: "🚛",
      description: "حلول لوجستية متكاملة وخدمات 3PL احترافية",
      icon: Truck,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      route: "/logistics-services",
      features: ["التخزين والمستودعات", "النقل والتوصيل", "إدارة سلسلة التوريد", "خدمات 3PL"]
    },
    {
      title: "التدريب المهني",
      brandName: "Zeen Learning Academy",
      logo: "🎓",
      description: "برامج تدريبية متخصصة لتطوير المهارات المهنية",
      icon: GraduationCap,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      route: "/training-services",
      features: ["دورات تدريبية متخصصة", "ورش عمل تطبيقية", "التدريب الرقمي", "شهادات معتمدة"]
    },
    {
      title: "التوجيه المهني",
      brandName: "Zeen Career Solutions",
      logo: "💼",
      description: "خدمات شاملة لتطوير مسارك المهني وكتابة السيرة الذاتية",
      icon: Briefcase,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      route: "/career-services",
      features: ["كتابة السيرة الذاتية", "التحضير للمقابلات", "التوجيه المهني", "البحث عن عمل"]
    },
    {
      title: "الحلول المخصصة",
      brandName: "Zeen Custom Solutions",
      logo: "⭐",
      description: "حلول مبتكرة ومخصصة لتلبية احتياجات شركتك الفريدة",
      icon: Star,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      route: "/custom-solutions",
      features: ["استشارات متخصصة", "حلول مبتكرة", "تطوير حسب الطلب", "دعم شامل"]
    }
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "شريكك المتميز في النجاح والتطوير",
    phone: "+966570513821",
    email: "info@zeenaplusolutions.com",
    whatsapp: "+966570513821",
    linkedin: "https://www.linkedin.com/company/zeen-a-solutions-establishment/",
    location: "الرياض، المملكة العربية السعودية",
    description: "شركة متخصصة في تقديم حلول متكاملة للأعمال تشمل الموارد البشرية، الترجمة، التسويق الرقمي، التطوير التقني، والخدمات اللوجستية."
  };

  // Calculate positions for circular layout
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{companyInfo.name}</h1>
                <p className="text-xs text-gray-600">{companyInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                title="تابعونا على LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد الاستفسار عن خدماتكم"
                variant="header"
              />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t bg-white/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/about')}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                <Info className="ml-2 h-4 w-4" />
                من نحن
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
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
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                <UserPlus className="ml-2 h-4 w-4" />
                انضم إلينا
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
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
                    <MessageSquare className="ml-2 h-4 w-4 text-green-600" />
                    <span>واتس آب</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleContactOption('linkedin')}
                    className="cursor-pointer"
                  >
                    <Linkedin className="ml-2 h-4 w-4 text-blue-600" />
                    <span>لينكد إن</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleContactOption('email')}
                    className="cursor-pointer"
                  >
                    <Mail className="ml-2 h-4 w-4 text-gray-600" />
                    <span>البريد الإلكتروني</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/custom-request')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-6"
              >
                طلبك المخصص
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Improved Circular Design */}
      <section id="services" className="py-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Circular Services Layout */}
          <div className="relative flex items-center justify-center" style={{ minHeight: '700px' }}>
            {/* Central Company Info - Improved size and design */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-2xl border-4 border-gradient-to-r from-blue-200 to-purple-200 text-center w-72 h-72 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border mb-3 mx-auto">
                    <img 
                      src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                      alt="Zeen A Plus Solutions Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                    {companyInfo.name}
                  </h2>
                  <p className="text-sm text-gray-600 font-medium mb-2">{companyInfo.slogan}</p>
                  <div className="text-xs text-gray-500">{companyInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Services in Circular Layout - Improved positioning and design */}
            {services.map((service, index) => {
              const position = getCircularPosition(index, services.length, 300);
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-500 hover:scale-110 cursor-pointer z-20"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-70px',
                    marginTop: '-70px',
                  }}
                  onClick={() => navigate(service.route)}
                >
                  <div className={`w-36 h-36 ${service.bgColor} rounded-full flex flex-col items-center justify-center shadow-xl border-3 border-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}>
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-90 transition-all duration-500 rounded-full flex items-center justify-center`}>
                      <ArrowRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-lg mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    
                    {/* Service Title */}
                    <div className="text-center relative z-10 group-hover:text-white transition-colors duration-300">
                      <h3 className="text-xs font-bold leading-tight px-2">{service.title}</h3>
                      <div className="text-xs mt-1 opacity-70">{service.logo}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Decorative connecting lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 600 600">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                {services.map((_, index) => {
                  const currentPos = getCircularPosition(index, services.length, 300);
                  const nextIndex = (index + 1) % services.length;
                  const nextPos = getCircularPosition(nextIndex, services.length, 300);
                  
                  return (
                    <line
                      key={index}
                      x1={300 + currentPos.x}
                      y1={300 + currentPos.y}
                      x2={300 + nextPos.x}
                      y2={300 + nextPos.y}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Description below the circular design */}
          <div className="text-center mt-12 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <p className="text-base text-gray-500">
              انقر على أي خدمة لاستكشاف التفاصيل والحصول على عرض مخصص
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">لماذا تختار {companyInfo.name}؟</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة وفريق متخصص يضمن لك أفضل الخدمات والحلول المتكاملة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">مشروع مكتمل</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">80+</div>
              <div className="text-gray-600">عميل راضٍ</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">7+</div>
              <div className="text-gray-600">سنوات خبرة</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">دعم مستمر</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">انضم إلى فريق {companyInfo.name}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            نبحث عن المواهب المتميزة للانضمام إلى فريقنا المتنوع في جميع التخصصات
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">بيئة عمل متميزة</h4>
              <p className="text-gray-600">فريق متعاون وبيئة عمل محفزة للإبداع والنمو المهني</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">فرص التطوير</h4>
              <p className="text-gray-600">برامج تدريبية مستمرة وفرص نمو وظيفي واضحة</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">مزايا تنافسية</h4>
              <p className="text-gray-600">حزمة مزايا شاملة ومرونة في العمل</p>
            </div>
          </div>
          
          <WhatsAppButton 
            phoneNumber={companyInfo.whatsapp}
            message="مرحباً، أريد الاستفسار عن فرص العمل المتاحة في Zeen A Plus Solutions"
            variant="cta"
            text="أرسل سيرتك الذاتية"
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">ابدأ مشروعك مع {companyInfo.name}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لجميع خدماتنا
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدمات Zeen A Plus Solutions"
              variant="cta"
              text="تواصل عبر الواتس آب"
            />
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                <MessageSquare className="h-5 w-5" />
                <span>أو اتصل على: {companyInfo.phone}</span>
              </div>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>تابعونا على LinkedIn</span>
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
