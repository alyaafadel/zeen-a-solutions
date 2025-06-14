
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnhancedIcon from "@/components/ui/enhanced-icon";

interface Service {
  title: string;
  description: string;
  icon: any;
  route: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Consistent background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.03) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-accent-blue rounded-2xl shadow-lg mb-8">
            <span className="text-2xl font-bold text-white">⚡</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-neutral-800">خدماتنا</span>
            <span className="block mt-2 bg-gradient-to-r from-brand-blue to-brand-accent-blue bg-clip-text text-transparent">
              المتخصصة
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-4">
            نقدم خدمات احترافية متنوعة للشركات والأفراد
          </p>
          <p className="text-lg text-brand-blue font-semibold">
            كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer bg-white/90 backdrop-blur-sm border border-blue-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col rounded-3xl overflow-hidden hover:border-brand-blue/30"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="pb-6 flex-shrink-0 p-8">
                <div className={`w-16 h-16 ${
                  index % 3 === 0 ? 'bg-gradient-to-r from-brand-blue to-brand-accent-blue' : 
                  index % 3 === 1 ? 'bg-gradient-to-r from-brand-accent-blue to-brand-blue-dark' : 
                  'bg-gradient-to-r from-brand-blue-dark to-brand-blue'
                } rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <EnhancedIcon
                    icon={service.icon}
                    size="lg"
                    variant="gradient"
                    className="text-white"
                    ariaLabel={`أيقونة ${service.title}`}
                    title={service.title}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-neutral-800 group-hover:text-brand-blue transition-colors duration-300 mb-4 text-right leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-neutral-600 leading-relaxed text-base text-right line-height-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8 pt-0 mt-auto">
                <WhatsAppButton 
                  phoneNumber="+966570513821"
                  message={`مرحباً، أريد الاستفسار عن خدمات ${service.title}`}
                  variant="service"
                  text="استشارة مجانية"
                  className={`w-full ${
                    index % 3 === 0 ? 'bg-gradient-to-r from-brand-blue to-brand-accent-blue hover:from-brand-blue-dark hover:to-brand-blue' : 
                    index % 3 === 1 ? 'bg-gradient-to-r from-brand-accent-blue to-brand-blue-dark hover:from-brand-blue hover:to-brand-accent-blue' : 
                    'bg-gradient-to-r from-brand-blue-dark to-brand-blue hover:from-brand-accent-blue hover:to-brand-blue-dark'
                  } text-white border-0 py-3 mb-4 shadow-md hover:shadow-lg transition-all duration-300 text-base font-medium rounded-xl`}
                />
                <div className="flex items-center justify-center text-neutral-600 group-hover:text-brand-blue transition-colors duration-300">
                  <span className="text-base font-medium ml-2">اعرف المزيد</span>
                  <EnhancedIcon
                    icon={ArrowRight}
                    size="md"
                    variant="interactive"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    ariaLabel="اعرف المزيد"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
