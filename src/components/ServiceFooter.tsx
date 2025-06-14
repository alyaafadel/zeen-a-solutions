
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ServiceFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-blue-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>الصفحة الرئيسية</span>
            </Button>
            <span className="text-gray-300">|</span>
            <Button
              variant="ghost"
              onClick={() => navigate('/about')}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              من نحن
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/our-team')}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              فريقنا
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/join-us')}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              انضم إلينا
            </Button>
          </div>
          <div className="text-sm text-blue-500">
            © 2024 Zeen A Plus Solutions. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ServiceFooter;
