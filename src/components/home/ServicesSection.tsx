
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            ⚡ خدماتنا المتخصصة
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            حلول شاملة لجميع احتياجاتكم
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم خدمات احترافية متنوعة للشركات والأفراد كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const gradientColors = [
              'from-blue-500 to-blue-600',
              'from-purple-500 to-purple-600', 
              'from-indigo-500 to-indigo-600',
              'from-pink-500 to-pink-600',
              'from-teal-500 to-teal-600',
              'from-orange-500 to-orange-600',
              'from-green-500 to-green-600',
              'from-red-500 to-red-600',
              'from-cyan-500 to-cyan-600',
              'from-yellow-500 to-yellow-600'
            ];
            
            return (
              <Card 
                key={index} 
                className="group cursor-pointer bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg rounded-2xl overflow-hidden"
                onClick={() => navigate(service.route)}
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3 text-right leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base text-right">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <WhatsAppButton 
                    phoneNumber="+966570513821"
                    message={`مرحباً، أريد الاستفسار عن خدمات ${service.title}`}
                    variant="service"
                    text="استشارة مجانية"
                    className={`w-full bg-gradient-to-r ${gradientColors[index % gradientColors.length]} hover:opacity-90 text-white border-0 py-3 mb-4 shadow-md hover:shadow-lg transition-all duration-300 text-base font-medium rounded-xl`}
                  />
                  <div className="flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    <span className="text-base font-medium ml-2">اعرف المزيد</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
