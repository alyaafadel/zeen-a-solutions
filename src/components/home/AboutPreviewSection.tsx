
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CompanyInfo {
  description: string;
}

interface AboutPreviewSectionProps {
  companyInfo: CompanyInfo;
}

const AboutPreviewSection = ({ companyInfo }: AboutPreviewSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-700 mb-6">لماذا تختار Zeen A Plus Solutions؟</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {companyInfo.description}
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/about')}
            className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            اعرف المزيد عن قصتنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
