
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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-pattern-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-dark mb-6 sm:mb-8">خدماتنا المتخصصة</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-2 mb-4">
            نقدم خدمات احترافية متنوعة للشركات والأفراد - كشركاء متخصصين لإنجاز مهامكم دون الحاجة لتوظيف فرق دائمة
          </p>
          <p className="text-sm sm:text-base text-brand-blue font-semibold">
            كل خدمة مصممة خصيصاً لتحقيق أهدافكم وتوفير قيمة حقيقية لأعمالكم
          </p>
        </div>

        {/* تحسين الشبكة لتكون أكثر سلاسة على الهواتف المحمولة */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {enhancedServices.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/95 backdrop-blur-sm border-0 shadow-lg text-center h-full flex flex-col"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="pb-4 sm:pb-6 flex-shrink-0">
                <div className={`w-16 sm:w-20 h-16 sm:h-20 ${
                  index % 3 === 0 ? 'bg-gradient-blue' : 
                  index % 3 === 1 ? 'bg-gradient-blue-light' : 
                  'bg-gradient-dark-blue'
                } rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors duration-300 mb-3 sm:mb-4 px-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              {service.benefits && (
                <div className="px-4 sm:px-6 mb-4 flex-grow">
                  <div className="text-xs sm:text-sm text-brand-blue font-semibold mb-2">المزايا الرئيسية:</div>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-brand-blue rounded-full mr-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <CardContent className="pt-0 px-4 sm:px-6 mt-auto">
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
