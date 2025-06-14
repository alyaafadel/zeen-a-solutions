
import { ArrowLeft, Star, Lightbulb, Users, Target, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const CustomRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    goals: ''
  });

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    whatsapp: "+966570513821"
  };

  const services = [
    {
      title: "تحليل واستشارة",
      description: "نحلل احتياجات شركتك ونقدم التوصيات المناسبة",
      icon: Target
    },
    {
      title: "حلول مبتكرة",
      description: "نطور حلول مخصصة تناسب طبيعة عملك تماماً",
      icon: Lightbulb
    },
    {
      title: "فريق متخصص",
      description: "نجمع فريق الخبراء المناسب لمشروعك",
      icon: Users
    },
    {
      title: "متابعة شاملة",
      description: "نضمن نجاح المشروع من البداية حتى النهاية",
      icon: CheckCircle
    }
  ];

  const industries = [
    "التجارة الإلكترونية",
    "التعليم",
    "الصحة والطب",
    "التقنية والبرمجيات",
    "العقارات",
    "الخدمات المالية",
    "الصناعة والتصنيع",
    "السياحة والضيافة",
    "الغذاء والمشروبات",
    "الخدمات الحكومية",
    "أخرى"
  ];

  const projectTypes = [
    "تطوير موقع إلكتروني",
    "تطبيق جوال",
    "نظام إدارة",
    "حملة تسويقية شاملة",
    "إعادة هيكلة الموارد البشرية",
    "خدمات ترجمة متخصصة",
    "حلول لوجستية",
    "برنامج تدريبي",
    "استشارة شاملة",
    "مشروع متكامل",
    "أخرى"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب خدمة مخصصة:

معلومات العميل:
الاسم: ${formData.name}
الشركة: ${formData.company}
البريد الإلكتروني: ${formData.email}
الهاتف: ${formData.phone}

تفاصيل المشروع:
القطاع: ${formData.industry}
نوع المشروع: ${formData.projectType}
الميزانية المتوقعة: ${formData.budget}
الإطار الزمني: ${formData.timeline}

وصف المشروع:
${formData.description}

الأهداف المطلوبة:
${formData.goals}`;

    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>العودة للرئيسية</span>
            </Button>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg border">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h1 className="text-lg font-bold text-gray-800">{companyInfo.name}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">طلبك المخصص</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            نحن مجموعة من الخبراء المتخصصين جاهزون لمساعدتك في تحديد ما تحتاجه شركتك من تطوير وخدمات، 
            وتقديم أفضل الاقتراحات والحلول المبتكرة لتحقيق أهدافك
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">كيف نساعدك؟</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">احصل على استشارة مجانية</CardTitle>
                <CardDescription>
                  أخبرنا عن مشروعك وسنقوم بتحليل احتياجاتك وتقديم أفضل الحلول
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">اسم الشركة</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">القطاع</Label>
                      <Select onValueChange={(value) => setFormData({...formData, industry: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر القطاع" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry, index) => (
                            <SelectItem key={index} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">نوع المشروع</Label>
                      <Select onValueChange={(value) => setFormData({...formData, projectType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر نوع المشروع" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type, index) => (
                            <SelectItem key={index} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">الميزانية المتوقعة</Label>
                      <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الميزانية" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="أقل من 10,000 ريال">أقل من 10,000 ريال</SelectItem>
                          <SelectItem value="10,000 - 25,000 ريال">10,000 - 25,000 ريال</SelectItem>
                          <SelectItem value="25,000 - 50,000 ريال">25,000 - 50,000 ريال</SelectItem>
                          <SelectItem value="50,000 - 100,000 ريال">50,000 - 100,000 ريال</SelectItem>
                          <SelectItem value="أكثر من 100,000 ريال">أكثر من 100,000 ريال</SelectItem>
                          <SelectItem value="سأناقش لاحقاً">سأناقش لاحقاً</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">الإطار الزمني</Label>
                      <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الإطار الزمني" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="خلال شهر">خلال شهر</SelectItem>
                          <SelectItem value="خلال 3 أشهر">خلال 3 أشهر</SelectItem>
                          <SelectItem value="خلال 6 أشهر">خلال 6 أشهر</SelectItem>
                          <SelectItem value="أكثر من 6 أشهر">أكثر من 6 أشهر</SelectItem>
                          <SelectItem value="مرن">مرن</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">وصف المشروع والتحديات</Label>
                    <Textarea
                      id="description"
                      placeholder="اشرح لنا طبيعة مشروعك والتحديات التي تواجهها..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">الأهداف المطلوب تحقيقها</Label>
                    <Textarea
                      id="goals"
                      placeholder="ما هي الأهداف التي تريد تحقيقها من هذا المشروع؟"
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <MessageSquare className="ml-2 h-4 w-4" />
                    إرسال الطلب والحصول على استشارة مجانية
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">لماذا تختار خدماتنا المخصصة؟</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">حلول مخصصة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-gray-600">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">دعم مستمر</div>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            فريقنا من الخبراء سيقوم بدراسة مشروعك بعناية وتقديم أفضل الحلول التي تناسب احتياجاتك وميزانيتك
          </p>
          <WhatsAppButton 
            phoneNumber={companyInfo.whatsapp}
            message="مرحباً، أريد الاستفسار عن الخدمات المخصصة"
            variant="cta"
            text="احجز استشارة مجانية الآن"
            className="bg-green-500 hover:bg-green-600 text-white border-0"
          />
        </div>
      </section>
    </div>
  );
};

export default CustomRequest;
