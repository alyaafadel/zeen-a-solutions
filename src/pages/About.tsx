
import { ArrowLeft, Target, Eye, Users, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const navigate = useNavigate();

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    phone: "+966570513821",
    whatsapp: "+966570513821",
    location: "الرياض، المملكة العربية السعودية"
  };

  const stats = [
    { icon: Users, number: "150+", label: "مشروع مكتمل" },
    { icon: Award, number: "80+", label: "عميل راضٍ" },
    { icon: Clock, number: "7+", label: "سنوات خبرة" },
    { icon: MapPin, number: "24/7", label: "دعم مستمر" }
  ];

  const values = [
    {
      title: "الجودة والتميز",
      description: "نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا ومشاريعنا",
      icon: Award
    },
    {
      title: "الشراكة الحقيقية",
      description: "نعتبر أنفسنا شركاء في نجاح عملائنا وليس مجرد مقدمي خدمات",
      icon: Users
    },
    {
      title: "الابتكار المستمر",
      description: "نواكب أحدث التطورات والتقنيات لضمان حلول مبتكرة وعصرية",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg border">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h1 className="text-lg font-bold text-gray-800">{companyInfo.name}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">من نحن</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نحن فريق من الخبراء المتخصصين في مختلف المجالات، نعمل معاً لتقديم حلول متكاملة ومبتكرة للشركات والأفراد
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-800">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  أن نكون الشريك الأول والأكثر ثقة في المنطقة لتقديم الحلول المتكاملة للأعمال، 
                  ونساهم في تطوير ونمو الشركات والمؤسسات من خلال خدماتنا المتميزة والمبتكرة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-800">مهمتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  تقديم خدمات عالية الجودة في مجالات الموارد البشرية، التقنية، التسويق، والترجمة، 
                  مع التركيز على فهم احتياجات عملائنا وتقديم حلول مخصصة تحقق أهدافهم
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">إنجازاتنا بالأرقام</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">قيمنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لبدء رحلة النجاح معنا؟</h2>
          <p className="text-xl mb-8 opacity-90">تواصل معنا اليوم ودعنا نساعدك في تحقيق أهدافك</p>
          <WhatsAppButton 
            phoneNumber={companyInfo.whatsapp}
            message="مرحباً، أريد معرفة المزيد عن Zeen A Plus Solutions وخدماتكم"
            variant="cta"
            text="ابدأ معنا الآن"
            className="bg-white text-blue-600 hover:bg-gray-100 border-0"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
