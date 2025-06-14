
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
      {/* Enhanced Mobile-Friendly Header with reduced padding */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-1.5 sm:py-2">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-300 rounded-xl px-3 sm:px-4 py-1.5 touch-manipulation"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium text-sm sm:text-base">العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-blue rounded-lg flex items-center justify-center shadow-md border border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="text-sm sm:text-base lg:text-lg font-bold text-brand-blue-dark leading-tight">{companyInfo.name}</h1>
                <p className="text-xs text-slate-600 leading-tight">شركاؤكم في التميز والإنجاز</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Container with Reduced Spacing */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 max-w-6xl">
        {/* Main Title Section with Reduced Spacing */}
        <section className="text-center mb-6 clear-both">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-3 clear-both">
              من نحن: Zeen-A Solutions
            </h1>
            
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-blue-dark mb-3 clear-both">
              شركاؤكم في التميز والإنجاز
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 mb-3 clear-both block">
                في Zeen A Plus Solutions، نؤمن بأن النجاح في عالم الأعمال اليوم يتطلب مرونة استثنائية، وصولاً سريعاً للخبرات المتخصصة، وشراكات مبنية على الثقة والاحترافية.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 mb-3 clear-both block">
                نحن لسنا مجرد مزودين للخدمات، بل <span className="font-semibold text-brand-blue">شركاء استراتيجيون</span> ننضم إلى فريق عملكم لتقديم حلول متكاملة ومصممة خصيصاً لتلبية احتياجاتكم الفريدة وتحقيق أهدافكم الطموحة.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-6 bg-gradient-blue h-0.5 rounded-full" />

        {/* Vision and Mission Section with Reduced Spacing */}
        <section className="mb-6 clear-both">
          <div className="text-center mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-blue mb-3 clear-both">رؤيتنا ورسالتنا</h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto mb-3 clear-both">
              الأسس التي تحرك رحلتنا نحو التميز والريادة في تقديم الخدمات المتخصصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mt-4">
            <Card className="h-full group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-md bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300 mb-2">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300 mb-1">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm text-center">
                  أن نكون الشريك المفضل للشركات والأفراد الباحثين عن حلول مبتكرة وفعالة، تمكنهم من تجاوز التحديات وتحقيق أقصى إمكاناتهم في بيئة عمل متغيرة باستمرار.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-md bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue-light rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300 mb-2">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-brand-blue group-hover:text-brand-accent-blue transition-colors duration-300 mb-1">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm text-center">
                  تقديم خدمات استشارية وتنفيذية عالية الجودة في مجالات متعددة، من خلال فريق من الخبراء المتخصصين الذين يعملون بمرونة وكفاءة، لضمان إنجاز المهام بدقة واحترافية، وتحقيق قيمة مضافة حقيقية لعملائنا.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-6 bg-gradient-blue-light h-0.5 rounded-full" />

        {/* Core Values Section with Reduced Spacing and Better Icon Centering */}
        <section className="mb-6 clear-both">
          <div className="text-center mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-blue mb-3 clear-both">قيمنا الأساسية</h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto mb-3 clear-both">
              المبادئ التي تحكم طريقة عملنا وتوجه كل قراراتنا في رحلة الشراكة معكم
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {coreValues.map((value, index) => (
              <Card key={index} className="h-full group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-md bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 ${
                    index % 3 === 0 ? 'bg-gradient-blue' : 
                    index % 3 === 1 ? 'bg-gradient-blue-light' : 
                    'bg-gradient-dark-blue'
                  } rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300 mb-2`}>
                    <value.icon className="h-5 w-5 text-white" style={{ transform: 'translate(0, 0)' }} />
                  </div>
                  <CardTitle className="text-sm sm:text-base text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300 mb-1">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-slate-700 leading-relaxed text-center text-xs">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-6 bg-gradient-dark-blue h-0.5 rounded-full" />

        {/* What Makes Us Different Section with Reduced Spacing */}
        <section className="mb-6 clear-both">
          <div className="text-center mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-blue mb-3 clear-both">ما يميزنا</h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto mb-3 clear-both">
              نجمع بين الخبرة العميقة والمرونة الاستثنائية لنكون شركاؤكم الأمثل في تحقيق النجاح
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
            {whatMakesUsDifferent.map((item, index) => (
              <Card key={index} className="h-full group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-md bg-white/95 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 ${
                      index % 3 === 0 ? 'bg-gradient-blue' : 
                      index % 3 === 1 ? 'bg-gradient-blue-light' : 
                      'bg-gradient-dark-blue'
                    } rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-5 w-5 text-white" style={{ transform: 'translate(0, 0)' }} />
                    </div>
                    <CardTitle className="text-sm sm:text-base text-brand-blue group-hover:text-brand-blue-dark transition-colors duration-300">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-slate-700 leading-relaxed text-xs">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-6 bg-gradient-blue h-0.5 rounded-full" />

        {/* How We Work Section with Reduced Spacing */}
        <section className="mb-6 clear-both">
          <Card className="bg-gradient-to-br from-brand-light-blue/50 to-brand-light-blue/30 border-0 shadow-lg">
            <CardHeader className="text-center pb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-full flex items-center justify-center mx-auto shadow-md mb-2">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-brand-blue mb-2">كيف نعمل؟</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto mb-3">
                نحن نعمل <span className="font-bold text-brand-blue">كجزء من فريقكم</span>، نقدم الخبرة والدعم اللازمين لإنجاز المهام بكفاءة. 
                سواء كنتم بحاجة إلى استشارات متخصصة، إدارة مشاريع، أو تنفيذ مهام محددة، فإننا هنا لتقديم الدعم الذي يمكنكم الاعتماد عليه.
              </p>
              <div className="flex items-center justify-center space-x-2 space-x-reverse mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium text-xs">تقييم شركائنا لجودة خدماتنا</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action Section with Reduced Spacing */}
        <section className="text-center mb-6 clear-both">
          <Card className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white border-0 shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                دعوة للعمل
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto mb-2">
                انضموا إلى قائمة شركائنا الناجحين. تواصلوا معنا اليوم لمناقشة كيف يمكن لـ Zeen A Plus Solutions أن تكون شريككم الأمثل في رحلة النجاح
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-0 md:flex-row md:gap-4 lg:gap-6 justify-center items-center mt-3">
                <WhatsAppButton 
                  phoneNumber={companyInfo.whatsapp}
                  message="مرحباً، أريد التعرف أكثر على خدماتكم وكيف يمكنكم أن تكونوا شركائنا في النجاح"
                  variant="cta"
                  text="تواصل معنا الآن"
                  className="bg-white text-brand-blue hover:bg-brand-light-blue hover:text-brand-blue-dark border-0 px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg w-full sm:w-auto min-h-[44px] touch-manipulation"
                />
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/')}
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold transition-all duration-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 w-full sm:w-auto min-h-[44px] touch-manipulation"
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
