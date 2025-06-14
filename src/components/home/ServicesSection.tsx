
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
    <section className="py-20 bg-pattern-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">خدماتنا المتخصصة</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            نقدم خدمات احترافية متنوعة للشركات والأفراد - كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/95 backdrop-blur-sm border-0 shadow-lg text-center"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="pb-4">
                <div className={`w-20 h-20 ${
                  index % 3 === 0 ? 'bg-gradient-purple' : 
                  index % 3 === 1 ? 'bg-gradient-purple-emerald' : 
                  'bg-gradient-blue-purple'
                } rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-700 group-hover:text-brand-purple transition-colors duration-300 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <WhatsAppButton 
                  phoneNumber="+966570513821"
                  message={`مرحباً، أريد الاستفسار عن خدمات ${service.title}`}
                  variant="service"
                  text="اطلب استشارة مجانية"
                  className={`w-full ${
                    index % 3 === 0 ? 'bg-gradient-purple hover:bg-brand-purple-dark' : 
                    index % 3 === 1 ? 'bg-gradient-purple-emerald hover:bg-brand-emerald' : 
                    'bg-gradient-blue-purple hover:bg-brand-blue-dark'
                  } text-white border-0 py-2 mb-4 shadow-md hover:shadow-lg transition-all duration-300`}
                />
                <div className="flex items-center justify-center text-slate-600 group-hover:text-brand-purple transition-colors duration-300">
                  <span className="text-sm font-medium ml-2">اعرف المزيد عن الخدمة</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
