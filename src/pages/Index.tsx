import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Users, Target, Award, Languages, UserCheck, TrendingUp, Code, Globe, Briefcase, MessageSquare, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const mainProjects = [
    {
      title: "خدمات الترجمة الشاملة",
      description: "ترجمة احترافية من وإلى جميع اللغات بأعلى معايير الجودة والدقة، مع فريق من المترجمين المحترفين المتخصصين",
      icon: Languages,
      specialist: "متخصص اللغات والترجمة",
      services: ["ترجمة المستندات", "الترجمة الفورية", "المراجعة اللغوية", "التعريب والتوطين"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات الترجمة"
    },
    {
      title: "حلول الموارد البشرية",
      description: "خدمات شاملة في إدارة الموارد البشرية من التوظيف إلى التطوير، مع استراتيجيات مبتكرة لتنمية المواهب",
      icon: UserCheck,
      specialist: "خبير الموارد البشرية",
      services: ["التوظيف والاستقطاب", "تطوير المواهب", "إدارة الأداء", "التدريب التخصصي"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن حلول الموارد البشرية"
    },
    {
      title: "التسويق الإلكتروني",
      description: "استراتيجيات تسويقية رقمية متكاملة لتعزيز حضوركم الإلكتروني وزيادة المبيعات عبر جميع المنصات الرقمية",
      icon: TrendingUp,
      specialist: "خبير التسويق الرقمي",
      services: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين محركات البحث", "التسويق بالمحتوى"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن خدمات التسويق الإلكتروني"
    },
    {
      title: "حلول البرمجة التطبيقية",
      description: "تطوير التطبيقات والمواقع الإلكترونية بأحدث التقنيات، من التصميم إلى التطبيق النهائي مع الدعم الفني المستمر",
      icon: Code,
      specialist: "مطور البرمجيات",
      services: ["تطوير المواقع", "تطبيقات الهاتف", "أنظمة إدارة قواعد البيانات", "الدعم الفني"],
      whatsappMessage: "مرحباً، أريد الاستفسار عن حلول البرمجة والتطوير"
    }
  ];

  const whyChooseUs = [
    "فريق من أربعة متخصصين في مجالات مختلفة",
    "حلول متكاملة تغطي جميع احتياجات الأعمال الحديثة",
    "خبرة واسعة في التعامل مع العملاء العرب والأجانب",
    "استخدام أحدث التقنيات والأدوات المتخصصة",
    "التزام بمعايير الجودة العالمية والتسليم في الوقت المحدد",
    "دعم فني مستمر وخدمة عملاء متميزة على مدار الساعة"
  ];

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "أربعة تخصصات، حلول لا محدودة",
    phone: "+966123456789",
    email: "info@zeenaplusolutions.com",
    whatsapp: "+966123456789",
    description: "شركة رائدة في تقديم الحلول المتكاملة للأعمال، نجمع بين أربعة تخصصات أساسية لنقدم لعملائنا خدمات شاملة تحت مظلة واحدة."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z+</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{companyInfo.name}</h1>
                <p className="text-sm text-gray-600">{companyInfo.slogan}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <nav className="hidden md:flex space-x-8 space-x-reverse">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
                <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">خدماتنا</a>
                <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">عن الشركة</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
              </nav>
              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد التحدث مع فريق Zeen A Plus Solutions"
                variant="cta"
                text="تحدث معنا عبر الواتس آب"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">أربعة تخصصات</span> في مكان واحد
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              <a href="#projects">اكتشف خدماتنا المتكاملة</a>
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد الاستفسار عن خدمات شركة Zeen A Plus Solutions"
              variant="cta"
              text="استفسر عن خدماتنا"
            />
          </div>
        </div>
      </section>

      {/* Main Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا الأربعة الرئيسية</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              كل خدمة يقودها متخصص مختلف، وجميعها تعمل بتناغم لتقديم حلول شاملة ومتكاملة لعملائنا
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {mainProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <project.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 mb-1">{project.title}</CardTitle>
                      <p className="text-sm text-blue-600 font-medium">{project.specialist}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">الخدمات المتاحة:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
                    message={project.whatsappMessage}
                    variant="service"
                    text="استفسر عن هذه الخدمة"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">لماذا نحن الخيار الأمثل؟</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              أربعة متخصصين، أربعة مجالات، رؤية واحدة لتقديم أفضل الخدمات
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold text-gray-800 mb-6">نقاط قوتنا التنافسية</h4>
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
                <h4 className="text-2xl font-bold text-gray-800 mb-2">إحصائيات النجاح</h4>
                <p className="text-gray-600">أرقام تتحدث عن جودة خدماتنا</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600 text-sm">مشروع مكتمل</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                  <div className="text-gray-600 text-sm">عميل راضٍ</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                  <div className="text-gray-600 text-sm">تخصصات رئيسية</div>
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
              اختر الخدمة التي تحتاجها أو احصل على حل متكامل يجمع بين جميع تخصصاتنا
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
                      message="مرحباً، أريد الاستفسار عن خدمات الشركة"
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
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">نطاق الخدمة</h5>
                    <p className="text-gray-600">محلياً وإقليمياً وعالمياً</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">احصل على استشارة مجانية</CardTitle>
                <CardDescription>
                  سنتواصل معك خلال 24 ساعة لمناقشة مشروعك
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
                  <Input id="company" placeholder="اسم شركتكم (اختياري)" />
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
                  <Label htmlFor="service">المشروع المطلوب</Label>
                  <select id="service" className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="">اختر المشروع</option>
                    <option value="translation">خدمات الترجمة</option>
                    <option value="hr">حلول الموارد البشرية</option>
                    <option value="marketing">التسويق الإلكتروني</option>
                    <option value="programming">حلول البرمجة</option>
                    <option value="integrated">حل متكامل (جميع الخدمات)</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">تفاصيل المشروع</Label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                    placeholder="أخبرنا عن مشروعك وأهدافك..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    إرسال الطلب
                  </Button>
                  <WhatsAppButton 
                    phoneNumber={companyInfo.whatsapp}
                    message="مرحباً، أريد استشارة مجانية عن خدماتكم"
                    variant="form"
                    text="أو تواصل فوراً عبر الواتس آب"
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
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z+</span>
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
                message="مرحباً، أريد معرفة المزيد عن شركة Zeen A Plus Solutions"
                variant="footer"
                text="تواصل معنا عبر الواتس آب"
              />
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">خدماتنا</h6>
              <ul className="space-y-2 text-gray-400">
                <li>خدمات الترجمة الشاملة</li>
                <li>حلول الموارد البشرية</li>
                <li>التسويق الإلكتروني</li>
                <li>حلول البرمجة التطبيقية</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">روابط سريعة</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">خدماتنا</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">عن الشركة</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">معلومات التواصل</h6>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2 space-x-reverse">
                  <MessageSquare className="h-4 w-4" />
                  <span>{companyInfo.whatsapp}</span>
                </p>
                <p className="flex items-center space-x-2 space-x-reverse">
                  <Mail className="h-4 w-4" />
                  <span>{companyInfo.email}</span>
                </p>
                <p className="flex items-center space-x-2 space-x-reverse">
                  <Globe className="h-4 w-4" />
                  <span>خدمة عالمية</span>
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
          message="مرحباً، أريد الاستفسار عن خدمات Zeen A Plus Solutions"
          variant="floating"
          text="تحدث معنا"
        />
      </div>
    </div>
  );
};

export default Index;
