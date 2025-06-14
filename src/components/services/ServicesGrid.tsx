
import { CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Service {
  title: string;
  description: string;
  duration: string;
  features: string[];
}

interface ServicesGridProps {
  title: string;
  services: Service[];
  phoneNumber?: string;
}

const ServicesGrid = ({ title, services, phoneNumber = "+966570513821" }: ServicesGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="bg-sky-50 pb-6">
                <CardTitle className="text-2xl text-sky-700 mb-2 text-right">{service.title}</CardTitle>
                <CardDescription className="text-sky-600 leading-relaxed text-base text-right">
                  {service.description}
                </CardDescription>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-sky-200">
                  <div className="text-right">
                    <div className="text-sm text-sky-500 flex items-center">
                      <Clock className="h-4 w-4 ml-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                      <CheckCircle className="h-4 w-4 text-sky-500 flex-shrink-0" />
                      <span className="text-sky-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <WhatsAppButton 
                  phoneNumber={phoneNumber}
                  message={`مرحباً، أريد الاستفسار عن ${service.title}`}
                  variant="service"
                  text="اطلب الخدمة الآن"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
