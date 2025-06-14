
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Service {
  title: string;
  description: string;
  benefits: string;
  subServices: string[];
  icon: any;
  route: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">خدماتنا المتخصصة</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            نقدم خدمات احترافية متنوعة للشركات والأفراد - كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="text-center pb-4 bg-gradient-to-br from-slate-50 to-indigo-50">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-700 group-hover:text-slate-800 transition-colors duration-300 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* الفوائد للعميل */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-slate-500 rounded-full ml-2"></span>
                    الفوائد للعميل:
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{service.benefits}</p>
                </div>

                {/* الخدمات الفرعية */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-slate-500 rounded-full ml-2"></span>
                    خدماتنا تشمل:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.subServices.map((subService, subIndex) => (
                      <div key={subIndex} className="flex items-center text-slate-600">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full ml-3 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{subService}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* دعوة لاتخاذ إجراء */}
                <div className="pt-4 border-t border-slate-100">
                  <WhatsAppButton 
                    phoneNumber="+966570513821"
                    message={`مرحباً، أريد الاستفسار عن خدمات ${service.title}`}
                    variant="service"
                    text={`اطلب استشارة في ${service.title} الآن`}
                    className="w-full bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white border-0 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                  />
                  <div className="flex items-center justify-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300 mt-3">
                    <span className="text-sm font-medium ml-2">اعرف المزيد عن الخدمة</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* باقي الخدمات في شبكة أصغر */}
        {services.length > 4 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-slate-700 mb-8">خدمات إضافية متخصصة</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.slice(4).map((service, index) => (
                <Card 
                  key={index + 4} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 bg-white border-0 shadow-sm overflow-hidden border-l-4 border-l-slate-400"
                  onClick={() => navigate(service.route)}
                >
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-slate-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      <span className="text-sm font-medium ml-2">اعرف المزيد</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
