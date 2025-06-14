
import { Truck, Shield, CheckCircle, Users, TrendingUp, Clock, ArrowLeft, MessageSquare, Warehouse, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const LogisticsServices = () => {
  const navigate = useNavigate();

  const logisticsServices = [
    {
      title: "النقل والتوصيل",
      description: "حلول نقل موثوقة وفعالة لتلبية احتياجات عملك",
      icon: Truck,
      features: ["أسطول حديث من الشاحنات", "تغطية واسعة النطاق", "تتبع الشحنات في الوقت الفعلي", "توصيل سريع وآمن"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "التخزين والمستودعات",
      description: "مرافق تخزين آمنة وحلول إدارة مخزون متكاملة",
      icon: Warehouse,
      features: ["مستودعات حديثة ومجهزة", "إدارة المخزون بكفاءة", "أنظمة أمان متقدمة", "تقارير دورية"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "التخليص الجمركي",
      description: "تخليص جمركي سريع وسهل لضمان وصول شحناتك في الوقت المحدد",
      icon: CheckCircle,
      features: ["إجراءات تخليص مبسطة", "خبرة في جميع أنواع الشحنات", "التزام باللوائح والقوانين", "استشارات جمركية"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "إدارة سلسلة الإمداد",
      description: "حلول متكاملة لإدارة سلسلة الإمداد بكفاءة وفعالية",
      icon: Users,
      features: ["تحسين العمليات اللوجستية", "تقليل التكاليف", "زيادة الكفاءة", "التخطيط الاستراتيجي"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "حلول التجارة الإلكترونية",
      description: "حلول لوجستية متكاملة لدعم نمو تجارتك الإلكترونية",
      icon: TrendingUp,
      features: ["تكامل مع منصات التجارة الإلكترونية", "توصيل سريع وموثوق", "إدارة المرتجعات", "خدمة العملاء"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "خدمات 3PL المتخصصة",
      description: "خدمات طرف ثالث شاملة لإدارة جميع عملياتك اللوجستية",
      icon: Package,
      features: ["إدارة شاملة للخدمات اللوجستية", "تقليل التكاليف التشغيلية", "مرونة في التوسع", "تقارير تحليلية مفصلة"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "أمان موثوق",
      description: "نضمن سلامة شحناتك بأعلى معايير الأمان"
    },
    {
      icon: Clock,
      title: "توقيت دقيق",
      description: "التزام بالمواعيد المحددة وتسليم في الوقت المناسب"
    },
    {
      icon: MapPin,
      title: "تغطية شاملة",
      description: "شبكة واسعة تغطي جميع مناطق المملكة"
    },
    {
      icon: TrendingUp,
      title: "كفاءة عالية",
      description: "حلول مبتكرة لتحسين أداء سلسلة التوريد"
    }
  ];

  const companyInfo = {
    name: "Zeen Logistics & 3PL",
    phone: "+966570513821",
    whatsapp: "+966570513821",
    location: "الرياض، المملكة العربية السعودية"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100" dir="rtl">
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
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Truck className="text-white h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{companyInfo.name}</h1>
                  <p className="text-sm text-gray-600">{companyInfo.location}</p>
                </div>
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
            <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Truck className="text-white h-12 w-12" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              {companyInfo.name}
            </h2>
            <p className="text-2xl text-gray-700 font-medium mb-6">حلول لوجستية متكاملة وخدمات 3PL احترافية</p>
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            نقدم خدمات لوجستية شاملة تشمل النقل، التخزين، التخليص الجمركي، وإدارة سلسلة الإمداد بأحدث التقنيات وأعلى معايير الجودة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد الاستفسار عن الخدمات اللوجستية وحلول 3PL"
              variant="cta"
              text="احصل على عرض أسعار"
            />
            <Button variant="outline" size="lg" className="text-lg">
              <MapPin className="ml-2 h-5 w-5" />
              تتبع الشحنات
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا اللوجستية</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              حلول شاملة لجميع احتياجاتك اللوجستية من النقل إلى التخزين وإدارة سلسلة التوريد
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gray-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}>
                    اطلب الخدمة
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
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار خدماتنا اللوجستية؟</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلول لوجستية متميزة بأعلى معايير الجودة والكفاءة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">ابدأ مع أفضل الحلول اللوجستية</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            تواصل معنا الآن واحصل على استشارة مجانية لجميع احتياجاتك اللوجستية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="أريد معرفة المزيد عن الخدمات اللوجستية وحلول 3PL"
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
          message="مرحباً، أريد الاستفسار عن الخدمات اللوجستية"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default LogisticsServices;
