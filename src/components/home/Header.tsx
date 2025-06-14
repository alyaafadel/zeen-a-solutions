import { Users, Info, UserPlus, Phone, Grid3X3, Linkedin, MessageSquare, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 space-x-reverse">
              <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-blue rounded-xl md:rounded-2xl flex items-center justify-center shadow-md border-2 border-white">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Zeen A Plus Solutions Logo" 
                  className="w-6 sm:w-7 md:w-9 h-6 sm:h-7 md:h-9 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-blue-dark">{companyInfo.name}</h1>
                <p className="text-xs sm:text-sm text-slate-600 font-medium hidden sm:block">{companyInfo.slogan}</p>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-3 space-x-reverse">
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

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 text-brand-blue hover:text-brand-blue-dark hover:bg-brand-light-blue transition-all duration-300 rounded-lg"
                aria-label="فتح القائمة"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Bar */}
        <div className="hidden md:block border-t border-slate-200 bg-white/90 backdrop-blur-sm">
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
                    خدماتنا المتنوعة
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
                طلبك المخصص
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Off-Canvas Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-brand-light-blue to-white">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-gradient-blue rounded-xl flex items-center justify-center shadow-md">
                    <img 
                      src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                      alt="Logo" 
                      className="w-6 h-6 object-contain filter brightness-200"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-brand-blue-dark">{companyInfo.name}</h2>
                    <p className="text-xs text-slate-600">القائمة الرئيسية</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMobileMenu}
                  className="p-2 text-brand-blue hover:text-brand-blue-dark hover:bg-brand-light-blue rounded-lg"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-2 px-4">
                  {/* Main Navigation Items */}
                  <Button
                    variant="ghost"
                    onClick={() => { navigate('/about'); closeMobileMenu(); }}
                    className="w-full justify-start text-right py-4 px-4 text-slate-700 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 rounded-lg font-medium"
                  >
                    <Info className="ml-3 h-5 w-5 text-brand-blue" />
                    من نحن
                  </Button>

                  {/* Services Section */}
                  <div className="pt-2">
                    <div className="px-4 py-2 text-xs font-semibold text-brand-blue-dark uppercase tracking-wider border-b border-brand-light-blue mb-2">
                      خدماتنا المتخصصة
                    </div>
                    <div className="space-y-1 max-h-60 overflow-y-auto">
                      {services.map((service, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          onClick={() => { navigate(service.route); closeMobileMenu(); }}
                          className="w-full justify-start text-right py-3 px-4 text-sm text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 rounded-lg"
                        >
                          <service.icon className="ml-3 h-4 w-4 text-brand-blue flex-shrink-0" />
                          <span className="line-clamp-1">{service.title}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Other Navigation Items */}
                  <Button
                    variant="ghost"
                    onClick={() => { navigate('/join-us'); closeMobileMenu(); }}
                    className="w-full justify-start text-right py-4 px-4 text-slate-700 hover:text-brand-accent-blue hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
                  >
                    <UserPlus className="ml-3 h-5 w-5 text-brand-accent-blue" />
                    انضم إلينا
                  </Button>

                  {/* Contact Options */}
                  <div className="pt-4">
                    <div className="px-4 py-2 text-xs font-semibold text-brand-blue-dark uppercase tracking-wider border-b border-brand-light-blue mb-2">
                      تواصل معنا
                    </div>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        onClick={() => handleContactOption('whatsapp')}
                        className="w-full justify-start text-right py-3 px-4 text-sm text-slate-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200 rounded-lg"
                      >
                        <MessageSquare className="ml-3 h-4 w-4 text-green-600" />
                        واتس آب
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleContactOption('linkedin')}
                        className="w-full justify-start text-right py-3 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg"
                      >
                        <Linkedin className="ml-3 h-4 w-4 text-blue-600" />
                        لينكد إن
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleContactOption('email')}
                        className="w-full justify-start text-right py-3 px-4 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200 rounded-lg"
                      >
                        <Mail className="ml-3 h-4 w-4 text-red-600" />
                        البريد الإلكتروني
                      </Button>
                    </div>
                  </div>
                </nav>
              </div>

              {/* Menu Footer - CTA Button */}
              <div className="p-4 border-t border-slate-200 bg-gradient-to-r from-brand-light-blue to-white">
                <Button
                  onClick={() => { navigate('/custom-request'); closeMobileMenu(); }}
                  className="w-full bg-gradient-blue hover:bg-brand-accent-blue text-white border-0 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg font-bold"
                >
                  طلبك المخصص
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
