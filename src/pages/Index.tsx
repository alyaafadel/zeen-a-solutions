
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const services = [
    {
      title: "استشارات الأعمال",
      description: "نقدم استشارات متخصصة لتطوير أعمالكم ووضع الخطط الاستراتيجية المناسبة",
      icon: Target
    },
    {
      title: "الحلول التقنية",
      description: "حلول تقنية متطورة ومبتكرة لتحسين كفاءة العمل والإنتاجية",
      icon: Award
    },
    {
      title: "إدارة المشاريع",
      description: "خدمات إدارة المشاريع الاحترافية لضمان تنفيذ مشاريعكم في الوقت المحدد",
      icon: Users
    }
  ];

  const features = [
    "خبرة أكثر من 10 سنوات في السوق",
    "فريق عمل محترف ومتخصص",
    "حلول مبتكرة ومخصصة لكل عميل",
    "دعم فني متواصل على مدار 24/7",
    "أسعار تنافسية وجودة عالية",
    "التزام بالمواعيد والجودة"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ش</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">شركتي</h1>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">خدماتنا</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            نحن هنا لنساعدك في 
            <span className="text-blue-600"> تحقيق أهدافك</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            شركة رائدة في تقديم الحلول المتكاملة والخدمات المتميزة للشركات والأفراد. 
            نحن نؤمن بالجودة والابتكار في كل ما نقدمه.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              ابدأ معنا الآن
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
              تعرف على خدماتنا
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا المتميزة</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجاتكم وتحقيق أهدافكم
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">لماذا تختار شركتنا؟</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نحن شركة متخصصة في تقديم أفضل الحلول والخدمات لعملائنا. 
                بفضل خبرتنا الطويلة وفريق العمل المحترف، نضمن لكم الحصول على أعلى مستوى من الجودة والخدمة.
              </p>
              
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">إحصائيات نفتخر بها</h4>
                <p className="text-gray-600">أرقام تعكس تميزنا وثقة عملائنا</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">عميل سعيد</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">مشروع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">سنوات خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">موظف محترف</div>
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
            <h3 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في تحقيق أهدافكم
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">معلومات التواصل</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">رقم الهاتف</h5>
                    <p className="text-gray-600">+966 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">البريد الإلكتروني</h5>
                    <p className="text-gray-600">info@mycompany.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">العنوان</h5>
                    <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">أرسل لنا رسالة</CardTitle>
                <CardDescription>سنتواصل معك في أقرب وقت ممكن</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" placeholder="أدخل اسمك الأول" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input id="lastName" placeholder="أدخل اسم العائلة" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" placeholder="أدخل رقم هاتفك" />
                </div>
                
                <div>
                  <Label htmlFor="message">الرسالة</Label>
                  <textarea 
                    id="message" 
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ش</span>
                </div>
                <h5 className="text-xl font-bold">شركتي</h5>
              </div>
              <p className="text-gray-400 leading-relaxed">
                شركة رائدة في تقديم الحلول المتكاملة والخدمات المتميزة للشركات والأفراد.
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">روابط سريعة</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">خدماتنا</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">خدماتنا</h6>
              <ul className="space-y-2 text-gray-400">
                <li>استشارات الأعمال</li>
                <li>الحلول التقنية</li>
                <li>إدارة المشاريع</li>
                <li>الدعم الفني</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">تواصل معنا</h6>
              <div className="space-y-2 text-gray-400">
                <p>+966 50 123 4567</p>
                <p>info@mycompany.com</p>
                <p>الرياض، السعودية</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 شركتي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
