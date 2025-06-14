
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Users, Target, Award, UserCheck, TrendingUp, Briefcase, MessageSquare, Globe, FileText, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const mainServices = [
    {
      title: "استقطاب وتوظيف المواهب",
      description: "البحث عن أفضل المواهب والكفاءات المناسبة لشركتك، مع فحص شامل للمهارات والخبرات وضمان الجودة في الاختيار",
      icon: Users,
      specialist: "خبير التوظيف والاستقطاب",
      services: ["البحث عن المواهب", "فحص وتقييم المرشحين", "إجراء المقابلات", "التحقق من المراجع"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات التوظيف والاستقطاب",
      duration: "2-4 أسابيع",
      price: "من 500 ريال"
    },
    {
      title: "إعداد الهياكل التنظيمية",
      description: "تصميم وبناء الهياكل التنظيمية المناسبة لطبيعة عملك، مع تحديد الأدوار والمسؤوليات وخطوط التواصل",
      icon: Target,
      specialist: "خبير التنظيم الإداري",
      services: ["تصميم الهياكل التنظيمية", "تحديد الأدوار والمسؤوليات", "إعداد الوصف الوظيفي", "تحسين سير العمل"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات الهياكل التنظيمية",
      duration: "1-2 أسبوع",
      price: "من 300 ريال"
    },
    {
      title: "التدريب وتطوير الموظفين",
      description: "برامج تدريبية مخصصة لتطوير مهارات فريق العمل وزيادة الإنتاجية، مع متابعة مستمرة لقياس التقدم",
      icon: TrendingUp,
      specialist: "مدرب الموارد البشرية",
      services: ["تصميم البرامج التدريبية", "التدريب عن بُعد", "تقييم المهارات", "خطط التطوير الشخصي"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات التدريب والتطوير",
      duration: "1-4 أسابيع",
      price: "من 400 ريال"
    },
    {
      title: "إدارة الأداء والتقييم",
      description: "نظم متطورة لقياس وتقييم أداء الموظفين، مع إعداد تقارير شاملة وخطط تحسين الأداء المستمر",
      icon: Award,
      specialist: "خبير تقييم الأداء",
      services: ["أنظمة تقييم الأداء", "تقارير الأداء", "خطط التحسين", "مراجعات دورية"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات إدارة الأداء",
      duration: "2-3 أسابيع",
      price: "من 600 ريال"
    },
    {
      title: "استشارات الموارد البشرية",
      description: "استشارات شاملة في جميع جوانب إدارة الموارد البشرية، من السياسات واللوائح إلى حل المشكلات الإدارية",
      icon: UserCheck,
      specialist: "مستشار الموارد البشرية",
      services: ["وضع السياسات", "حل المشكلات الإدارية", "تحسين بيئة العمل", "الامتثال القانوني"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن الاستشارات الإدارية",
      duration: "حسب المشروع",
      price: "من 200 ريال"
    },
    {
      title: "إعداد العقود والوثائق",
      description: "صياغة عقود العمل والوثائق الرسمية بما يتوافق مع القوانين المحلية، مع ضمان حماية حقوق جميع الأطراف",
      icon: FileText,
      specialist: "أخصائي العقود والوثائق",
      services: ["عقود العمل", "اللوائح الداخلية", "الوثائق القانونية", "مراجعة العقود"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات إعداد العقود",
      duration: "3-7 أيام",
      price: "من 150 ريال"
    }
  ];

  const whyChooseUs = [
    "خبرة عملية في مجال الموارد البشرية لأكثر من 5 سنوات",
    "تقديم حلول مخصصة تناسب طبيعة كل عمل",
    "أسعار تنافسية مع جودة عالية في الخدمة",
    "مرونة في التعامل مع المشاريع الصغيرة والكبيرة",
    "دعم مستمر حتى بعد انتهاء المشروع",
    "تسليم في المواعيد المحددة مع ضمان الجودة"
  ];

  const companyInfo = {
    name: "خدمات الموارد البشرية المتخصصة",
    slogan: "شريكك في بناء فريق عمل متميز",
    phone: "+966123456789",
    email: "hr.services@gmail.com",
    whatsapp: "+966123456789",
    description: "متخصص في تقديم خدمات الموارد البشرية الشاملة للشركات والمؤسسات، مع خبرة واسعة في التوظيف والتدريب وإدارة الأداء."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <UserCheck className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{companyInfo.name}</h1>
                <p className="text-sm text-gray-600">{companyInfo.slogan}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <nav className="hidden md:flex space-x-8 space-x-reverse">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">خدماتنا</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
              </nav>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد الاستفسار عن خدمات الموارد البشرية"
                variant="header"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">خدمات الموارد البشرية</span> المتخصصة
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            نساعدك في بناء فريق عمل متميز من خلال خدمات التوظيف والتدريب وإدارة الأداء بأعلى معايير الجودة وأسعار تنافسية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              <a href="#services">اكتشف خدماتنا</a>
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد استشارة مجانية عن خدمات الموارد البشرية"
              variant="cta"
              text="احصل على استشارة مجانية"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا المتخصصة</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الموارد البشرية المصممة خصيصاً لتلبية احتياجات شركتك
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-1">{service.title}</CardTitle>
                      <p className="text-sm text-blue-600 font-medium">{service.specialist}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">المدة: {service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-green-600">{service.price}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">ما نقدمه:</h4>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {service.services.map((item, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
                    message={service.whatsappMessage}
                    variant="service"
                    text="اطلب هذه الخدمة"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة في مجال الموارد البشرية مع التزام بالجودة والمواعيد
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-6">مميزاتنا التنافسية</h4>
              <div className="grid gap-4">
                {whyChooseUs.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">إنجازاتنا</h4>
                <p className="text-gray-600">أرقام تعكس جودة خدماتنا</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 text-sm">مشروع مكتمل</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600 text-sm">عميل راضٍ</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-gray-600 text-sm">سنوات خبرة</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">دعم مستمر</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">ابدأ مشروعك معنا</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية لتطوير الموارد البشرية في شركتك
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">معلومات التواصل</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800">واتس آب (الأسرع)</h5>
                    <p className="text-gray-600">{companyInfo.whatsapp}</p>
                    <WhatsAppButton 
                      phoneNumber={companyInfo.whatsapp}
                      message="مرحباً، أريد الاستفسار عن خدمات الموارد البشرية"
                      variant="inline"
                      text="ابدأ المحادثة"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">الهاتف</h5>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">البريد الإلكتروني</h5>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">طبيعة العمل</h5>
                    <p className="text-gray-600">خدمات فريلانس متخصصة</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">احصل على عرض سعر مجاني</CardTitle>
                <CardDescription>
                  سنتواصل معك خلال 24 ساعة مع عرض سعر مفصل
                  <br />
                  <span className="text-green-600 font-medium">أو تواصل معنا مباشرة عبر الواتس آب للرد الفوري</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">الاسم</Label>
                    <Input id="firstName" placeholder="الاسم الأول" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input id="lastName" placeholder="اسم العائلة" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">اسم الشركة</Label>
                  <Input id="company" placeholder="اسم شركتكم" />
                </div>
                
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="البريد الإلكتروني للتواصل" />
                </div>
                
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" placeholder="رقم الهاتف مع رمز الدولة" />
                </div>
                
                <div>
                  <Label htmlFor="service">الخدمة المطلوبة</Label>
                  <select id="service" className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="">اختر الخدمة</option>
                    <option value="recruitment">استقطاب وتوظيف المواهب</option>
                    <option value="structure">إعداد الهياكل التنظيمية</option>
                    <option value="training">التدريب وتطوير الموظفين</option>
                    <option value="performance">إدارة الأداء والتقييم</option>
                    <option value="consulting">استشارات الموارد البشرية</option>
                    <option value="contracts">إعداد العقود والوثائق</option>
                    <option value="package">باقة شاملة</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">تفاصيل المشروع</Label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                    placeholder="أخبرنا عن احتياجاتك وحجم شركتك..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    إرسال الطلب
                  </Button>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
                    message="مرحباً، أريد عرض سعر لخدمات الموارد البشرية"
                    variant="form"
                    text="أو احصل على عرض سعر فوري عبر الواتس آب"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <UserCheck className="text-white h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">{companyInfo.name}</h5>
                  <p className="text-sm text-gray-400">{companyInfo.slogan}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                {companyInfo.description}
              </p>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد معرفة المزيد عن خدماتكم"
                variant="footer"
                text="تواصل معنا الآن"
              />
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">خدماتنا</h6>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>استقطاب وتوظيف المواهب</li>
                <li>إعداد الهياكل التنظيمية</li>
                <li>التدريب والتطوير</li>
                <li>إدارة الأداء</li>
                <li>الاستشارات الإدارية</li>
                <li>إعداد العقود</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">معلومات التواصل</h6>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center space-x-2 space-x-reverse">
                  <MessageSquare className="h-4 w-4" />
                  <span>{companyInfo.whatsapp}</span>
                </p>
                <p className="flex items-center space-x-2 space-x-reverse">
                  <Mail className="h-4 w-4" />
                  <span>{companyInfo.email}</span>
                </p>
                <p className="flex items-center space-x-2 space-x-reverse">
                  <Briefcase className="h-4 w-4" />
                  <span>خدمات فريلانس</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {companyInfo.name}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <WhatsAppButton 
          phoneNumber={companyInfo.whatsapp}
          message="مرحباً، أريد الاستفسار عن خدمات الموارد البشرية"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default Index;
