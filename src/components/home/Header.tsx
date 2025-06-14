
import { Users, Info, UserPlus, Phone, Grid3X3, Linkedin, MessageSquare, Mail, Menu } from "lucide-react";
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
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 space-x-reverse">
            <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-blue rounded-xl md:rounded-2xl flex items-center justify-center shadow-md border-2 border-white">
              <img 
                src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                alt="Zeen A Plus Solutions Logo" 
                className="w-6 sm:w-7 md:w-9 h-6 sm:h-7 md:h-9 object-contain filter brightness-200"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-blue-dark">{companyInfo.name}</h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium hidden sm:block">{companyInfo.slogan}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
            <a
              href={companyInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-gradient-dark-blue hover:bg-brand-blue-dark text-white rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              title="تابعونا على LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </a>
            <WhatsAppButton 
              phoneNumber={companyInfo.whatsapp}
              message="مرحباً، أريد بدء مشروع جديد مع Zeen A Plus Solutions"
              variant="header"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar - Mobile optimized */}
      <div className="border-t border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 md:py-4">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/about')}
              className="text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 font-medium text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
            >
              <Info className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              من نحن
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-brand-blue hover:bg-gradient-to-r hover:from-brand-light-blue hover:to-brand-light-blue hover:border-brand-blue-light transition-all duration-300 font-medium px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg border-2 border-transparent shadow-sm hover:shadow-md text-xs sm:text-sm"
                >
                  <Grid3X3 className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 text-brand-blue" />
                  <span className="hidden sm:inline">خدماتنا المتنوعة</span>
                  <span className="sm:hidden">الخدمات</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 sm:w-64 bg-white shadow-xl border-2 border-blue-100" align="center">
                <div className="p-2 bg-gradient-to-r from-brand-light-blue to-brand-light-blue border-b border-blue-100">
                  <p className="text-sm font-semibold text-brand-blue-dark text-center">استكشف جميع خدماتنا</p>
                </div>
                {services.map((service, index) => (
                  <DropdownMenuItem 
                    key={index}
                    onClick={() => navigate(service.route)}
                    className="cursor-pointer py-2 sm:py-3 px-3 sm:px-4 hover:bg-brand-light-blue transition-colors duration-200"
                  >
                    <service.icon className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 text-brand-blue" />
                    <span className="font-medium text-sm">{service.title}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/join-us')}
              className="text-slate-600 hover:text-brand-accent-blue hover:bg-blue-50 transition-all duration-200 font-medium text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
            >
              <UserPlus className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">انضم إلينا</span>
              <span className="sm:hidden">انضم</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-brand-blue-dark hover:bg-blue-50 transition-all duration-200 font-medium text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                >
                  <Phone className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">تواصل معنا</span>
                  <span className="sm:hidden">تواصل</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44 sm:w-48 bg-white" align="center">
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
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/custom-request')}
              className="bg-gradient-blue hover:bg-brand-accent-blue text-white border-0 px-3 sm:px-4 md:px-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">طلبك المخصص</span>
              <span className="sm:hidden">طلب</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
