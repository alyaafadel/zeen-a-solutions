
import { ArrowLeft, Target, Eye, Users, Award, Lightbulb, Shield, Handshake, CheckCircle, Heart, Globe, Zap, Compass, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

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
      icon: Award,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "المرونة", 
      description: "نتكيف مع متطلباتكم المتغيرة ونقدم حلولاً قابلة للتطوير تلائم احتياجاتكم المتنوعة والمتطورة",
      icon: Zap,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "الابتكار",
      description: "نسعى باستمرار لتقديم أحدث الحلول والأفكار التي تضمن لكم السبق في مجالكم والتميز في أدائكم",
      icon: Lightbulb,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "الشراكة",
      description: "نعمل معكم يداً بيد، كجزء لا يتجزأ من فريقكم، لتحقيق الأهداف المشتركة والنجاح المتبادل",
      icon: Handshake,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "النتائج",
      description: "نركز على تحقيق نتائج ملموسة وقابلة للقياس تساهم في نمو أعمالكم وتطوير مسيرتكم المهنية",
      icon: Target,
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "الثقة",
      description: "نبني علاقات طويلة الأمد مع شركائنا مبنية على الثقة المتبادلة والشفافية في التعامل",
      icon: Shield,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const whatMakesUsDifferent = [
    {
      title: "فريق من الخبراء",
      description: "نمتلك شبكة واسعة من المتخصصين ذوي الخبرة العميقة في مجالات متنوعة، من الموارد البشرية والتطوير التقني إلى التسويق الرقمي والتطوير المهني",
      icon: Users,
      gradient: "from-violet-500 to-violet-600"
    },
    {
      title: "حلول مخصصة",
      description: "نفهم أن كل عميل فريد، ولذلك نقدم حلولاً مصممة خصيصاً لتلبية متطلباتكم الدقيقة، بدلاً من الحلول الجاهزة",
      icon: Compass,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "مرونة لا مثيل لها",
      description: "سواء كنتم بحاجة إلى دعم لمشروع قصير الأجل أو خبرة متخصصة لمهمة محددة، فإننا نقدم لكم الدعم الذي تحتاجونه دون الحاجة إلى التزامات توظيف دائمة",
      icon: Globe,
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "الجودة والالتزام",
      description: "نضمن إنجاز المهام بأعلى مستويات الجودة وفي المواعيد المحددة، مع التركيز على التفاصيل لضمان رضاكم التام",
      icon: CheckCircle,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "القيمة المضافة",
      description: "هدفنا ليس فقط إنجاز المهام، بل تقديم قيمة حقيقية تساهم في تطوير أعمالكم وتحقيق أهدافكم الاستراتيجية",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "الدعم المستمر",
      description: "نقدم دعماً مستمراً ومتابعة دقيقة لضمان تحقيق النتائج المرجوة والاستفادة القصوى من خدماتنا",
      icon: Heart,
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="من نحن - شركاؤكم في التميز والإنجاز"
        description="تعرف على قصة Zeen A Plus Solutions، شركاؤكم الاستراتيجيون في تقديم حلول الأعمال المتخصصة. رؤيتنا، رسالتنا، وقيمنا الأساسية."
        keywords="من نحن، Zeen A Plus Solutions، شركة خدمات، خبرة، احترافية، شراكة، ابتكار"
      />

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">العودة للرئيسية</span>
            </Button>
            
            <div className="text-center">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                    alt="Zeen A Plus Solutions Logo" 
                    className="w-7 h-7 object-contain filter brightness-200"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{companyInfo.name}</h1>
                  <p className="text-sm text-gray-600">شركاؤكم في التميز والإنجاز</p>
                </div>
              </div>
            </div>
            
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-8">
              <Star className="w-4 h-4 ml-2" />
              من نحن: قصة نجاح وشراكة
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Zeen A Plus</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
              شركاؤكم في التميز والإنجاز
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                في Zeen A Plus Solutions، نؤمن بأن النجاح في عالم الأعمال اليوم يتطلب مرونة استثنائية، وصولاً سريعاً للخبرات المتخصصة، وشراكات مبنية على الثقة والاحترافية.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                نحن لسنا مجرد مزودين للخدمات، بل <span className="font-bold text-blue-600">شركاء استراتيجيون</span> ننضم إلى فريق عملكم لتقديم حلول متكاملة ومصممة خصيصاً لتلبية احتياجاتكم الفريدة وتحقيق أهدافكم الطموحة.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Vision and Mission */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">رؤيتنا ورسالتنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              الأسس التي تحرك رحلتنا نحو التميز والريادة في تقديم الخدمات المتخصصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
              <CardHeader className="text-center pb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-4">رؤيتنا</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 relative">
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  أن نكون الشريك المفضل للشركات والأفراد الباحثين عن حلول مبتكرة وفعالة، تمكنهم من تجاوز التحديات وتحقيق أقصى إمكاناتهم في بيئة عمل متغيرة باستمرار.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
              <CardHeader className="text-center pb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 opacity-50"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800 group-hover:text-purple-600 transition-colors duration-300 mb-4">رسالتنا</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 relative">
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  تقديم خدمات استشارية وتنفيذية عالية الجودة في مجالات متعددة، من خلال فريق من الخبراء المتخصصين الذين يعملون بمرونة وكفاءة، لضمان إنجاز المهام بدقة واحترافية، وتحقيق قيمة مضافة حقيقية لعملائنا.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">قيمنا الأساسية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المبادئ التي تحكم طريقة عملنا وتوجه كل قراراتنا في رحلة الشراكة معكم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
                <CardHeader className="text-center pb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-4">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 relative">
                  <p className="text-gray-700 leading-relaxed text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ما يميزنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نجمع بين الخبرة العميقة والمرونة الاستثنائية لنكون شركاؤكم الأمثل في تحقيق النجاح
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whatMakesUsDifferent.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
                <CardHeader className="pb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative flex items-center space-x-6 space-x-reverse">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 relative">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl overflow-hidden">
            <CardHeader className="text-center pb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg mb-8">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-4xl md:text-5xl text-gray-800 mb-6">كيف نعمل؟</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center p-12 relative">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
                نحن نعمل <span className="font-bold text-blue-600">كجزء من فريقكم</span>، نقدم الخبرة والدعم اللازمين لإنجاز المهام بكفاءة. 
                سواء كنتم بحاجة إلى استشارات متخصصة، إدارة مشاريع، أو تنفيذ مهام محددة، فإننا هنا لتقديم الدعم الذي يمكنكم الاعتماد عليه.
              </p>
              <div className="flex items-center justify-center space-x-4 space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-semibold text-xl">تقييم شركائنا لجودة خدماتنا</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 shadow-2xl overflow-hidden">
            <CardHeader className="pb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
              <div className="relative">
                <CardTitle className="text-4xl md:text-5xl font-bold mb-6">
                  دعوة للعمل معاً
                </CardTitle>
                <CardDescription className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
                  انضموا إلى قائمة شركائنا الناجحين. تواصلوا معنا اليوم لمناقشة كيف يمكن لـ Zeen A Plus Solutions أن تكون شريككم الأمثل في رحلة النجاح
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-12 relative">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <WhatsAppButton 
                  phoneNumber={companyInfo.whatsapp}
                  message="مرحباً، أريد التعرف أكثر على خدماتكم وكيف يمكنكم أن تكونوا شركائنا في النجاح"
                  variant="cta"
                  text="تواصل معنا الآن"
                  className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700 border-0 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl min-h-[56px]"
                />
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/')}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[56px]"
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
