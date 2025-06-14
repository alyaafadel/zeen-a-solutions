
import { ArrowRight, Home, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  heroTitle: string;
  heroDescription: string;
  children: React.ReactNode;
  phoneNumber?: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

const ServicePageLayout = ({
  title,
  description,
  icon: Icon,
  heroTitle,
  heroDescription,
  children,
  phoneNumber = "+966570513821",
  ctaTitle = "ابدأ مشروعك معنا",
  ctaDescription = "تواصل معنا الآن للحصول على استشارة مجانية"
}: ServicePageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Home className="h-4 w-4" />
                <span>الرئيسية</span>
              </Button>
              <span className="text-gray-400">/</span>
              <Icon className="h-5 w-5 text-sky-500" />
              <span className="font-semibold text-gray-800">{title}</span>
            </div>
            <WhatsAppButton 
              phoneNumber={phoneNumber}
              message={`مرحباً، أريد الاستفسار عن ${title}`}
              variant="header"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-sky-400 to-sky-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Icon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-sky-700 mb-6">{heroTitle}</h1>
            <p className="text-xl text-sky-600 mb-12 leading-relaxed">
              {heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">{ctaTitle}</h3>
          <p className="text-xl mb-8 opacity-90">{ctaDescription}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              phoneNumber={phoneNumber}
              message={`مرحباً، أريد استشارة مجانية حول ${title}`}
              variant="cta"
              text="احصل على استشارة مجانية"
              className="bg-white text-sky-600 hover:bg-gray-100"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="border-white text-white hover:bg-white hover:text-sky-600 px-8"
            >
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
