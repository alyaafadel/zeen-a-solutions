
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>العودة للرئيسية</span>
            </Button>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                فريقنا
              </h1>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Empty Content */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl text-slate-600">هذه الصفحة قيد التطوير</h2>
      </div>
    </div>
  );
};

export default OurTeam;
