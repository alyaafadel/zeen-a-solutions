
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
    { icon: UserPlus, number: "150+", label: "مهمة مكتملة" }
  ];

  const coreValues = [
    {
      title: "ننضم لفريقكم مؤقتاً",
      description: "نعمل كأعضاء في فريقكم لفترة محددة حتى إنجاز المهمة المطلوبة، ثم ننتقل للمهمة التالية عند الحاجة",
      icon: UserPlus
    },
    {
      title: "متخصصون في كل مجال",
      description: "كل مهمة يتولاها متخصص خبير في المجال المطلوب، مما يضمن جودة عالية ونتائج احترافية",
      icon: Target
    },
    {
      title: "بدون التزامات التوظيف",
      description: "لا رواتب شهرية، لا تأمينات، لا إجازات - فقط نتائج عالية الجودة بتكلفة المهمة فقط",
      icon: Shield
    },
    {
      title: "جاهزون عند الطلب",
      description: "متاحون للمهام الجديدة في أي وقت، سواء كانت مهام طارئة أو مشاريع مخطط لها مسبقاً",
      icon: Zap
    }
  ];

  const whyChooseUs = [
    { 
      text: "ننجز المهام كأعضاء فريق مؤقتين بدلاً من التوظيف الدائم", 
      icon: UserPlus,
      description: "تحصل على خبرة متخصصة لإنجاز مهامك دون تكاليف الموظف الدائم"
    },
    { 
      text: "متخصصون جاهزون فوراً - لا انتظار للتوظيف والتدريب", 
      icon: Zap,
      description: "فريقنا مدرب ومؤهل لبدء العمل من اليوم الأول دون فترات انتظار"
    },
    { 
      text: "ندفع فقط مقابل المهام المنجزة - لا رواتب شهرية ثابتة", 
      icon: TrendingUp,
      description: "وفر 60-80% من تكلفة الموظف الدائم مع ضمان إنجاز المهام بجودة عالية"
    },
    { 
      text: "مرونة كاملة - متاحون عند الحاجة فقط", 
      icon: Globe,
      description: "اطلب خدماتنا عند الحاجة، لا التزامات طويلة المدى أو عقود معقدة"
    },
    { 
      text: "نتحمل مسؤولية النتائج - ضمان الجودة أو إعادة العمل", 
      icon: Award,
      description: "نضمن جودة العمل المنجز ونعيد العمل مجاناً في حالة عدم الرضا"
    },
    { 
      text: "خبرة متعددة التخصصات في فريق واحد", 
      icon: Users,
      description: "احصل على خبرات متنوعة من التقنية للتسويق للموارد البشرية من مصدر واحد"
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
              <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-md border-2 border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-9 h-9 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-700">{companyInfo.name}</h1>
                <p className="text-sm text-slate-600">شركاؤكم المتخصصون</p>
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
              ننضم لفريقكم 
              <br />
              <span className="text-slate-600">كشركاء متخصصين</span>
            </h1>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-600">
              نعمل مع الشركات والأفراد كأعضاء فريق مؤقتين لإنجاز المهام المطلوبة. ننهي المهمة بجودة عالية ونكون جاهزين للمهمة التالية عند الحاجة - بدون توظيف دائم أو التزامات طويلة
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
            <h2 className="text-4xl font-bold text-slate-700 mb-4">مفهومنا في الشراكة</h2>
            <div className="w-20 h-1 bg-slate-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              نؤمن بأن الشركات والأفراد يحتاجون لخبرات متخصصة لفترات محددة، وليس بالضرورة موظفين دائمين
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
                  أن نكون الخيار الأول للشركات والأفراد الذين يحتاجون شركاء متخصصين ينضمون لفريقهم مؤقتاً لإنجاز المهام بجودة عالية وبدون التزامات التوظيف التقليدية
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
                  نقدم خدمات متخصصة في مختلف المجالات من خلال انضمامنا لفرق العمل كشركاء مؤقتين. ننجز المهام المطلوبة بأعلى جودة ونكون متاحين للمهام الجديدة عند الحاجة
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
            <h2 className="text-4xl font-bold text-slate-700 mb-4">كيف نعمل كشركاء</h2>
            <div className="w-20 h-1 bg-slate-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              المبادئ التي تحكم طريقة عملنا كشركاء متخصصين مع فرق العمل
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
            <h2 className="text-4xl font-bold text-slate-700 mb-4">لماذا تختار Zeen كشريك؟</h2>
            <div className="w-20 h-1 bg-slate-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-4">
              <span className="font-semibold text-slate-700">لا تحتاج موظفين دائمين</span> - فقط شركاء متخصصين ينضمون لفريقك عند الحاجة وينجزون المهام بجودة عالية
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
              أكثر من 200 شريك استفاد من خدماتنا ووفر تكاليف التوظيف والإدارة
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <reason.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-700 mb-2 leading-tight">{reason.text}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 text-center">
            <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-200">
              <div className="text-3xl text-slate-300 mb-4">"</div>
              <p className="text-xl text-slate-600 leading-relaxed mb-6 italic">
                "احتجنا متخصص تسويق رقمي لمدة شهرين فقط لإطلاق منتج جديد. بدلاً من توظيف موظف دائم براتب شهري، 
                تعاملنا مع Zeen كشركاء وانضم أحد خبرائهم لفريقنا، أنجز المهمة بتميز ووفرنا أكثر من 70% من التكلفة"
              </p>
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-500 text-sm font-medium">- أحد شركائنا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            تحتاج شريك متخصص 
            <br />
            <span className="text-slate-200">ينضم لفريقك؟</span>
          </h2>
          <p className="text-xl mb-10 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            احصل على خبرات متخصصة تنضم لفريقك مؤقتاً لإنجاز المهام المطلوبة. 
            بدون توظيف دائم، بدون التزامات طويلة، فقط نتائج عالية الجودة
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد شريك متخصص ينضم لفريقنا لإنجاز مهام محددة"
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
