
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-pattern-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-dark mb-4 sm:mb-6">خدماتنا المتخصصة</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
            نقدم خدمات احترافية متنوعة للشركات والأفراد - كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/95 backdrop-blur-sm border-0 shadow-lg text-center"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="pb-4 sm:pb-6">
                <div className={`w-16 sm:w-20 h-16 sm:h-20 ${
                  index % 3 === 0 ? 'bg-gradient-blue' : 
                  index % 3 === 1 ? 'bg-gradient-blue-light' : 
                  'bg-gradient-dark-blue'
                } rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-2 sm:mb-3 px-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 px-4 sm:px-6">
                <WhatsAppButton 
                  phoneNumber="+966570513821"
                  message={`مرحباً، أريد الاستفسار عن خدمات ${service.title}`}
                  variant="service"
                  text="اطلب استشارة مجانية"
                  className={`w-full ${
                    index % 3 === 0 ? 'bg-gradient-blue hover:bg-brand-accent-blue' : 
                    index % 3 === 1 ? 'bg-gradient-blue-light hover:bg-brand-blue' : 
                    'bg-gradient-dark-blue hover:bg-brand-blue-dark'
                  } text-white border-0 py-2 sm:py-3 mb-3 sm:mb-4 shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base`}
                />
                <div className="flex items-center justify-center text-slate-600 group-hover:text-brand-blue transition-colors duration-300">
                  <span className="text-xs sm:text-sm font-medium ml-2">اعرف المزيد عن الخدمة</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
