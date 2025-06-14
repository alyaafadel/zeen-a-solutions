
import { Info, Grid3X3, UserPlus, Phone, Linkedin, MessageSquare, Mail } from "lucide-react";
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
  phone: string;
  email: string;
  whatsapp: string;
  linkedin: string;
}

interface NavigationProps {
  services: Service[];
  companyInfo: CompanyInfo;
}

const Navigation = ({ services, companyInfo }: NavigationProps) => {
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
    <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 space-x-reverse">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/about')}
        className="text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 font-medium text-sm px-4 py-3"
      >
        <Info className="ml-2 h-4 w-4" />
        من نحن
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 font-medium text-sm px-4 py-3"
          >
            <Grid3X3 className="ml-2 h-4 w-4 text-brand-blue" />
            خدماتنا المتنوعة
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white shadow-xl border-2 border-blue-100" align="center">
          <div className="p-2 bg-gradient-to-r from-brand-light-blue to-brand-light-blue border-b border-blue-100">
            <p className="text-sm font-semibold text-brand-blue-dark text-center">استكشف جميع خدماتنا</p>
          </div>
          {services.map((service, index) => (
            <DropdownMenuItem 
              key={index}
              onClick={() => navigate(service.route)}
              className="cursor-pointer py-2 px-3 hover:bg-brand-light-blue transition-colors duration-200"
            >
              <service.icon className="ml-2 h-4 w-4 text-brand-blue" />
              <span className="font-medium text-sm">{service.title}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/join-us')}
        className="text-slate-600 hover:text-brand-accent-blue hover:bg-blue-50 transition-all duration-200 font-medium text-sm px-4 py-3"
      >
        <UserPlus className="ml-2 h-4 w-4" />
        انضم إلينا
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-600 hover:text-brand-blue-dark hover:bg-blue-50 transition-all duration-200 font-medium text-sm px-4 py-3"
          >
            <Phone className="ml-2 h-4 w-4" />
            تواصل معنا
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 bg-white" align="center">
          <DropdownMenuItem 
            onClick={() => handleContactOption('whatsapp')}
            className="cursor-pointer text-sm"
          >
            <MessageSquare className="ml-2 h-4 w-4 text-slate-600" />
            <span>واتس آب</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleContactOption('linkedin')}
            className="cursor-pointer text-sm"
          >
            <Linkedin className="ml-2 h-4 w-4 text-slate-600" />
            <span>لينكد إن</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleContactOption('email')}
            className="cursor-pointer text-sm"
          >
            <Mail className="ml-2 h-4 w-4 text-slate-600" />
            <span>البريد الإلكتروني</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <a
        href={companyInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gradient-dark-blue hover:bg-brand-blue-dark text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
        title="تابعونا على LinkedIn"
      >
        <Linkedin className="h-4 w-4 text-white" />
      </a>
      
      <WhatsAppButton 
        phoneNumber={companyInfo.whatsapp}
        message="مرحباً، أريد بدء مشروع جديد مع Zeen A Plus Solutions"
        variant="header"
        className="text-sm px-4 py-3"
      />
    </div>
  );
};

export default Navigation;
