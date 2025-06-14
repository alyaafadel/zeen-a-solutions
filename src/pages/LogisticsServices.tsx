
import { Truck, Package, Warehouse, MapPin, Clock, Shield, ArrowRight, CheckCircle, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const LogisticsServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "التخزين والمستودعات",
      description: "خدمات تخزين متقدمة مع أنظمة إدارة المخزون الذكية",
      icon: Warehouse,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      features: ["التخزين الآمن", "إدارة المخزون", "التحكم في درجة الحرارة", "التتبع الرقمي"]
    },
    {
      title: "النقل والتوصيل", 
      description: "حلول النقل المتكاملة للشحن المحلي والدولي",
      icon: Truck,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      features: ["النقل السريع", "التتبع المباشر", "التأمين الشامل", "التوصيل في الوقت المحدد"]
    },
    {
      title: "إدارة سلسلة التوريد",
      description: "تحسين وإدارة سلسلة التوريد بكفاءة عالية",
      icon: Package,
      color: "from-purple-500 to-purple-600", 
      bgColor: "bg-purple-50",
      features: ["تخطيط المخزون", "تحسين التكاليف", "إدارة الموردين", "تحليل البيانات"]
    },
    {
      title: "خدمات 3PL المتكاملة",
      description: "حلول الطرف الثالث اللوجستي الشاملة لجميع احتياجاتك",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50", 
      features: ["إدارة المخزون", "معالجة الطلبات", "التوزيع", "خدمة العملاء"]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "سرعة التنفيذ",
      description: "التزام بالمواعيد المحددة مع أعلى معايير الجودة"
    },
    {
      icon: Shield,
      title: "الأمان والحماية", 
      description: "أنظمة أمان متطورة لحماية البضائع والمعلومات"
    },
    {
      icon: MapPin,
      title: "تغطية شاملة",
      description: "شبكة توزيع واسعة تغطي جميع المناطق"
    }
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    phone: "+966123456789",
    whatsapp: "+966123456789"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-800"
              >
                <ArrowRight className="h-5 w-5" />
                العودة للرئيسية
              </Button>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Truck className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{companyInfo.name}</h1>
                <p className="text-sm text-gray-600">الخدمات اللوجستية</p>
              </div>
            </div>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن الخدمات اللوجستية"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              الخدمات اللوجستية وحلول 3PL
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم حلولاً لوجستية متكاملة ومتطورة تشمل التخزين، النقل، وإدارة سلسلة التوريد 
              بأعلى معايير الجودة والكفاءة لضمان نجاح أعمالك
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className={`${service.bgColor} pb-6`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-800 mb-2 text-center">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
                    message={`مرحباً، أريد الاستفسار عن ${service.title}`}
                    variant="service"
                    text="استفسر الآن"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار خدماتنا اللوجستية؟</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتميز بالخبرة الواسعة والتقنيات المتطورة لتقديم أفضل الحلول اللوجستية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">شحنة شهرياً</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">متر مربع تخزين</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600">دقة التسليم</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">خدمة عملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">ابدأ مشروعك اللوجستي معنا</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لجميع خدماتنا اللوجستية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن الخدمات اللوجستية وحلول 3PL"
              variant="cta"
              text="تواصل عبر الواتس آب"
            />
            <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
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
          message="مرحباً، أريد الاستفسار عن الخدمات اللوجستية"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default LogisticsServices;
