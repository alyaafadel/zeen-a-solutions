import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import CustomRequest from "./pages/CustomRequest";
import CustomSolutions from "./pages/CustomSolutions";
import HRServices from "./pages/HRServices";
import TranslationServices from "./pages/TranslationServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import ProgrammingServices from "./pages/ProgrammingServices";
import LogisticsServices from "./pages/LogisticsServices";
import TrainingServices from "./pages/TrainingServices";
import CareerServices from "./pages/CareerServices";
import AIServices from "./pages/AIServices";
import OurTeam from "./pages/OurTeam";
import NotFound from "./pages/NotFound";
import LegalServices from "./pages/LegalServices";
import AllLinks from "./pages/AllLinks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/custom-request" element={<CustomRequest />} />
          <Route path="/custom-solutions" element={<CustomSolutions />} />
          <Route path="/hr-services" element={<HRServices />} />
          <Route path="/translation-services" element={<TranslationServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/programming-services" element={<ProgrammingServices />} />
          <Route path="/logistics-services" element={<LogisticsServices />} />
          <Route path="/training-services" element={<TrainingServices />} />
          <Route path="/career-services" element={<CareerServices />} />
          <Route path="/ai-services" element={<AIServices />} />
          <Route path="/legal-services" element={<LegalServices />} />
          <Route path="/all-links" element={<AllLinks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
