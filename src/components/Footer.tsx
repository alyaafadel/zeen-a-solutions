
import { Users, Languages, Megaphone, Code, Truck, GraduationCap, Briefcase, Star, Bot, Home, Sitemap, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Service {
  title: string;
  icon: any;
  route: string;
}

interface CompanyInfo {
  name: string;
  slogan: string;
  phone: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  location: string;
}

interface FooterProps {
  services: Service[];
  companyInfo: CompanyInfo;
}

const Footer = ({ services, companyInfo }: FooterProps) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-br from-slate-700 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-8 h-8 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-slate-300">{companyInfo.slogan}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              نعمل كشركاء متخصصين مع الشركات والأفراد، نقدم خدماتنا لإنجاز مهامكم بجودة عالية واحترافية تامة
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">{companyInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">{companyInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">روابط سريعة</h4>
            <div className="space-y-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-slate-300 hover:text-white hover:bg-slate-600 w-full justify-start p-2"
              >
                <Home className="ml-2 h-4 w-4" />
                الرئيسية
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/about')}
                className="text-slate-300 hover:text-white hover:bg-slate-600 w-full justify-start p-2"
              >
                من نحن
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/our-team')}
                className="text-slate-300 hover:text-white hover:bg-slate-600 w-full justify-start p-2"
              >
                فريقنا
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/join-us')}
                className="text-slate-300 hover:text-white hover:bg-slate-600 w-full justify-start p-2"
              >
                انضم إلينا
              </Button>
            </div>
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">خدماتنا وتواصل</h4>
            <div className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-slate-600 border-slate-500 text-white hover:bg-slate-500"
                  >
                    <Sitemap className="ml-2 h-4 w-4" />
                    خريطة الخدمات
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto" dir="rtl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-slate-700 text-center mb-4">
                      خريطة خدمات Zeen A Plus Solutions
                    </DialogTitle>
                    <DialogDescription className="text-center text-slate-600">
                      جميع خدماتنا المتخصصة في مكان واحد
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          navigate(service.route);
                        }}
                        className="p-4 bg-blue-50 rounded-xl border-2 border-blue-100 hover:border-blue-300 cursor-pointer transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-center space-x-3 space-x-reverse mb-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="font-semibold text-slate-700">{service.title}</h3>
                        </div>
                        <Button
                          size="sm"
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                        >
                          استكشف الخدمة
                        </Button>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <WhatsAppButton 
                phoneNumber={companyInfo.whatsapp}
                message="مرحباً، أريد الاستفسار عن خدماتكم"
                variant="footer"
                text="تواصل عبر واتس آب"
                className="w-full"
              />

              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/custom-request')}
                className="w-full bg-blue-600 border-blue-500 text-white hover:bg-blue-500"
              >
                طلبك المخصص
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-600 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 {companyInfo.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
