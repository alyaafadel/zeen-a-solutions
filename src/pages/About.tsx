
import { ArrowLeft, Target, Eye, Users, Award, Clock, MapPin, Lightbulb, Shield, Handshake, Star, TrendingUp, CheckCircle, Heart, Globe, Zap, UserPlus, Building2, Rocket } from "lucide-react";
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
    { icon: Building2, number: "200+", label: "شراكة ناجحة" },
    { icon: Star, number: "95%", label: "رضا الشركاء" },
    { icon: Rocket, number: "8+", label: "سنوات خبرة" },
    { icon: UserPlus, number: "150+", label: "مشروع فردي" }
  ];

  const coreValues = [
    {
      title: "الشراكة الحقيقية",
      description: "نعمل كجزء من فريقكم، نفهم ثقافة شركتكم وأهدافكم، ونقدم خدماتنا كأننا موظفون داخليون لديكم",
      icon: Handshake
    },
    {
      title: "التخصص العميق",
      description: "كل مشروع يتم تنفيذه من قبل متخصص في المجال المطلوب، مما يضمن جودة عالية وخبرة متقدمة",
      icon: Target
    },
    {
      title: "المرونة والسرعة",
      description: "نتكيف مع احتياجاتكم المتغيرة ونقدم حلول سريعة دون تعقيدات الإدارة التقليدية للفرق",
      icon: Zap
    },
    {
      title: "التكلفة المثلى",
      description: "نقدم خدمات عالية الجودة بتكلفة أقل من توظيف فريق كامل، مع ضمان النتائج المطلوبة",
      icon: Award
    }
  ];

  const whyChooseUs = [
    { text: "متخصصون في العمل مع الشركات الناشئة والمتوسطة", icon: Building2 },
    { text: "نعمل كأعضاء في فريقكم، ليس كمورد خارجي", icon: UserPlus },
    { text: "مسؤولية كاملة عن جودة الخدمة المقدمة", icon: Shield },
    { text: "توفير تكلفة توظيف فريق كامل", icon: TrendingUp },
    { text: "مرونة في التعامل مع المشاريع المختلفة", icon: Zap },
    { text: "خبرة عملية في بيئة الأعمال السعودية", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">العودة للرئيسية</span>
            </Button>
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
                <p className="text-sm text-slate-600">شريكك المتخصص في النجاح</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-indigo-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-700 leading-tight">
              نحن <span className="text-slate-600">جزء من فريقكم</span>
              <br />
              <span className="text-slate-500">بخبرة متخصصة</span>
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-600">
              نعمل مع الشركات الناشئة والمتوسطة كمتخصصين في فريقكم، نقدم خدمات عالية الجودة دون تكلفة توظيف فريق كامل
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <achievement.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-slate-700">{achievement.number}</div>
                  <div className="text-slate-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-4">مفهومنا في العمل</h2>
            <div className="w-20 h-1 bg-slate-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              نؤمن بأن الشركات الناشئة والمتوسطة تحتاج لخبرات متخصصة دون تعقيدات إدارة فرق كاملة
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-slate-50 border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-slate-700 mb-4 font-bold">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-slate-600 leading-relaxed text-lg">
                  أن نكون الخيار الأول للشركات التي تبحث عن متخصصين يعملون كجزء من فريقها، نساهم في نموها 
                  وتطورها بمرونة عالية وتكلفة مثلى
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-slate-700 mb-4 font-bold">مهمتنا</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-slate-600 leading-relaxed text-lg">
                  نقدم خدمات متخصصة في الموارد البشرية، التقنية، التسويق، والترجمة للشركات الناشئة والمتوسطة. 
                  نعمل كأعضاء في فريقكم ونحقق أهدافكم بكفاءة ومرونة عالية
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-4">مبادئ عملنا</h2>
            <div className="w-20 h-1 bg-slate-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              القيم التي تحكم طريقة تعاملنا مع شركائنا وتضمن نجاح الشراكة على المدى الطويل
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-700 mb-3 font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-4">لماذا تختار Zeen A Plus Solutions؟</h2>
            <div className="w-20 h-1 bg-slate-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              مزايا فريدة تجعلنا الشريك المثالي للشركات التي تريد خبرات متخصصة بمرونة عالية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-4 space-x-reverse bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            هل تبحث عن متخصص 
            <br />
            <span className="text-slate-200">ينضم لفريقك؟</span>
          </h2>
          <p className="text-xl mb-10 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            احصل على خبرات متخصصة تعمل معك كجزء من فريقك، بمرونة عالية وتكلفة مثلى. 
            دعنا نكون شريكك في النجاح والنمو
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد التحدث معكم حول انضمام متخصص من فريقكم لمساعدتنا في مشاريعنا"
              variant="cta"
              text="ابدأ الشراكة معنا"
              className="bg-white text-slate-600 hover:bg-slate-50 border-0 px-8 py-3 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/our-team')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-600 px-8 py-3 text-lg font-bold transition-all duration-300"
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
