
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PetDetail from "./pages/PetDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
// Add these routes as they'll be implemented later
// import AgendarEntrevista from "./pages/AgendarEntrevista";
// import AgendarConsulta from "./pages/AgendarConsulta";
// import GestaoAnimais from "./pages/GestaoAnimais";
// import GestaoTutores from "./pages/GestaoTutores";
// import GestaoVeterinarios from "./pages/GestaoVeterinarios";
// import GestaoConsultas from "./pages/GestaoConsultas";
// import GestaoVacinas from "./pages/GestaoVacinas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pet/:id" element={<PetDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/sobre" element={<AboutUs />} />
          {/* Novas rotas - serão implementadas posteriormente */}
          <Route path="/agendar-entrevista" element={<NotFound />} />
          <Route path="/agendar-consulta" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
