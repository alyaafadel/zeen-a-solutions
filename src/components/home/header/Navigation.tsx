
import { Info, Grid3X3, UserPlus, Phone, Linkedin, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnhancedIcon from "@/components/ui/enhanced-icon";

interface Service {
  title: string;
  icon: any;
  route: string;
}

interface CountryOption {
  country: string;
  flag: string;
  phoneNumber: string;
}

interface CompanyInfo {
  phone: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  countries?: CountryOption[];
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
        <EnhancedIcon
          icon={Info}
          size="sm"
          variant="interactive"
          className="ml-2"
          ariaLabel="معلومات عنا"
        />
        من نحن
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 font-medium text-sm px-4 py-3"
          >
            <EnhancedIcon
              icon={Grid3X3}
              size="sm"
              variant="interactive"
              className="ml-2 text-brand-blue"
              ariaLabel="قائمة الخدمات"
            />
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
              <EnhancedIcon
                icon={service.icon}
                size="sm"
                variant="interactive"
                className="ml-2 text-brand-blue"
                ariaLabel={`أيقونة ${service.title}`}
              />
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
        <EnhancedIcon
          icon={UserPlus}
          size="sm"
          variant="interactive"
          className="ml-2"
          ariaLabel="انضم إلينا"
        />
        انضم إلينا
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-600 hover:text-brand-blue-dark hover:bg-blue-50 transition-all duration-200 font-medium text-sm px-4 py-3"
          >
            <EnhancedIcon
              icon={Phone}
              size="sm"
              variant="interactive"
              className="ml-2"
              ariaLabel="خيارات التواصل"
            />
            تواصل معنا
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 bg-white" align="center">
          <DropdownMenuItem 
            onClick={() => handleContactOption('whatsapp')}
            className="cursor-pointer text-sm"
          >
            <EnhancedIcon
              icon={MessageSquare}
              size="sm"
              variant="interactive"
              className="ml-2 text-slate-600"
              ariaLabel="واتس آب"
            />
            <span>واتس آب</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleContactOption('linkedin')}
            className="cursor-pointer text-sm"
          >
            <EnhancedIcon
              icon={Linkedin}
              size="sm"
              variant="interactive"
              className="ml-2 text-slate-600"
              ariaLabel="لينكد إن"
            />
            <span>لينكد إن</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleContactOption('email')}
            className="cursor-pointer text-sm"
          >
            <EnhancedIcon
              icon={Mail}
              size="sm"
              variant="interactive"
              className="ml-2 text-slate-600"
              ariaLabel="البريد الإلكتروني"
            />
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
        <EnhancedIcon
          icon={Linkedin}
          size="sm"
          variant="interactive"
          className="text-white"
          ariaLabel="تابعونا على LinkedIn"
        />
      </a>
      
      <WhatsAppButton 
        message="مرحباً، أريد بدء مشروع جديد مع Zeen A Plus Solutions"
        variant="header"
        className="text-sm px-4 py-3"
        countries={companyInfo.countries}
      />
    </div>
  );
};

export default Navigation;
