
import { ArrowLeft, Target, Eye, Users, Award, Clock, MapPin, Lightbulb, Shield, Handshake, Star, TrendingUp, CheckCircle, Heart, Globe, Zap, UserPlus, Building2, Rocket, Sparkles, Trophy, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    <div className="min-h-screen bg-pattern-subtle" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-300 rounded-xl px-6 py-4"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium text-lg">العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-7 h-7 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-brand-blue-dark">{companyInfo.name}</h1>
                <p className="text-sm text-slate-600">شركاؤكم في التميز والإنجاز</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-8 py-16 max-w-6xl">
        {/* Main Title Section with proper spacing */}
        <section className="text-center mb-24 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8 leading-tight">
            من نحن: Zeen-A Solutions
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue-dark mb-12">
            شركاؤكم في التميز والإنجاز
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-10 text-lg text-slate-600 leading-relaxed">
            <p className="text-xl leading-relaxed mb-8">
              في Zeen A Plus Solutions، نؤمن بأن النجاح في عالم الأعمال اليوم يتطلب مرونة استثنائية، وصولاً سريعاً للخبرات المتخصصة، وشراكات مبنية على الثقة والاحترافية.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              نحن لسنا مجرد مزودين للخدمات، بل <span className="font-semibold text-brand-blue">شركاء استراتيجيون</span> ننضم إلى فريق عملكم لتقديم حلول متكاملة ومصممة خصيصاً لتلبية احتياجاتكم الفريدة وتحقيق أهدافكم الطموحة.
            </p>
          </div>
        </section>

        <Separator className="mb-28 bg-gradient-blue h-1 rounded-full" />

        {/* Vision and Mission Section with proper spacing */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-brand-blue mb-8">رؤيتنا ورسالتنا</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
              الأسس التي تحرك رحلتنا نحو التميز والريادة في تقديم الخدمات المتخصصة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300 mb-6">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-slate-700 leading-relaxed text-lg text-center">
                  أن نكون الشريك المفضل للشركات والأفراد الباحثين عن حلول مبتكرة وفعالة، تمكنهم من تجاوز التحديات وتحقيق أقصى إمكاناتهم في بيئة عمل متغيرة باستمرار.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-blue-light rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-brand-blue group-hover:text-brand-accent-blue transition-colors duration-300 mb-6">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-slate-700 leading-relaxed text-lg text-center">
                  تقديم خدمات استشارية وتنفيذية عالية الجودة في مجالات متعددة، من خلال فريق من الخبراء المتخصصين الذين يعملون بمرونة وكفاءة، لضمان إنجاز المهام بدقة واحترافية، وتحقيق قيمة مضافة حقيقية لعملائنا.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-32 bg-gradient-blue-light h-1 rounded-full" />

        {/* Core Values Section with proper spacing */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-brand-blue mb-8">قيمنا الأساسية</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
              المبادئ التي تحكم طريقة عملنا وتوجه كل قراراتنا في رحلة الشراكة معكم
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <Card key={index} className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 ${
                    index % 3 === 0 ? 'bg-gradient-blue' : 
                    index % 3 === 1 ? 'bg-gradient-blue-light' : 
                    'bg-gradient-dark-blue'
                  } rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300 mb-6">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-32 bg-gradient-dark-blue h-1 rounded-full" />

        {/* What Makes Us Different Section with proper spacing */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-brand-blue mb-8">ما يميزنا</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
              نجمع بين الخبرة العميقة والمرونة الاستثنائية لنكون شركاؤكم الأمثل في تحقيق النجاح
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {whatMakesUsDifferent.map((item, index) => (
              <Card key={index} className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <div className="flex items-center space-x-4 space-x-reverse mb-6">
                    <div className={`w-14 h-14 ${
                      index % 3 === 0 ? 'bg-gradient-blue' : 
                      index % 3 === 1 ? 'bg-gradient-blue-light' : 
                      'bg-gradient-dark-blue'
                    } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-24 bg-gradient-blue h-1 rounded-full" />

        {/* How We Work Section with proper spacing */}
        <section className="mb-24">
          <Card className="bg-gradient-to-br from-brand-light-blue/50 to-brand-light-blue/30 border-0 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-brand-blue mb-8">كيف نعمل؟</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-10 px-8 pb-8">
              <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
                نحن نعمل <span className="font-bold text-brand-blue">كجزء من فريقكم</span>، نقدم الخبرة والدعم اللازمين لإنجاز المهام بكفاءة. 
                سواء كنتم بحاجة إلى استشارات متخصصة، إدارة مشاريع، أو تنفيذ مهام محددة، فإننا هنا لتقديم الدعم الذي يمكنكم الاعتماد عليه.
              </p>
              <div className="flex items-center justify-center space-x-3 space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">تقييم شركائنا لجودة خدماتنا</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action Section with proper spacing */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white border-0 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-8">
                دعوة للعمل
              </CardTitle>
              <CardDescription className="text-xl text-brand-light-blue mb-10 max-w-4xl mx-auto leading-relaxed">
                انضموا إلى قائمة شركائنا الناجحين. تواصلوا معنا اليوم لمناقشة كيف يمكن لـ Zeen A Plus Solutions أن تكون شريككم الأمثل في رحلة النجاح
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <WhatsAppButton 
                  phoneNumber={companyInfo.whatsapp}
                  message="مرحباً، أريد التعرف أكثر على خدماتكم وكيف يمكنكم أن تكونوا شركائنا في النجاح"
                  variant="cta"
                  text="تواصل معنا الآن"
                  className="bg-white text-brand-blue hover:bg-brand-light-blue hover:text-brand-blue-dark border-0 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg"
                />
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/')}
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-10 py-4 text-lg font-bold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  اكتشف خدماتنا
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
