

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HRServices from "./pages/HRServices";
import TranslationServices from "./pages/TranslationServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import ProgrammingServices from "./pages/ProgrammingServices";
import LogisticsServices from "./pages/LogisticsServices";
import TrainingServices from "./pages/TrainingServices";
import CareerServices from "./pages/CareerServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hr-services" element={<HRServices />} />
          <Route path="/translation-services" element={<TranslationServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/programming-services" element={<ProgrammingServices />} />
          <Route path="/logistics-services" element={<LogisticsServices />} />
          <Route path="/training-services" element={<TrainingServices />} />
          <Route path="/career-services" element={<CareerServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

