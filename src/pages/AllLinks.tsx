import { Link } from "react-router-dom";
import { 
  Users, Languages, Megaphone, Code, Truck, GraduationCap, 
  Briefcase, Star, Bot, Scale, Mail, Linkedin, Phone, MapPin 
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AllLinks = () => {
  const companyInfo = {
    name: "Zeen A Plus Solutions",
    slogan: "شريكك المتخصص في إنجاز المهام والخدمات",
    email: "join@zeenaplus.solutions",
    linkedin: "https://www.linkedin.com/company/zeen-a-solutions-establishment/",
    saudiPhone: "+966570513821",
    syriaPhone: "+963987920420",
    location: "الرياض، المملكة العربية السعودية",
    countries: [
      {
        country: "السعودية",
        flag: "🇸🇦",
        phoneNumber: "+966570513821"
      },
      {
        country: "سوريا",
        flag: "🇸🇾",
        phoneNumber: "+963987920420"
      }
    ]
  };

  const saudiServices = [
    {
      title: "خدمات الموارد البشرية",
      icon: Users,
      route: "/hr-services"
    },
    {
      title: "التطوير المهني للأفراد",
      icon: Briefcase,
      route: "/career-services"
    },
    {
      title: "التدريب المهني",
      icon: GraduationCap,
      route: "/training-services"
    },
    {
      title: "التطوير التقني والبرمجة",
      icon: Code,
      route: "/programming-services"
    },
    {
      title: "التسويق الرقمي المتكامل",
      icon: Megaphone,
      route: "/digital-marketing"
    },
    {
      title: "الاستشارات القانونية للشركات",
      icon: Scale,
      route: "/legal-services"
    },
    {
      title: "الذكاء الاصطناعي",
      icon: Bot,
      route: "/ai-services"
    },
    {
      title: "الخدمات اللوجستية",
      icon: Truck,
      route: "/logistics-services"
    }
  ];

  const syriaServices = [
    {
      title: "خدمات الترجمة",
      icon: Languages,
      route: "/translation-services"
    },
    {
      title: "التطوير التقني والبرمجة",
      icon: Code,
      route: "/programming-services"
    },
    {
      title: "التسويق الرقمي المتكامل",
      icon: Megaphone,
      route: "/digital-marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10" dir="rtl">
      <SEO 
        title="جميع الروابط"
        description="صفحة شاملة تحتوي على جميع خدمات ومعلومات الاتصال بشركة Zeen A Plus Solutions"
        canonicalUrl="https://zeenaplus.solutions/all-links"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Company Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-brand-blue-light rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-primary-foreground">Z+</span>
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            {companyInfo.name}
          </h1>
          <p className="text-text-secondary text-lg mb-6">
            {companyInfo.slogan}
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-3 mb-8">
          <Card className="p-4 bg-surface-primary border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <a 
              href={`mailto:${companyInfo.email}`}
              className="flex items-center justify-center gap-3 text-text-primary hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">{companyInfo.email}</span>
            </a>
          </Card>

          <Card className="p-4 bg-surface-primary border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <a 
              href={companyInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-text-primary hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">تابعنا على LinkedIn</span>
            </a>
          </Card>
        </div>

        {/* WhatsApp Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-4 text-center flex items-center justify-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            تواصل معنا عبر واتساب
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 bg-surface-primary border-success/20 hover:border-success/40 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <span className="text-4xl mb-2 block">🇸🇦</span>
                <p className="text-sm text-text-secondary mb-3">السعودية</p>
                <WhatsAppButton
                  phoneNumber={companyInfo.saudiPhone}
                  message="مرحباً، أريد الاستفسار عن الخدمات في السعودية"
                  variant="service"
                  text="واتساب"
                  className="w-full"
                />
              </div>
            </Card>

            <Card className="p-4 bg-surface-primary border-success/20 hover:border-success/40 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <span className="text-4xl mb-2 block">🇸🇾</span>
                <p className="text-sm text-text-secondary mb-3">سوريا</p>
                <WhatsAppButton
                  phoneNumber={companyInfo.syriaPhone}
                  message="مرحباً، أريد الاستفسار عن الخدمات في سوريا"
                  variant="service"
                  text="واتساب"
                  className="w-full"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Saudi Services */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-4 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">🇸🇦</span>
            خدماتنا في السعودية
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {saudiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.route}>
                  <Card className="p-4 bg-surface-primary border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-text-primary group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Syria Services */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-4 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">🇸🇾</span>
            خدماتنا في سوريا
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {syriaServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.route}>
                  <Card className="p-4 bg-surface-primary border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-text-primary group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Custom Solutions */}
        <Link to="/custom-solutions">
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-brand-blue-light/20 border-primary hover:border-primary/60 hover:shadow-xl transition-all duration-300 cursor-pointer group mb-8">
            <div className="flex items-center justify-center gap-3 text-center">
              <Star className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors">
                  الحلول المخصصة
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  حلول مبتكرة حسب احتياجاتك الخاصة
                </p>
              </div>
            </div>
          </Card>
        </Link>

        {/* Footer Links */}
        <div className="flex justify-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              الصفحة الرئيسية
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="sm">
              من نحن
            </Button>
          </Link>
          <Link to="/our-team">
            <Button variant="outline" size="sm">
              فريقنا
            </Button>
          </Link>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-text-secondary text-sm">
            <MapPin className="h-4 w-4" />
            <span>{companyInfo.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLinks;