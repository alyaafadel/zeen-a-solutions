
import { Users, Info, UserPlus, Phone, Grid3X3, Linkedin, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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
}

interface HeaderProps {
  services: Service[];
  companyInfo: CompanyInfo;
}

const Header = ({ services, companyInfo }: HeaderProps) => {
  const navigate = useNavigate();

  const handleContactOption = (type: string) => {
    switch (type) {
      case 'whatsapp':
        window.open(`https://wa.me/${companyInfo.whatsapp}?text=مرحباً، أريد التواصل معكم`, '_blank');
        break;
      case 'linkedin':
        window.open(companyInfo.linkedin, '_blank');
        break;
      case 'email':
        window.open(`mailto:${companyInfo.email}?subject=استفسار عن الخدمات`, '_blank');
        break;
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-md border-2 border-white">
              <img 
                src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                alt="Zeen A Plus Solutions Logo" 
                className="w-9 h-9 object-contain filter brightness-200"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-700">{companyInfo.name}</h1>
              <p className="text-sm text-slate-600 font-medium">{companyInfo.slogan}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <a
              href={companyInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              title="تابعونا على LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-slate-100" />
            </a>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد بدء مشروع جديد مع Zeen A Plus Solutions"
              variant="header"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/about')}
              className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
            >
              <Info className="ml-2 h-4 w-4" />
              من نحن
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200 transition-all duration-300 font-medium px-6 py-2 rounded-lg border-2 border-transparent shadow-sm hover:shadow-md"
                >
                  <Grid3X3 className="ml-2 h-4 w-4 text-blue-500" />
                  خدماتنا المتنوعة
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white shadow-xl border-2 border-blue-100" align="center">
                <div className="p-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                  <p className="text-sm font-semibold text-slate-700 text-center">استكشف جميع خدماتنا</p>
                </div>
                {services.map((service, index) => (
                  <DropdownMenuItem 
                    key={index}
                    onClick={() => navigate(service.route)}
                    className="cursor-pointer py-3 px-4 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <service.icon className="ml-3 h-5 w-5 text-blue-500" />
                    <span className="font-medium">{service.title}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/join-us')}
              className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
            >
              <UserPlus className="ml-2 h-4 w-4" />
              انضم إلينا
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium"
                >
                  <Phone className="ml-2 h-4 w-4" />
                  تواصل معنا
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white" align="center">
                <DropdownMenuItem 
                  onClick={() => handleContactOption('whatsapp')}
                  className="cursor-pointer"
                >
                  <MessageSquare className="ml-2 h-4 w-4 text-slate-600" />
                  <span>واتس آب</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleContactOption('linkedin')}
                  className="cursor-pointer"
                >
                  <Linkedin className="ml-2 h-4 w-4 text-slate-600" />
                  <span>لينكد إن</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleContactOption('email')}
                  className="cursor-pointer"
                >
                  <Mail className="ml-2 h-4 w-4 text-slate-600" />
                  <span>البريد الإلكتروني</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/custom-request')}
              className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white border-0 px-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              طلبك المخصص
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
