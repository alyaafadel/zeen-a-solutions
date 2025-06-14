
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo companyInfo={companyInfo} />
            <Navigation services={services} companyInfo={companyInfo} />
            
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-3 text-brand-blue hover:text-brand-blue-dark hover:bg-brand-light-blue transition-all duration-300 rounded-xl"
                aria-label="فتح القائمة"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        services={services}
        companyInfo={companyInfo}
      />
    </>
  );
};

export default Header;
