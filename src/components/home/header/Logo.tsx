
interface CompanyInfo {
  name: string;
  slogan: string;
}

interface LogoProps {
  companyInfo: CompanyInfo;
}

const Logo = ({ companyInfo }: LogoProps) => {
  return (
    <div className="flex items-center space-x-4 space-x-reverse">
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <img 
          src="/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png" 
          alt="Zeen A Plus Solutions Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </div>
      <div className="flex flex-col justify-center space-y-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue-dark leading-tight">
          {companyInfo.name}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          {companyInfo.slogan}
        </p>
      </div>
    </div>
  );
};

export default Logo;
