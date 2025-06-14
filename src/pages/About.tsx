
import { ArrowLeft, Target, Eye, Users, Award, Clock, MapPin, Lightbulb, Shield, Handshake, Star, TrendingUp, CheckCircle, Heart, Globe, Zap, UserPlus, Building2, Rocket, Sparkles, Trophy, Compass } from "lucide-react";
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
    { icon: Building2, number: "200+", label: "شريك ناجح" },
    { icon: Star, number: "95%", label: "رضا الشركاء" },
    { icon: Rocket, number: "8+", label: "سنوات خبرة" },
    { icon: Trophy, number: "150+", label: "مهمة مكتملة" }
  ];

  const coreValues = [
    {
      title: "الاحترافية",
      description: "نلتزم بأعلى معايير الجودة والأخلاق المهنية في كل ما نقدمه، ونضمن تسليم العمل بالدقة والإتقان المطلوبين",
      icon: Award
    },
    {
      title: "المرونة",
      description: "نتكيف مع متطلباتكم المتغيرة ونقدم حلولاً قابلة للتطوير تلائم احتياجاتكم المتنوعة والمتطورة",
      icon: Zap
    },
    {
      title: "الابتكار",
      description: "نسعى باستمرار لتقديم أحدث الحلول والأفكار التي تضمن لكم السبق في مجالكم والتميز في أدائكم",
      icon: Lightbulb
    },
    {
      title: "الشراكة",
      description: "نعمل معكم يداً بيد، كجزء لا يتجزأ من فريقكم، لتحقيق الأهداف المشتركة والنجاح المتبادل",
      icon: Handshake
    },
    {
      title: "النتائج",
      description: "نركز على تحقيق نتائج ملموسة وقابلة للقياس تساهم في نمو أعمالكم وتطوير مسيرتكم المهنية",
      icon: Target
    },
    {
      title: "الثقة",
      description: "نبني علاقات طويلة الأمد مع شركائنا مبنية على الثقة المتبادلة والشفافية في التعامل",
      icon: Shield
    }
  ];

  const whatMakesUsDifferent = [
    {
      title: "فريق من الخبراء",
      description: "نمتلك شبكة واسعة من المتخصصين ذوي الخبرة العميقة في مجالات متنوعة، من الموارد البشرية والتطوير التقني إلى التسويق الرقمي والتطوير المهني",
      icon: Users
    },
    {
      title: "حلول مخصصة",
      description: "نفهم أن كل عميل فريد، ولذلك نقدم حلولاً مصممة خصيصاً لتلبية متطلباتكم الدقيقة، بدلاً من الحلول الجاهزة",
      icon: Compass
    },
    {
      title: "مرونة لا مثيل لها",
      description: "سواء كنتم بحاجة إلى دعم لمشروع قصير الأجل أو خبرة متخصصة لمهمة محددة، فإننا نقدم لكم الدعم الذي تحتاجونه دون الحاجة إلى التزامات توظيف دائمة",
      icon: Globe
    },
    {
      title: "الجودة والالتزام",
      description: "نضمن إنجاز المهام بأعلى مستويات الجودة وفي المواعيد المحددة، مع التركيز على التفاصيل لضمان رضاكم التام",
      icon: CheckCircle
    },
    {
      title: "القيمة المضافة",
      description: "هدفنا ليس فقط إنجاز المهام، بل تقديم قيمة حقيقية تساهم في تطوير أعمالكم وتحقيق أهدافكم الاستراتيجية",
      icon: TrendingUp
    },
    {
      title: "الدعم المستمر",
      description: "نقدم دعماً مستمراً ومتابعة دقيقة لضمان تحقيق النتائج المرجوة والاستفادة القصوى من خدماتنا",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center shadow-md border-2 border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-8 h-8 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-700">{companyInfo.name}</h1>
                <p className="text-sm text-slate-600">شركاؤكم في التميز والإنجاز</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-indigo-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-700 leading-tight">
              من نحن: Zeen A Plus Solutions
              <br />
              <span className="text-slate-600">شركاؤكم في التميز والإنجاز</span>
            </h1>
            <div className="text-base mb-6 max-w-4xl mx-auto leading-relaxed text-slate-600 space-y-3">
              <p>
                في Zeen A Plus Solutions، نؤمن بأن النجاح في عالم الأعمال اليوم يتطلب مرونة استثنائية، وصولاً سريعاً للخبرات المتخصصة، وشراكات مبنية على الثقة والاحترافية.
              </p>
              <p>
                نحن لسنا مجرد مزودين للخدمات، بل <strong>شركاء استراتيجيون</strong> ننضم إلى فريق عملكم لتقديم حلول متكاملة ومصممة خصيصاً لتلبية احتياجاتكم الفريدة وتحقيق أهدافكم الطموحة.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                    <achievement.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1 text-slate-700">{achievement.number}</div>
                  <div className="text-slate-600 font-medium text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-700 mb-3">رؤيتنا ورسالتنا</h2>
            <div className="w-16 h-1 bg-slate-400 mx-auto mb-3"></div>
            <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              نسعى لأن نكون الشريك المفضل للشركات والأفراد في تحقيق أهدافهم وتجاوز تحدياتهم
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-50 border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-700 mb-3 font-bold">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 pb-6">
                <p className="text-slate-600 leading-relaxed">
                  أن نكون الشريك المفضل للشركات والأفراد الباحثين عن حلول مبتكرة وفعالة، تمكنهم من تجاوز التحديات وتحقيق أقصى إمكاناتهم في بيئة عمل متغيرة باستمرار.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-700 mb-3 font-bold">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 pb-6">
                <p className="text-slate-600 leading-relaxed">
                  تقديم خدمات استشارية وتنفيذية عالية الجودة في مجالات متعددة، من خلال فريق من الخبراء المتخصصين الذين يعملون بمرونة وكفاءة، لضمان إنجاز المهام بدقة واحترافية، وتحقيق قيمة مضافة حقيقية لعملائنا.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-700 mb-3">قيمنا الأساسية</h2>
            <div className="w-16 h-1 bg-slate-400 mx-auto mb-3"></div>
            <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              المبادئ التي تحكم طريقة عملنا وتوجه كل قراراتنا في رحلة الشراكة معكم
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-white border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center p-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                    <value.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-700 mb-2 font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 text-center">
                  <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-700 mb-3">ما يميزنا</h2>
            <div className="w-16 h-1 bg-slate-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-3">
              نجمع بين <span className="font-semibold text-slate-700">الخبرة العميقة والمرونة الاستثنائية</span> لنكون شركاؤكم الأمثل في تحقيق النجاح
            </p>
            <p className="text-base text-slate-500 max-w-3xl mx-auto leading-relaxed">
              شبكة واسعة من المتخصصين والحلول المبتكرة في خدمة أهدافكم
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {whatMakesUsDifferent.map((item, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-700 mb-2 leading-tight">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-700 mb-4">كيف نعمل؟</h2>
            <div className="w-16 h-1 bg-slate-400 mx-auto mb-6"></div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                نحن نعمل <span className="font-bold text-slate-700">كجزء من فريقكم</span>، نقدم الخبرة والدعم اللازمين لإنجاز المهام بكفاءة. 
                سواء كنتم بحاجة إلى استشارات متخصصة، إدارة مشاريع، أو تنفيذ مهام محددة، فإننا هنا لتقديم الدعم الذي يمكنكم الاعتماد عليه.
              </p>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-500 text-sm font-medium">- تقييم شركائنا لجودة خدماتنا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
            انضموا إلى قائمة شركائنا الناجحين
            <br />
            <span className="text-slate-200">ودعونا نساعدكم في تحقيق أهدافكم</span>
          </h2>
          <p className="text-lg mb-6 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            تواصلوا معنا اليوم لمناقشة كيف يمكن لـ Zeen A Plus Solutions أن تكون شريككم الأمثل في رحلة النجاح
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد التعرف أكثر على خدماتكم وكيف يمكنكم أن تكونوا شركائنا في النجاح"
              variant="cta"
              text="تواصل معنا الآن"
              className="bg-white text-slate-600 hover:bg-slate-50 border-0 px-6 py-2 text-base font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-600 px-6 py-2 text-base font-bold transition-all duration-300"
            >
              اكتشف خدماتنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
