
import { GraduationCap, ArrowRight, CheckCircle, Home, Book, Users, Award, Target, Code, TrendingUp, Headphones, Clock, Brain, Settings, Briefcase, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

const TrainingServices = () => {
  const navigate = useNavigate();

  const individualTraining = [
    {
      title: "تدريب البرمجة والتطوير",
      description: "برامج شاملة لتعلم البرمجة من الصفر حتى الاحتراف",
      duration: "3-6 أشهر",
      icon: Code,
      features: ["تطوير المواقع", "تطبيقات الموبايل", "قواعد البيانات", "البرمجة المتقدمة"],
      target: "للأفراد الراغبين في دخول مجال التقنية"
    },
    {
      title: "تدريب التسويق الإلكتروني",
      description: "إتقان جميع جوانب التسويق الرقمي والإعلانات",
      duration: "2-4 أشهر",
      icon: TrendingUp,
      features: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين محركات البحث", "تحليل البيانات"],
      target: "للأفراد والمسوقين الجدد"
    },
    {
      title: "تدريب الموارد البشرية",
      description: "برنامج متكامل لإعداد متخصصي الموارد البشرية",
      duration: "2-5 أشهر",
      icon: Users,
      features: ["التوظيف والاختيار", "إدارة الأداء", "التدريب والتطوير", "قوانين العمل"],
      target: "للأفراد الراغبين في العمل بالموارد البشرية"
    }
  ];

  const corporateTraining = [
    {
      title: "تدريب خدمة العملاء",
      description: "رفع مستوى التعامل مع العملاء وحل المشاكل",
      duration: "1-2 أسابيع",
      icon: Headphones,
      features: ["مهارات التواصل", "حل المشاكل", "إدارة الشكاوى", "الاحتراف في الخدمة"],
      target: "لفرق خدمة العملاء"
    },
    {
      title: "إدارة الوقت والإنتاجية",
      description: "تحسين الإنتاجية وإدارة الوقت بفعالية",
      duration: "3-5 أيام",
      icon: Clock,
      features: ["تخطيط المهام", "إدارة الأولويات", "تقنيات الإنتاجية", "العمل تحت الضغط"],
      target: "لجميع فرق العمل"
    },
    {
      title: "المهارات الناعمة (Soft Skills)",
      description: "تطوير المهارات الشخصية والمهنية الأساسية",
      duration: "1-2 أسابيع",
      icon: Brain,
      features: ["التواصل الفعال", "العمل الجماعي", "حل المشكلات", "التفكير الإبداعي"],
      target: "لجميع الموظفين"
    },
    {
      title: "المهارات الإدارية (Management Skills)",
      description: "إعداد المديرين والقيادات الإدارية",
      duration: "2-4 أسابيع",
      icon: Settings,
      features: ["القيادة الإدارية", "إدارة الفرق", "اتخاذ القرارات", "التخطيط الاستراتيجي"],
      target: "للمديرين والقيادات"
    }
  ];

  const trainingMethods = [
    "تدريب حضوري في مقر الشركة",
    "تدريب عن بُعد (أونلاين)",
    "تدريب مدمج (حضوري + عن بُعد)",
    "ورش عمل تفاعلية",
    "برامج تدريبية مكثفة",
    "تدريب فردي متخصص"
  ];

  const benefits = [
    {
      icon: UserCheck,
      title: "مدربون متخصصون",
      description: "خبراء في كل مجال مع سنوات من الخبرة العملية"
    },
    {
      icon: Target,
      title: "تدريب مخصص",
      description: "برامج مصممة خصيصاً لاحتياجاتكم وأهدافكم"
    },
    {
      icon: Award,
      title: "شهادات معتمدة",
      description: "شهادات تدريب معترف بها محلياً ودولياً"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
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
              <GraduationCap className="h-5 w-5 text-slate-600" />
              <span className="font-semibold text-gray-800">خدمات التدريب</span>
            </div>
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد الاستفسار عن خدمات التدريب"
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-slate-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-700 mb-6">خدمات التدريب المتخصصة</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              نطور مهاراتك المهنية ونقوي فريق عملك من خلال برامج تدريبية متخصصة 
              تواكب احتياجات السوق وتحقق أهدافك المهنية
            </p>
            <div className="bg-slate-100 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-slate-700 font-medium">
                <strong>للأفراد:</strong> تدريبات متخصصة لدخول مجالات جديدة أو تطوير مهاراتك الحالية
              </p>
              <div className="border-t border-slate-300 my-3"></div>
              <p className="text-slate-700 font-medium">
                <strong>للشركات:</strong> تدريب فرق العمل لرفع الكفاءة والإنتاجية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-700 mb-12">مميزات برامجنا التدريبية</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-700 mb-2">{benefit.title}</h4>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-700 mb-4">التدريب للأفراد</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              برامج تدريبية شاملة لتأهيلك للدخول في مجالات مطلوبة في السوق
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {individualTraining.map((course, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-slate-50 text-center">
                  <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-700 mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-base">
                    {course.description}
                  </CardDescription>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-500 mb-2">المدة: {course.duration}</div>
                    <div className="text-sm text-slate-700 font-medium">{course.target}</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber="+966123456789"
                    message={`مرحباً، أريد الاستفسار عن ${course.title}`}
                    variant="service"
                    text="استفسر عن البرنامج"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-700 mb-4">التدريب للشركات</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              برامج تدريبية لفرق العمل لرفع الكفاءة والإنتاجية في بيئة العمل
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {corporateTraining.map((course, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <course.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-700 mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-slate-600 text-base mb-3">
                        {course.description}
                      </CardDescription>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">المدة: {course.duration}</span>
                        <span className="text-slate-700 font-medium">{course.target}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber="+966123456789"
                    message={`مرحباً، نحتاج تدريب فريقنا في ${course.title}`}
                    variant="service"
                    text="احجز تدريب للفريق"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Target className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-slate-700 mb-4">أساليب التدريب المتاحة</h3>
            <p className="text-xl text-slate-600">نقدم مرونة في اختيار طريقة التدريب المناسبة لك</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {trainingMethods.map((method, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-slate-700">{method}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">ابدأ رحلة التطوير اليوم</h3>
          <p className="text-xl mb-8 text-slate-200">
            استثمر في تطوير مهاراتك أو فريق عملك واحصل على شهادات معتمدة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber="+966123456789"
              message="مرحباً، أريد معلومات عن البرامج التدريبية المتاحة للأفراد والشركات"
              variant="cta"
              text="استفسر عن البرامج"
              className="bg-white text-slate-700 hover:bg-slate-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-slate-700 px-8"
            >
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingServices;
