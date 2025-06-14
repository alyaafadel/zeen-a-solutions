
import { X, Info, UserPlus, MessageSquare, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Service {
  title: string;
  icon: any;
  route: string;
}

interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  linkedin: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  companyInfo: CompanyInfo;
}

const MobileMenu = ({ isOpen, onClose, services, companyInfo }: MobileMenuProps) => {
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
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-brand-light-blue to-white">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
                  alt="Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-base font-bold text-brand-blue-dark">{companyInfo.name}</h2>
                <p className="text-sm text-slate-600">القائمة الرئيسية</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 text-brand-blue hover:text-brand-blue-dark hover:bg-brand-light-blue rounded-lg"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-2 px-4">
              <Button
                variant="ghost"
                onClick={() => { navigate('/about'); onClose(); }}
                className="w-full justify-start text-right py-4 px-4 text-slate-700 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 rounded-lg font-medium"
              >
                <Info className="ml-3 h-5 w-5 text-brand-blue" />
                من نحن
              </Button>

              <div className="pt-2">
                <div className="px-4 py-2 text-xs font-semibold text-brand-blue-dark uppercase tracking-wider border-b border-brand-light-blue mb-2">
                  خدماتنا المتخصصة
                </div>
                <div className="space-y-1 max-h-60 overflow-y-auto">
                  {services.map((service, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      onClick={() => { navigate(service.route); onClose(); }}
                      className="w-full justify-start text-right py-3 px-4 text-sm text-slate-600 hover:text-brand-blue hover:bg-brand-light-blue transition-all duration-200 rounded-lg"
                    >
                      <service.icon className="ml-3 h-4 w-4 text-brand-blue flex-shrink-0" />
                      <span className="line-clamp-1">{service.title}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={() => { navigate('/join-us'); onClose(); }}
                className="w-full justify-start text-right py-4 px-4 text-slate-700 hover:text-brand-accent-blue hover:bg-blue-50 transition-all duration-200 rounded-lg font-medium"
              >
                <UserPlus className="ml-3 h-5 w-5 text-brand-accent-blue" />
                انضم إلينا
              </Button>

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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
