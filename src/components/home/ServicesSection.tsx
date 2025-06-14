
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">خدماتنا المتخصصة</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            نقدم خدمات احترافية متخصصة كشركاء مؤقتين لشركتكم - بدون تكاليف التوظيف الدائم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
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
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">
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
    </section>
  );
};

export default ServicesSection;
