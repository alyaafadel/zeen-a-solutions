
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md border-2 border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-7 h-7 object-contain filter brightness-200"
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

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            من نحن: Zeen-A Solutions
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8">
            شركاؤكم في التميز والإنجاز
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              في Zeen A Plus Solutions، نؤمن بأن النجاح في عالم الأعمال اليوم يتطلب مرونة استثنائية، وصولاً سريعاً للخبرات المتخصصة، وشراكات مبنية على الثقة والاحترافية.
            </p>
            <p>
              نحن لسنا مجرد مزودين للخدمات، بل <span className="font-semibold text-blue-600">شركاء استراتيجيون</span> ننضم إلى فريق عملكم لتقديم حلول متكاملة ومصممة خصيصاً لتلبية احتياجاتكم الفريدة وتحقيق أهدافكم الطموحة.
            </p>
          </div>
        </div>

        <Separator className="mb-16" />

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="h-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-600">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed text-lg text-center">
                أن نكون الشريك المفضل للشركات والأفراد الباحثين عن حلول مبتكرة وفعالة، تمكنهم من تجاوز التحديات وتحقيق أقصى إمكاناتهم في بيئة عمل متغيرة باستمرار.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-600">رسالتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed text-lg text-center">
                تقديم خدمات استشارية وتنفيذية عالية الجودة في مجالات متعددة، من خلال فريق من الخبراء المتخصصين الذين يعملون بمرونة وكفاءة، لضمان إنجاز المهام بدقة واحترافية، وتحقيق قيمة مضافة حقيقية لعملائنا.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-16" />

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">قيمنا الأساسية</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              المبادئ التي تحكم طريقة عملنا وتوجه كل قراراتنا في رحلة الشراكة معكم
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-600">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-16" />

        {/* What Makes Us Different */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">ما يميزنا</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              نجمع بين الخبرة العميقة والمرونة الاستثنائية لنكون شركاؤكم الأمثل في تحقيق النجاح
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {whatMakesUsDifferent.map((item, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blue-600">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-16" />

        {/* How We Work */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-slate-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl text-blue-600 mb-4">كيف نعمل؟</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                نحن نعمل <span className="font-bold text-blue-600">كجزء من فريقكم</span>، نقدم الخبرة والدعم اللازمين لإنجاز المهام بكفاءة. 
                سواء كنتم بحاجة إلى استشارات متخصصة، إدارة مشاريع، أو تنفيذ مهام محددة، فإننا هنا لتقديم الدعم الذي يمكنكم الاعتماد عليه.
              </p>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-600">تقييم شركائنا لجودة خدماتنا</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-16" />

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                دعوة للعمل
              </CardTitle>
              <CardDescription className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                انضموا إلى قائمة شركائنا الناجحين. تواصلوا معنا اليوم لمناقشة كيف يمكن لـ Zeen A Plus Solutions أن تكون شريككم الأمثل في رحلة النجاح
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton 
                  phoneNumber={companyInfo.whatsapp}
                  message="مرحباً، أريد التعرف أكثر على خدماتكم وكيف يمكنكم أن تكونوا شركائنا في النجاح"
                  variant="cta"
                  text="تواصل معنا الآن"
                  className="bg-white text-blue-600 hover:bg-blue-50 border-0 px-8 py-3 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                />
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/')}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-bold transition-all duration-300"
                >
                  اكتشف خدماتنا
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
