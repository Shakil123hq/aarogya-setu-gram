import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import PatientRegisterPage from "./pages/PatientRegisterPage";
import HealthWorkerRegisterPage from "./pages/HealthWorkerRegisterPage";
import PatientDashboard from "./pages/PatientDashboard";
import HealthWorkerDashboard from "./pages/HealthWorkerDashboard";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />
          <Route path="/register" element={<Layout><PatientRegisterPage /></Layout>} />
          <Route path="/health-worker-register" element={<Layout><HealthWorkerRegisterPage /></Layout>} />
          <Route path="/patient-dashboard" element={<Layout><PatientDashboard /></Layout>} />
          <Route path="/health-worker-dashboard" element={<Layout><HealthWorkerDashboard /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
