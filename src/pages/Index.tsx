
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Users, Target, Award, Languages, UserCheck, TrendingUp, Code, Globe, Briefcase, MessageSquare, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const mainProjects = [
    {
      title: "خدمات الترجمة الشاملة",
      description: "ترجمة احترافية من وإلى جميع اللغات بأعلى معايير الجودة والدقة، مع فريق من المترجمين المحترفين المتخصصين",
      icon: Languages,
      specialist: "متخصص اللغات والترجمة",
      services: ["ترجمة المستندات", "الترجمة الفورية", "المراجعة اللغوية", "التعريب والتوطين"]
    },
    {
      title: "حلول الموارد البشرية",
      description: "خدمات شاملة في إدارة الموارد البشرية من التوظيف إلى التطوير، مع استراتيجيات مبتكرة لتنمية المواهب",
      icon: UserCheck,
      specialist: "خبير الموارد البشرية",
      services: ["التوظيف والاستقطاب", "تطوير المواهب", "إدارة الأداء", "التدريب التخصصي"]
    },
    {
      title: "التسويق الإلكتروني",
      description: "استراتيجيات تسويقية رقمية متكاملة لتعزيز حضوركم الإلكتروني وزيادة المبيعات عبر جميع المنصات الرقمية",
      icon: TrendingUp,
      specialist: "خبير التسويق الرقمي",
      services: ["إدارة وسائل التواصل", "الإعلانات المدفوعة", "تحسين محركات البحث", "التسويق بالمحتوى"]
    },
    {
      title: "حلول البرمجة التطبيقية",
      description: "تطوير التطبيقات والمواقع الإلكترونية بأحدث التقنيات، من التصميم إلى التطبيق النهائي مع الدعم الفني المستمر",
      icon: Code,
      specialist: "مطور البرمجيات",
      services: ["تطوير المواقع", "تطبيقات الهاتف", "أنظمة إدارة قواعد البيانات", "الدعم الفني"]
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z+</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Zeen A Plus Solutions</h1>
                <p className="text-sm text-gray-600">أربعة تخصصات، حلول لا محدودة</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">مشاريعنا</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">فريقنا</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
            </nav>
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
            نحن أربعة أصدقاء متخصصين نجمع خبراتنا المتنوعة في الترجمة والموارد البشرية والتسويق الإلكتروني والبرمجة 
            لتقديم حلول شاملة ومتكاملة تلبي جميع احتياجات أعملكم تحت مظلة واحدة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              اكتشف خدماتنا المتكاملة
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
              تحدث مع فريقنا
            </Button>
          </div>
        </div>
      </section>

      {/* Main Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">مشاريعنا الأربعة الرئيسية</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              كل مشروع يقوده متخصص مختلف، وجميعها تعمل بتناغم لتقديم حلول شاملة ومتكاملة لعملائنا
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
                  <div className="grid grid-cols-2 gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
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
              <h4 className="text-2xl font-bold text-gray-800 mb-6">تواصل مع فريقنا</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">للاستشارات والاستفسارات</h5>
                    <p className="text-gray-600">+966 XX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">البريد الإلكتروني</h5>
                    <p className="text-gray-600">info@zeenaplusolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">نخدم عملائنا</h5>
                    <p className="text-gray-600">محلياً وإقليمياً وعالمياً</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">احصل على استشارة مجانية</CardTitle>
                <CardDescription>سنتواصل معك خلال 24 ساعة لمناقشة مشروعك</CardDescription>
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
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  ابدأ مشروعك معنا
                </Button>
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
                  <h5 className="text-xl font-bold">Zeen A Plus Solutions</h5>
                  <p className="text-sm text-gray-400">أربعة تخصصات، حلول لا محدودة</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                نحن فريق من أربعة متخصصين نقدم حلولاً متكاملة في الترجمة والموارد البشرية والتسويق الإلكتروني والبرمجة. 
                شراكة قائمة على الخبرة والتميز.
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">مشاريعنا</h6>
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
                <li><a href="#projects" className="hover:text-white transition-colors">مشاريعنا</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">فريقنا</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">تواصل معنا</h6>
              <div className="space-y-2 text-gray-400">
                <p>info@zeenaplusolutions.com</p>
                <p>نخدم العملاء محلياً</p>
                <p>وإقليمياً وعالمياً</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zeen A Plus Solutions. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
