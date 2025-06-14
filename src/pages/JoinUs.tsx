
import { ArrowLeft, Users, Star, CheckCircle, Upload, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const JoinUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skill: '',
    experience: '',
    portfolio: '',
    description: ''
  });

  const companyInfo = {
    name: "Zeen A Plus Solutions",
    whatsapp: "+966570513821"
  };

  const skills = [
    "الموارد البشرية",
    "الترجمة",
    "التسويق الرقمي",
    "البرمجة والتطوير",
    "الخدمات اللوجستية",
    "التدريب المهني",
    "التوجيه المهني",
    "التصميم الجرافيكي",
    "كتابة المحتوى",
    "إدارة المشاريع",
    "خدمة العملاء",
    "أخرى"
  ];

  const benefits = [
    {
      title: "مرونة في العمل",
      description: "اعمل من أي مكان وفي الأوقات التي تناسبك",
      icon: Users
    },
    {
      title: "مشاريع متنوعة",
      description: "فرصة للعمل على مشاريع مختلفة ومثيرة",
      icon: Star
    },
    {
      title: "نمو مهني",
      description: "فرص تطوير مهاراتك والتعلم من خبراء المجال",
      icon: CheckCircle
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً، أريد الانضمام لفريق الفريلانسرز:

الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
الهاتف: ${formData.phone}
المهارة: ${formData.skill}
سنوات الخبرة: ${formData.experience}
رابط الأعمال السابقة: ${formData.portfolio}
وصف موجز: ${formData.description}`;

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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">انضم إلى فريق الخبراء</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            هل لديك مهارات متميزة؟ انضم إلى شبكة خبرائنا واعمل على مشاريع مثيرة مع عملاء متنوعين
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">لماذا تنضم إلينا؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">طلب الانضمام</CardTitle>
                <CardDescription>
                  أكمل النموذج أدناه وسنتواصل معك في أقرب وقت
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
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="skill">المهارة الأساسية</Label>
                      <Select onValueChange={(value) => setFormData({...formData, skill: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر مهارتك" />
                        </SelectTrigger>
                        <SelectContent>
                          {skills.map((skill, index) => (
                            <SelectItem key={index} value={skill}>{skill}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">سنوات الخبرة</Label>
                      <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر سنوات الخبرة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="أقل من سنة">أقل من سنة</SelectItem>
                          <SelectItem value="1-3 سنوات">1-3 سنوات</SelectItem>
                          <SelectItem value="3-5 سنوات">3-5 سنوات</SelectItem>
                          <SelectItem value="5-10 سنوات">5-10 سنوات</SelectItem>
                          <SelectItem value="أكثر من 10 سنوات">أكثر من 10 سنوات</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">رابط الأعمال السابقة</Label>
                      <Input
                        id="portfolio"
                        placeholder="LinkedIn, Behance, GitHub, إلخ"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">وصف موجز عن خبراتك</Label>
                    <Textarea
                      id="description"
                      placeholder="اكتب نبذة عن خبراتك ومهاراتك..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <MessageSquare className="ml-2 h-4 w-4" />
                    إرسال الطلب عبر الواتس آب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">نحن في انتظارك</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            بعد إرسال طلبك، سيقوم فريقنا بمراجعة ملفك الشخصي والتواصل معك خلال 48 ساعة لمناقشة الفرص المتاحة
          </p>
          <WhatsAppButton 
            phoneNumber={companyInfo.whatsapp}
            message="مرحباً، أريد الاستفسار عن فرص الانضمام لفريق الفريلانسرز"
            variant="cta"
            text="تواصل معنا مباشرة"
            className="bg-green-500 hover:bg-green-600 text-white border-0"
          />
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
