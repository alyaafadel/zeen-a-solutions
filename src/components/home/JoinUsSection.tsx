
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const JoinUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">انضم إلى شبكة المتخصصين لدينا</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          هل تمتلك خبرة متخصصة؟ انضم إلى شبكة الخبراء المستقلين لدينا وكن جزءاً من مشاريع مميزة
        </p>
        <Button
          size="lg"
          onClick={() => navigate('/join-us')}
          className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <UserPlus className="ml-2 h-5 w-5" />
          ابدأ رحلتك معنا
        </Button>
      </div>
    </section>
  );
};

export default JoinUsSection;
