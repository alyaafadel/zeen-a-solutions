
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Service {
  title: string;
  description: string;
  icon: any;
  route: string;
  benefits?: string[];
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const navigate = useNavigate();

  // تحديث أوصاف الخدمات لتكون أكثر تفصيلاً
  const enhancedServices = services.map((service, index) => {
    const enhancedDescriptions = [
      {
        ...service,
        description: "حلول شاملة في إدارة وتطوير الموارد البشرية تشمل: التوظيف والاختيار، تقييم الأداء، تطوير السياسات، إدارة الرواتب والمزايا، وبناء ثقافة مؤسسية قوية تساهم في نمو أعمالكم.",
        benefits: ["توفير الوقت والجهد", "خفض تكاليف التوظيف", "تحسين الأداء المؤسسي"]
      },
      {
        ...service,
        description: "خدمات شاملة لتطوير المسار المهني تشمل: تحليل نقاط القوة، وضع خطط التطوير، التدريب على المهارات القيادية، إعداد السير الذاتية الاحترافية، والتحضير للمقابلات الشخصية.",
        benefits: ["تطوير المهارات القيادية", "زيادة الفرص الوظيفية", "بناء هوية مهنية قوية"]
      },
      {
        ...service,
        description: "برامج تدريبية متخصصة ومصممة حسب احتياجاتكم في: المهارات التقنية، القيادة والإدارة، التسويق الرقمي، خدمة العملاء، والمهارات الشخصية مع شهادات معتمدة.",
        benefits: ["شهادات معتمدة دولياً", "تدريب عملي تطبيقي", "متابعة ما بعد التدريب"]
      },
      {
        ...service,
        description: "ترجمة احترافية ودقيقة للوثائق القانونية، الأكاديمية، التجارية، والتقنية من وإلى العربية والإنجليزية مع ضمان الدقة اللغوية والمصطلحات المتخصصة.",
        benefits: ["ترجمة معتمدة رسمياً", "سرعة في التسليم", "دقة لغوية 100%"]
      },
      {
        ...service,
        description: "تطوير مواقع وتطبيقات احترافية باستخدام أحدث التقنيات، تطوير أنظمة إدارة المحتوى، التجارة الإلكترونية، وحلول البرمجة المخصصة لتلبية احتياجات أعمالكم الفريدة.",
        benefits: ["تصميم متجاوب", "أمان عالي", "صيانة مستمرة"]
      },
      {
        ...service,
        description: "استراتيجيات تسويق رقمية متكاملة تشمل: إدارة المحتوى، الإعلانات المدفوعة، تحسين محركات البحث، إدارة وسائل التواصل الاجتماعي، وتحليل البيانات لزيادة المبيعات.",
        benefits: ["زيادة الوصول للعملاء", "تحسين العائد على الاستثمار", "بناء هوية تجارية قوية"]
      },
      {
        ...service,
        description: "خدمات قانونية شاملة للشركات تشمل: التأسيس القانوني، صياغة ومراجعة العقود، الامتثال التنظيمي، حل النزاعات، وجميع الاستشارات القانونية التجارية مع فريق من المحامين المتخصصين.",
        benefits: ["استشارات قانونية متخصصة", "حماية قانونية شاملة", "سرعة في إنجاز المعاملات"]
      },
      {
        ...service,
        description: "تطبيق تقنيات الذكاء الاصطناعي المتطورة لأتمتة العمليات، تحليل البيانات، تطوير روبوتات المحادثة، وحلول التعلم الآلي المخصصة لزيادة الكفاءة وتحسين اتخاذ القرارات.",
        benefits: ["أتمتة العمليات", "تحليل ذكي للبيانات", "توفير الوقت والتكاليف"]
      },
      {
        ...service,
        description: "حلول لوجستية متكاملة وخدمات 3PL تشمل: إدارة المخازن، التوزيع، تتبع الشحنات، تحسين سلسلة التوريد، وحلول الشحن المحلي والدولي لضمان وصول منتجاتكم بأمان وسرعة.",
        benefits: ["تتبع مباشر للشحنات", "تقليل تكاليف التخزين", "شبكة توزيع واسعة"]
      },
      {
        ...service,
        description: "حلول مبتكرة ومخصصة تماماً حسب احتياجاتكم الفريدة، سواء كانت خدمات استشارية متخصصة، مشاريع تقنية معقدة، أو حلول إدارية مبتكرة نصممها خصيصاً لتحقيق أهدافكم الاستراتيجية.",
        benefits: ["حلول مخصصة 100%", "مرونة كاملة في التنفيذ", "دعم مستمر ومتابعة دقيقة"]
      }
    ];
    
    return enhancedDescriptions[index] || service;
  });

  return (
    <section className="py-4 sm:py-6 md:py-8 lg:py-12 bg-pattern-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue-dark mb-2 sm:mb-2">خدماتنا المتخصصة</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed px-2 mb-1">
            نقدم خدمات احترافية متنوعة للشركات والأفراد - كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
          <p className="text-xs sm:text-sm text-brand-blue font-semibold">
            كل خدمة مصممة خصيصاً لتحقيق أهدافكم وتوفير قيمة حقيقية لأعمالكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {enhancedServices.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/95 backdrop-blur-sm border-0 shadow-lg text-center h-full flex flex-col"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="pb-1 sm:pb-1.5 flex-shrink-0 px-2 sm:px-3 pt-1.5 sm:pt-2">
                <div className={`w-8 sm:w-10 h-8 sm:h-10 ${
                  index % 3 === 0 ? 'bg-gradient-blue' : 
                  index % 3 === 1 ? 'bg-gradient-blue-light' : 
                  'bg-gradient-dark-blue'
                } rounded-xl flex items-center justify-center mx-auto mb-1 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <CardTitle className="text-xs sm:text-sm font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-0.5 px-1 leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-tight text-xs px-1 line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              {service.benefits && (
                <div className="px-2 sm:px-3 mb-1 flex-grow">
                  <div className="text-xs text-brand-blue font-semibold mb-0.5">المزايا الرئيسية:</div>
                  <ul className="text-xs text-slate-600 space-y-0">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center justify-center leading-tight text-xs">
                        <span className="w-1 h-1 bg-brand-blue rounded-full mr-1.5 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <CardContent className="pt-0 px-2 sm:px-3 mt-auto pb-1.5">
                <WhatsAppButton 
                  phoneNumber="+966570513821"
                  message={`مرحباً، أريد الاستفسار عن خدمات ${service.title}`}
                  variant="service"
                  text="اطلب استشارة مجانية"
                  className={`w-full ${
                    index % 3 === 0 ? 'bg-gradient-blue hover:bg-brand-accent-blue' : 
                    index % 3 === 1 ? 'bg-gradient-blue-light hover:bg-brand-blue' : 
                    'bg-gradient-dark-blue hover:bg-brand-blue-dark'
                  } text-white border-0 py-1 mb-1 shadow-md hover:shadow-lg transition-all duration-300 text-xs`}
                />
                <div className="flex items-center justify-center text-slate-600 group-hover:text-brand-blue transition-colors duration-300">
                  <span className="text-xs font-medium ml-1">اعرف المزيد</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
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
