
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const JoinUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-2 sm:mb-3">انضم إلى شبكة المتخصصين لدينا</h2>
        <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
          هل تمتلك خبرة متخصصة؟ انضم إلى شبكة الخبراء المستقلين لدينا وساعد الشركات والأفراد في إنجاز مهامهم
        </p>
        <Button
          size="lg"
          onClick={() => navigate('/join-us')}
          className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <UserPlus className="ml-2 h-5 w-5" />
          ابدأ رحلتك معنا
        </Button>
      </div>
    </section>
  );
};

export default JoinUsSection;
