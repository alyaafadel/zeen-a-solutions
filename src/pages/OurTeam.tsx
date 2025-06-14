
import { ArrowLeft, Linkedin, Mail, Award, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();

  const founders = [
    {
      name: "[اسم الخبير الأول]",
      position: "[المنصب]",
      expertise: "[مجال التخصص]",
      experience: "[X+ سنة]",
      education: "[المؤهل العلمي - الجامعة]",
      achievements: [
        "[إنجاز رئيسي أول]",
        "[إنجاز رئيسي ثاني]",
        "[إنجاز رئيسي ثالث]"
      ],
      image: "/placeholder-image.jpg",
      linkedin: "#",
      email: "expert1@zeenaplusolutions.com"
    },
    {
      name: "[اسم الخبير الثاني]",
      position: "[المنصب]",
      expertise: "[مجال التخصص]",
      experience: "[X+ سنة]",
      education: "[المؤهل العلمي - الجامعة]",
      achievements: [
        "[إنجاز رئيسي أول]",
        "[إنجاز رئيسي ثاني]",
        "[إنجاز رئيسي ثالث]"
      ],
      image: "/placeholder-image.jpg",
      linkedin: "#",
      email: "expert2@zeenaplusolutions.com"
    },
    {
      name: "[اسم الخبير الثالث]",
      position: "[المنصب]",
      expertise: "[مجال التخصص]",
      experience: "[X+ سنوات]",
      education: "[المؤهل العلمي - الجامعة]",
      achievements: [
        "[إنجاز رئيسي أول]",
        "[إنجاز رئيسي ثاني]",
        "[إنجاز رئيسي ثالث]"
      ],
      image: "/placeholder-image.jpg",
      linkedin: "#",
      email: "expert3@zeenaplusolutions.com"
    },
    {
      name: "[اسم الخبير الرابع]",
      position: "[المنصب]",
      expertise: "[مجال التخصص]",
      experience: "[X+ سنوات]",
      education: "[المؤهل العلمي - الجامعة]",
      achievements: [
        "[إنجاز رئيسي أول]",
        "[إنجاز رئيسي ثاني]",
        "[إنجاز رئيسي ثالث]"
      ],
      image: "/placeholder-image.jpg",
      linkedin: "#",
      email: "expert4@zeenaplusolutions.com"
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: "الرؤية المشتركة",
      description: "نعمل معاً لتحقيق أهداف عملائنا بأعلى معايير الجودة"
    },
    {
      icon: Users,
      title: "روح الفريق",
      description: "قوتنا في تنوع خبراتنا وتكاملها لخدمة عملائنا"
    },
    {
      icon: Heart,
      title: "الشغف والالتزام",
      description: "نؤمن بأن النجاح يأتي من الشغف والعمل الجاد"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-blue-700 hover:text-blue-800"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>العودة للرئيسية</span>
            </Button>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                فريقنا المتميز
              </h1>
              <p className="text-blue-600 mt-2">الخبراء المؤسسون وراء نجاح Zeen A Plus Solutions</p>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">نحن فريق من الخبراء المتخصصين</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            يجمعنا الشغف بالتميز والالتزام بتقديم أفضل الحلول لعملائنا. 
            خبراتنا المتنوعة وتجاربنا الواسعة تمكننا من فهم احتياجاتكم وتحقيق طموحاتكم
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">قيمنا المؤسسية</h3>
            <p className="text-lg text-blue-600">المبادئ التي توجه عملنا وتحدد هويتنا</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-blue-800 mb-2">{value.title}</h4>
                <p className="text-blue-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-blue-800 mb-4">الخبراء المؤسسون</h3>
            <p className="text-lg text-blue-600 max-w-3xl mx-auto">
              تعرف على فريق القيادة الذي يقود رؤية الشركة ويضع استراتيجيات النجاح
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-800 mb-2">{founder.name}</h4>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{founder.position}</p>
                  <p className="text-blue-600">{founder.expertise}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center space-x-4 space-x-reverse text-sm text-blue-600">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Award className="h-4 w-4" />
                      <span>{founder.experience}</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-blue-600 mb-3">{founder.education}</p>
                    
                    <div className="space-y-2 text-sm text-blue-700">
                      <h5 className="font-semibold text-blue-800">الإنجازات الرئيسية:</h5>
                      <ul className="space-y-1">
                        {founder.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 space-x-reverse pt-4 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(founder.linkedin, '_blank')}
                      className="flex items-center space-x-2 space-x-reverse border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`mailto:${founder.email}`, '_blank')}
                      className="flex items-center space-x-2 space-x-reverse border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      <Mail className="h-4 w-4" />
                      <span>تواصل</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">مستعدون لخدمتكم</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            فريقنا من الخبراء جاهز لمساعدتكم في تحقيق أهدافكم وتطوير أعمالكم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/custom-request')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              ابدأ مشروعك معنا
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 transition-all duration-300"
            >
              تصفح خدماتنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
