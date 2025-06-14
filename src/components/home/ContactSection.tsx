
import { Phone, Linkedin } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CompanyInfo {
  phone: string;
  whatsapp: string;
  linkedin: string;
}

interface ContactSectionProps {
  companyInfo: CompanyInfo;
}

const ContactSection = ({ companyInfo }: ContactSectionProps) => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-600 to-slate-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton 
            phoneNumber={companyInfo.whatsapp}
            message="مرحباً، أريد الاستفسار عن خدمات Zeen A Plus Solutions"
            variant="cta"
            text="تواصل عبر الواتس آب"
            className="bg-slate-500 hover:bg-slate-600 text-white px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          />
          <div className="flex items-center space-x-6 space-x-reverse text-slate-200">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Phone className="h-5 w-5" />
              <span>{companyInfo.phone}</span>
            </div>
            <a
              href={companyInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse hover:text-slate-100 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
