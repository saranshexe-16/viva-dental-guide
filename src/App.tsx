import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import ChatbotPage from "./pages/ChatbotPage";
import Tutorials from "./pages/Tutorials";
import Education from "./pages/Education";
import PrescriptionPage from "./pages/PrescriptionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen w-full">
            <Sidebar />
            <main className="flex-1 ml-64 transition-all duration-300">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/assessment" element={<Assessment />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/education" element={<Education />} />
                <Route path="/prescription" element={<PrescriptionPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
