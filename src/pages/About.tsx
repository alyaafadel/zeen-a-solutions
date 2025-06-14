
import { ArrowLeft, Target, Eye, Users, Award, Clock, MapPin, Lightbulb, Shield, Handshake, Star, TrendingUp, CheckCircle } from "lucide-react";
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

  const achievements = [
    { icon: Users, number: "200+", label: "مشروع ناجح", color: "from-blue-500 to-blue-600" },
    { icon: Star, number: "95%", label: "رضا العملاء", color: "from-green-500 to-green-600" },
    { icon: Clock, number: "8+", label: "سنوات تميز", color: "from-purple-500 to-purple-600" },
    { icon: TrendingUp, number: "150+", label: "شريك نجاح", color: "from-orange-500 to-orange-600" }
  ];

  const coreValues = [
    {
      title: "التميز في الأداء",
      description: "نسعى دائماً لتقديم أفضل ما لدينا، ونتجاوز توقعات عملائنا في كل مشروع نعمل عليه",
      icon: Award,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "الشراكة الحقيقية",
      description: "نؤمن بالعمل كفريق واحد مع عملائنا، نفهم أهدافهم ونعمل معاً لتحقيقها",
      icon: Handshake,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "الابتكار والإبداع",
      description: "نواكب التطورات العالمية ونطبق أحدث الحلول والتقنيات لضمان تفوق عملائنا",
      icon: Lightbulb,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "الثقة والشفافية",
      description: "نبني علاقاتنا على أساس الثقة المتبادلة والتواصل الواضح والشفاف",
      icon: Shield,
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const whyChooseUs = [
    "فريق خبراء متخصص في مجالات متنوعة",
    "حلول مخصصة تناسب احتياجات كل عميل",
    "دعم فني مستمر على مدار الساعة",
    "أسعار تنافسية وخطط دفع مرنة",
    "ضمان الجودة وسرعة التنفيذ",
    "خبرة واسعة في السوق السعودي"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {companyInfo.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            نحن <span className="text-blue-200">شركاؤكم</span> في النجاح
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
            في Zeen A Plus Solutions، نؤمن بأن النجاح الحقيقي يأتي من الشراكة الصادقة والعمل المتقن. 
            نحن لسنا مجرد مقدمي خدمات، بل شركاء حقيقيون نسعى لتحقيق رؤيتكم وأهدافكم
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1">{achievement.number}</div>
                <div className="text-blue-100 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">رؤيتنا ومهمتنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نهدف إلى أن نكون الخيار الأول للشركات والأفراد الساعين للتميز والنمو
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-center text-blue-800 mb-4">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 leading-relaxed text-lg text-center">
                  أن نكون الشريك الاستراتيجي الأكثر ثقة في المنطقة، نساهم في تحويل الأفكار إلى واقع ملموس، 
                  ونمكن الشركات والأفراد من تحقيق إمكاناتهم الكاملة والوصول إلى مستويات جديدة من النجاح والتميز
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-purple-500/20 rounded-full -translate-y-16 -translate-x-16"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-center text-purple-800 mb-4">مهمتنا</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 leading-relaxed text-lg text-center">
                  نقدم حلولاً متكاملة ومبتكرة في مجالات الموارد البشرية، التقنية، التسويق، والترجمة. 
                  نعمل بشغف وإتقان لفهم احتياجات عملائنا الفريدة، ونطور استراتيجيات مخصصة تحقق أهدافهم وتفوق توقعاتهم
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">قيمنا الأساسية</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              المبادئ التي تحكم عملنا وتشكل هويتنا وتوجه قراراتنا اليومية
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg overflow-hidden">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800 mb-3">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختار Zeen A Plus Solutions؟</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نتميز بمجموعة من المزايا التي تجعلنا الخيار الأمثل لشركتك
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">هل أنت مستعد لبدء رحلة التميز؟</h2>
          <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto">
            انضم إلى مئات الشركات والأفراد الذين وثقوا بنا واختاروا Zeen A Plus Solutions شريكاً في نجاحهم. 
            دعنا نساعدك في تحويل أحلامك إلى حقيقة
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد معرفة المزيد عن Zeen A Plus Solutions وكيف يمكنكم مساعدتي في تحقيق أهدافي"
              variant="cta"
              text="ابدأ رحلتك معنا الآن"
              className="bg-white text-blue-600 hover:bg-gray-100 border-0 px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/our-team')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              تعرف على فريقنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
