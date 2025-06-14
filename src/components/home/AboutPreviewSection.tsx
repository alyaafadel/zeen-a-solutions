
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Users, Target } from "lucide-react";

interface CompanyInfo {
  description: string;
}

interface AboutPreviewSectionProps {
  companyInfo: CompanyInfo;
}

const AboutPreviewSection = ({ companyInfo }: AboutPreviewSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                🌟 لماذا تختارنا؟
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                شريكك الموثوق في
                <span className="block text-blue-600">رحلة النجاح</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {companyInfo.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3" />
                  <span className="text-lg text-gray-700">خبرة 8+ سنوات في السوق السعودي</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3" />
                  <span className="text-lg text-gray-700">أكثر من 250 مشروع ناجح</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 ml-3" />
                  <span className="text-lg text-gray-700">فريق متخصص ومتنوع</span>
                </div>
              </div>
              
              <Button
                size="lg"
                onClick={() => navigate('/about')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl"
              >
                اعرف المزيد عن قصتنا
              </Button>
            </div>
            
            {/* Features Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">شراكة حقيقية</h3>
                <p className="text-gray-600">نعمل كجزء من فريقكم لضمان تحقيق أهدافكم بأفضل طريقة ممكنة</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">خبرة متنوعة</h3>
                <p className="text-gray-600">متخصصون في مجالات متعددة لتغطية جميع احتياجاتكم التجارية والمهنية</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">نتائج مضمونة</h3>
                <p className="text-gray-600">ملتزمون بتحقيق أهدافكم ونضمن جودة النتائج النهائية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
