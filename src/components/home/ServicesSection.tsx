
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
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 mb-6 md:mb-8">
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-4">
            نقدم خدمات احترافية متنوعة للشركات والأفراد
          </p>
          <p className="text-lg text-brand-blue font-semibold">
            كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 shadow-lg h-full flex flex-col rounded-2xl overflow-hidden"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="pb-4 flex-shrink-0 p-8">
                <div className={`w-16 h-16 ${
                  index % 3 === 0 ? 'bg-gradient-blue' : 
                  index % 3 === 1 ? 'bg-gradient-blue-light' : 
                  'bg-gradient-dark-blue'
                } rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
                <CardDescription className="text-neutral-600 leading-relaxed text-base text-right">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8 pt-0 mt-auto">
                <WhatsAppButton 
                  phoneNumber="+966570513821"
                  message={`مرحباً، أريد الاستفسار عن خدمات ${service.title}`}
                  variant="service"
                  text="اطلب استشارة مجانية"
                  className={`w-full ${
                    index % 3 === 0 ? 'bg-gradient-blue hover:bg-brand-accent-blue' : 
                    index % 3 === 1 ? 'bg-gradient-blue-light hover:bg-brand-blue' : 
                    'bg-gradient-dark-blue hover:bg-brand-blue-dark'
                  } text-white border-0 py-3 mb-4 shadow-md hover:shadow-lg transition-all duration-300 text-base font-medium`}
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
