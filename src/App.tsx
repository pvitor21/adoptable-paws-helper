
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
import ComoFunciona from "./pages/ComoFunciona";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import GuideCuidados from "./pages/GuideCuidados";
import Veterinarios from "./pages/Veterinarios";
import ProcessoAdocao from "./pages/ProcessoAdocao";
import HistoriasSucesso from "./pages/HistoriasSucesso";
import Contato from "./pages/Contato";
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
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cuidados" element={<GuideCuidados />} />
          <Route path="/veterinarios" element={<Veterinarios />} />
          <Route path="/adocao" element={<ProcessoAdocao />} />
          <Route path="/historias" element={<HistoriasSucesso />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/favoritos" element={<HistoriasSucesso />} />
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
