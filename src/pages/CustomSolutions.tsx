
import { Lightbulb, ArrowRight, CheckCircle, Home, Cog, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const CustomSolutions = () => {
  const navigate = useNavigate();

  const solutionTypes = [
    {
      title: "الحلول التقنية المخصصة",
      description: "تطوير أنظمة وتطبيقات مصممة خصيصاً لاحتياجاتكم",
      features: ["تحليل المتطلبات", "تصميم النظام", "التطوير والتنفيذ", "الدعم والصيانة"]
    },
    {
      title: "الاستشارات الإدارية",
      description: "حلول إدارية متكاملة لتحسين كفاءة أعمالكم",
      features: ["تحليل العمليات", "تحسين الإجراءات", "إدارة التغيير", "تدريب الفرق"]
    },
    {
      title: "حلول التسويق المتكاملة",
      description: "استراتيجيات تسويقية شاملة لتحقيق أهدافكم التجارية",
      features: ["دراسة السوق", "وضع الاستراتيجية", "تنفيذ الحملات", "قياس النتائج"]
    },
    {
      title: "حلول الموارد البشرية",
      description: "أنظمة إدارة شاملة للموارد البشرية في مؤسستكم",
      features: ["تصميم الهيكل", "وضع السياسات", "نظم التقييم", "برامج التطوير"]
    }
  ];

  const process = [
    {
      icon: Target,
      title: "تحديد الاحتياجات",
      description: "نحلل احتياجاتكم ونفهم تحدياتكم بدقة"
    },
    {
      icon: Lightbulb,
      title: "تصميم الحل",
      description: "نبتكر حلول مخصصة تناسب طبيعة عملكم"
    },
    {
      icon: Cog,
      title: "التنفيذ",
      description: "ننفذ الحلول بأعلى معايير الجودة"
    },
    {
      icon: Users,
      title: "المتابعة والدعم",
      description: "نقدم الدعم المستمر لضمان النجاح"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "حلول مبتكرة",
      description: "نقدم حلول إبداعية تواكب أحدث التطورات"
    },
    {
      icon: Target,
      title: "تلبية دقيقة للاحتياجات",
      description: "حلول مصممة خصيصاً لتحدياتكم الفريدة"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "خبراء في مختلف المجالات لخدمة مشروعكم"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Home className="h-4 w-4" />
                <span>الرئيسية</span>
              </Button>
              <span className="text-gray-400">/</span>
              <Lightbulb className="h-5 w-5 text-sky-500" />
              <span className="font-semibold text-gray-800">الحلول المخصصة</span>
            </div>
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد الاستفسار عن الحلول المخصصة"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-sky-400 to-sky-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Lightbulb className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-sky-700 mb-6">الحلول المخصصة</h1>
            <p className="text-xl text-sky-600 mb-12 leading-relaxed">
              نبتكر حلول مخصصة تماماً لاحتياجاتكم الفريدة، مع الجمع بين الخبرة والإبداع لتحقيق أهدافكم بأكثر الطرق فعالية
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">لماذا الحلول المخصصة؟</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-sky-700 mb-2">{benefit.title}</h4>
                <p className="text-sky-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">أنواع الحلول المخصصة</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutionTypes.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-sky-50 pb-6">
                  <CardTitle className="text-2xl text-sky-700 mb-2 text-right">{solution.title}</CardTitle>
                  <CardDescription className="text-sky-600 leading-relaxed text-base text-right">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-sky-500 flex-shrink-0" />
                        <span className="text-sky-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber="+966123456789"
                    message={`مرحباً، أريد الاستفسار عن ${solution.title}`}
                    variant="service"
                    text="اطلب الخدمة الآن"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">كيف نعمل</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative">
                  <step.icon className="h-8 w-8 text-white" />
                  <span className="absolute -top-2 -right-2 bg-sky-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-sky-700 mb-2">{step.title}</h4>
                <p className="text-sky-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">لديك تحدي فريد؟</h3>
          <p className="text-xl mb-8 opacity-90">تحدث معنا واحصل على حل مخصص يناسب احتياجاتك تماماً</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أحتاج حل مخصص لمشروعي"
              variant="cta"
              text="احصل على استشارة مجانية"
              className="bg-white text-sky-600 hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/custom-request')}
              className="border-white text-white hover:bg-white hover:text-sky-600 px-8"
            >
              أرسل طلب مخصص
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;
