
import { ArrowLeft, Target, Eye, Users, Award, Clock, MapPin, Lightbulb, Shield, Handshake, Star, TrendingUp, CheckCircle, Heart, Globe, Zap } from "lucide-react";
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
    { icon: Users, number: "200+", label: "مشروع ناجح", color: "from-emerald-500 to-teal-600", bgColor: "bg-emerald-50" },
    { icon: Star, number: "95%", label: "رضا العملاء", color: "from-amber-500 to-orange-600", bgColor: "bg-amber-50" },
    { icon: Clock, number: "8+", label: "سنوات تميز", color: "from-violet-500 to-purple-600", bgColor: "bg-violet-50" },
    { icon: TrendingUp, number: "150+", label: "شريك نجاح", color: "from-rose-500 to-pink-600", bgColor: "bg-rose-50" }
  ];

  const coreValues = [
    {
      title: "التميز في الأداء",
      description: "نسعى دائماً لتقديم أفضل ما لدينا، ونتجاوز توقعات عملائنا في كل مشروع نعمل عليه لضمان تحقيق النتائج المثلى",
      icon: Award,
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      bgGradient: "from-blue-50 to-indigo-100"
    },
    {
      title: "الشراكة الحقيقية",
      description: "نؤمن بالعمل كفريق واحد مع عملائنا، نفهم أهدافهم ونعمل معاً لتحقيقها في جو من الثقة والاحترام المتبادل",
      icon: Handshake,
      gradient: "from-emerald-600 via-green-700 to-teal-800",
      bgGradient: "from-emerald-50 to-teal-100"
    },
    {
      title: "الابتكار والإبداع",
      description: "نواكب التطورات العالمية ونطبق أحدث الحلول والتقنيات المبتكرة لضمان تفوق عملائنا في السوق التنافسي",
      icon: Lightbulb,
      gradient: "from-amber-600 via-orange-700 to-red-800",
      bgGradient: "from-amber-50 to-orange-100"
    },
    {
      title: "الثقة والشفافية",
      description: "نبني علاقاتنا على أساس الثقة المتبادلة والتواصل الواضح والشفاف، مما يضمن نجاح الشراكة على المدى الطويل",
      icon: Shield,
      gradient: "from-violet-600 via-purple-700 to-indigo-800",
      bgGradient: "from-violet-50 to-purple-100"
    }
  ];

  const whyChooseUs = [
    { text: "فريق خبراء متخصص في مجالات متنوعة", icon: Users },
    { text: "حلول مخصصة تناسب احتياجات كل عميل", icon: Target },
    { text: "دعم فني مستمر على مدار الساعة", icon: Clock },
    { text: "أسعار تنافسية وخطط دفع مرنة", icon: Heart },
    { text: "ضمان الجودة وسرعة التنفيذ", icon: Zap },
    { text: "خبرة واسعة في السوق السعودي", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50" dir="rtl">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 transition-all duration-300 rounded-xl"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  {companyInfo.name}
                </h1>
                <p className="text-sm text-gray-500">شريكك في النجاح</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Enhanced Design */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white">
              نحن <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">شركاؤكم</span> في
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">التميز والنجاح</span>
            </h1>
            <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100 font-light">
              في Zeen A Plus Solutions، نحن أكثر من مجرد مقدمي خدمات - نحن شركاؤكم الاستراتيجيون في رحلة النمو والتطوير
            </p>
            
            {/* Enhanced Achievement Cards */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`group relative ${achievement.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20`}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-12 transition-transform duration-500`}>
                    <achievement.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3 text-gray-800">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision with New Layout */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">رؤيتنا ومهمتنا</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نستشرف المستقبل بعزيمة راسخة ورؤية واضحة لنكون الرواد في تقديم الحلول المتكاملة
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full -translate-y-20 translate-x-20"></div>
              <CardHeader className="relative z-10 text-center pb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Eye className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-4xl text-blue-800 mb-6 font-bold">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center px-8 pb-12">
                <p className="text-gray-700 leading-relaxed text-lg">
                  أن نكون الشريك الاستراتيجي الأكثر ثقة في المنطقة، نساهم في تحويل الأفكار إلى واقع ملموس، 
                  ونمكن الشركات والأفراد من تحقيق إمكاناتهم الكاملة والوصول إلى مستويات جديدة من النجاح والتميز في عالم يتطور بسرعة
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-100 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5"></div>
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-purple-500/20 rounded-full -translate-y-20 -translate-x-20"></div>
              <CardHeader className="relative z-10 text-center pb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-4xl text-purple-800 mb-6 font-bold">مهمتنا</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center px-8 pb-12">
                <p className="text-gray-700 leading-relaxed text-lg">
                  نقدم حلولاً متكاملة ومبتكرة في مجالات الموارد البشرية، التقنية، التسويق، والترجمة. 
                  نعمل بشغف وإتقان لفهم احتياجات عملائنا الفريدة، ونطور استراتيجيات مخصصة تحقق أهدافهم وتفوق توقعاتهم بمعايير عالمية
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">قيمنا الأساسية</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              المبادئ الراسخة التي تحكم عملنا وتشكل هويتنا المؤسسية وتوجه قراراتنا الاستراتيجية
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className={`group relative overflow-hidden bg-gradient-to-br ${value.bgGradient} border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 rounded-3xl transform hover:-translate-y-2`}>
                <div className="absolute inset-0 bg-white/40"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative z-10 p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-gray-800 mb-4 font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-8 pb-10">
                  <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">لماذا تختار Zeen A Plus Solutions؟</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نتميز بمجموعة فريدة من المزايا التنافسية التي تجعلنا الخيار الأمثل والأكثر موثوقية لشركتك
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="group flex items-center space-x-4 space-x-reverse bg-gradient-to-r from-white via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-gray-700 font-medium text-lg leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated elements */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            هل أنت مستعد لبدء 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">رحلة التميز؟</span>
          </h2>
          <p className="text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
            انضم إلى مئات الشركات والأفراد الذين وثقوا بنا واختاروا Zeen A Plus Solutions شريكاً في نجاحهم. 
            دعنا نساعدك في تحويل أحلامك إلى حقيقة ملموسة
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد معرفة المزيد عن Zeen A Plus Solutions وكيف يمكنكم مساعدتي في تحقيق أهدافي"
              variant="cta"
              text="ابدأ رحلتك معنا الآن"
              className="bg-gradient-to-r from-white to-blue-50 text-blue-600 hover:from-blue-50 hover:to-white border-0 px-10 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/our-team')}
              className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-xl font-bold transition-all duration-300 rounded-2xl backdrop-blur-sm"
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
