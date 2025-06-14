
import { ArrowRight, Users, Code, Languages, TrendingUp, Truck, GraduationCap, Briefcase, CheckCircle, Star, Phone, Mail, MapPin, Clock, Award, Target, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "خدمات الموارد البشرية",
      description: "حلول متكاملة لإدارة وتطوير الموارد البشرية في شركتك",
      icon: Users,
      route: "/hr-services"
    },
    {
      title: "خدمات البرمجة",
      description: "تطوير تطبيقات الويب والموبايل بأحدث التقنيات",
      icon: Code,
      route: "/programming-services"
    },
    {
      title: "خدمات الترجمة",
      description: "ترجمة احترافية للوثائق والمستندات بجميع اللغات",
      icon: Languages,
      route: "/translation-services"
    },
    {
      title: "خدمات التسويق الرقمي",
      description: "استراتيجيات تسويق رقمي مبتكرة لزيادة الوعي بعلامتك التجارية",
      icon: TrendingUp,
      route: "/digital-marketing"
    },
    {
      title: "خدمات اللوجستية",
      description: "حلول لوجستية متكاملة لتلبية احتياجات أعمالك",
      icon: Truck,
      route: "/logistics-services"
    },
    {
      title: "خدمات التدريب",
      description: "برامج تدريبية مخصصة لتطوير مهارات موظفيك",
      icon: GraduationCap,
      route: "/training-services"
    }
  ];

  const stats = [
    { label: "عملاء سعداء", value: "500+" },
    { label: "مشاريع ناجحة", value: "1000+" },
    { label: "سنوات الخبرة", value: "10+" },
    { label: "فريق العمل", value: "50+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo section with uploaded image */}
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <img 
                  src="/lovable-uploads/0d3776e6-7b4a-4e6a-8a39-8a3f4e987156.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Zeen A Plus Solutions
                </h1>
                <p className="text-xs text-blue-500">حلول متقدمة لأعمالكم</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
              <Button variant="ghost" onClick={() => navigate('/about')} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                من نحن
              </Button>
              <Button variant="ghost" onClick={() => navigate('/our-team')} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                فريقنا
              </Button>
              <Button onClick={() => navigate('/join-us')} className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                انضم إلينا
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" className="md:hidden">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="w-full h-0.5 bg-blue-600 mb-1"></span>
                <span className="w-full h-0.5 bg-blue-600 mb-1"></span>
                <span className="w-full h-0.5 bg-blue-600"></span>
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="h-4 w-4 ml-2" />
              شركة رائدة في الحلول المتقدمة
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              نحول أفكاركم إلى
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                نجاحات حقيقية
              </span>
            </h1>
            <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              نقدم حلول متكاملة في الموارد البشرية، البرمجة، الترجمة، التسويق الرقمي، والخدمات اللوجستية بخبرة تمتد لسنوات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/custom-request')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                ابدأ مشروعك معنا
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
              <WhatsAppButton 
                phoneNumber="+966123456789"
                message="مرحباً، أريد معرفة المزيد عن خدماتكم"
                variant="header"
                text="تحدث معنا مباشرة"
                className="px-8 py-4 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">خدماتنا المتنوعة</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-8 w-8" />
                    <div className="bg-white/20 rounded-full p-2">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white mb-2 text-right">{service.title}</CardTitle>
                  <CardDescription className="text-blue-100 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full justify-center text-blue-600 border-blue-300 hover:bg-blue-50"
                    onClick={() => navigate(service.route)}
                  >
                    <service.icon className="h-5 w-5 ml-2" />
                    اكتشف المزيد
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">تواصل معنا الآن</h3>
          <p className="text-xl mb-8 opacity-90">نحن هنا للإجابة على جميع استفساراتكم وتقديم الدعم اللازم</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.location.href = 'tel:+966123456789'}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل بنا
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'mailto:info@zeenaplusolutions.com'}
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 transition-all duration-300"
            >
              <Mail className="ml-2 h-5 w-5" />
              أرسل بريداً إلكترونياً
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
