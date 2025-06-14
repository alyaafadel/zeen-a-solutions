
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
    <div className="min-h-screen bg-pattern-subtle about-page-container" dir="rtl">
      {/* Enhanced Mobile-Friendly Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-300 rounded-xl px-4 sm:px-6 py-2 sm:py-3 touch-manipulation"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium text-sm sm:text-base lg:text-lg">العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-3 sm:space-x-4 space-x-reverse">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="text-base sm:text-lg lg:text-xl font-bold text-brand-blue-dark leading-tight">{companyInfo.name}</h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-tight">شركاؤكم في التميز والإنجاز</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Container with Reduced Spacing */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-6xl">
        {/* Main Title Section with Reduced Spacing */}
        <section className="text-center mb-8 clear-both">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 clear-both">
              من نحن: Zeen-A Solutions
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-brand-blue-dark mb-4 clear-both">
              شركاؤكم في التميز والإنجاز
            </h2>
            
            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 mb-4 clear-both block">
                في Zeen A Plus Solutions، نؤمن بأن النجاح في عالم الأعمال اليوم يتطلب مرونة استثنائية، وصولاً سريعاً للخبرات المتخصصة، وشراكات مبنية على الثقة والاحترافية.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 mb-4 clear-both block">
                نحن لسنا مجرد مزودين للخدمات، بل <span className="font-semibold text-brand-blue">شركاء استراتيجيون</span> ننضم إلى فريق عملكم لتقديم حلول متكاملة ومصممة خصيصاً لتلبية احتياجاتكم الفريدة وتحقيق أهدافكم الطموحة.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gradient-blue h-1 rounded-full" />

        {/* Vision and Mission Section with Reduced Spacing */}
        <section className="mb-8 clear-both">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue mb-4 clear-both">رؤيتنا ورسالتنا</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-4xl mx-auto mb-4 clear-both">
              الأسس التي تحرك رحلتنا نحو التميز والريادة في تقديم الخدمات المتخصصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
            <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-blue rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3">
                  <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300 mb-2">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base text-center">
                  أن نكون الشريك المفضل للشركات والأفراد الباحثين عن حلول مبتكرة وفعالة، تمكنهم من تجاوز التحديات وتحقيق أقصى إمكاناتهم في بيئة عمل متغيرة باستمرار.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-blue-light rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-brand-blue group-hover:text-brand-accent-blue transition-colors duration-300 mb-2">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base text-center">
                  تقديم خدمات استشارية وتنفيذية عالية الجودة في مجالات متعددة، من خلال فريق من الخبراء المتخصصين الذين يعملون بمرونة وكفاءة، لضمان إنجاز المهام بدقة واحترافية، وتحقيق قيمة مضافة حقيقية لعملائنا.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8 bg-gradient-blue-light h-1 rounded-full" />

        {/* Core Values Section with Reduced Spacing */}
        <section className="mb-8 clear-both">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue mb-4 clear-both">قيمنا الأساسية</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-4xl mx-auto mb-4 clear-both">
              المبادئ التي تحكم طريقة عملنا وتوجه كل قراراتنا في رحلة الشراكة معكم
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${
                    index % 3 === 0 ? 'bg-gradient-blue' : 
                    index % 3 === 1 ? 'bg-gradient-blue-light' : 
                    'bg-gradient-dark-blue'
                  } rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2`}>
                    <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300 mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-slate-700 leading-relaxed text-center text-xs sm:text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8 bg-gradient-dark-blue h-1 rounded-full" />

        {/* What Makes Us Different Section with Reduced Spacing */}
        <section className="mb-8 clear-both">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue mb-4 clear-both">ما يميزنا</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-4xl mx-auto mb-4 clear-both">
              نجمع بين الخبرة العميقة والمرونة الاستثنائية لنكون شركاؤكم الأمثل في تحقيق النجاح
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mt-6">
            {whatMakesUsDifferent.map((item, index) => (
              <Card key={index} className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${
                      index % 3 === 0 ? 'bg-gradient-blue' : 
                      index % 3 === 1 ? 'bg-gradient-blue-light' : 
                      'bg-gradient-dark-blue'
                    } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8 bg-gradient-blue h-1 rounded-full" />

        {/* How We Work Section with Reduced Spacing */}
        <section className="mb-8 clear-both">
          <Card className="bg-gradient-to-br from-brand-light-blue/50 to-brand-light-blue/30 border-0 shadow-xl">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto shadow-lg mb-3">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-brand-blue mb-2">كيف نعمل؟</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl mx-auto mb-3">
                نحن نعمل <span className="font-bold text-brand-blue">كجزء من فريقكم</span>، نقدم الخبرة والدعم اللازمين لإنجاز المهام بكفاءة. 
                سواء كنتم بحاجة إلى استشارات متخصصة، إدارة مشاريع، أو تنفيذ مهام محددة، فإننا هنا لتقديم الدعم الذي يمكنكم الاعتماد عليه.
              </p>
              <div className="flex items-center justify-center space-x-2 space-x-reverse mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium text-xs sm:text-sm">تقييم شركائنا لجودة خدماتنا</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action Section with Reduced Spacing */}
        <section className="text-center mb-8 clear-both">
          <Card className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white border-0 shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                دعوة للعمل
              </CardTitle>
              <CardDescription className="text-base sm:text-lg md:text-xl text-brand-light-blue max-w-4xl mx-auto mb-3">
                انضموا إلى قائمة شركائنا الناجحين. تواصلوا معنا اليوم لمناقشة كيف يمكن لـ Zeen A Plus Solutions أن تكون شريككم الأمثل في رحلة النجاح
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:gap-6 lg:gap-8 justify-center items-center mt-4">
                <WhatsAppButton 
                  phoneNumber={companyInfo.whatsapp}
                  message="مرحباً، أريد التعرف أكثر على خدماتكم وكيف يمكنكم أن تكونوا شركائنا في النجاح"
                  variant="cta"
                  text="تواصل معنا الآن"
                  className="bg-white text-brand-blue hover:bg-brand-light-blue hover:text-brand-blue-dark border-0 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg w-full sm:w-auto min-h-[48px] touch-manipulation"
                />
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/')}
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto min-h-[48px] touch-manipulation"
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
