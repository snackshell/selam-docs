import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Quickstart } from "./pages/docs/Quickstart";
import { Models } from "./pages/docs/Models";
import { DocsLayout } from "./components/DocsLayout";
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
          <Route path="/quickstart" element={<DocsLayout><Quickstart /></DocsLayout>} />
          <Route path="/models" element={<DocsLayout><Models /></DocsLayout>} />
          <Route path="/pricing" element={<DocsLayout><div className="p-8"><h1 className="text-3xl font-bold">Pricing - Coming Soon</h1></div></DocsLayout>} />
          <Route path="/text-generation" element={<DocsLayout><div className="p-8"><h1 className="text-3xl font-bold">Text Generation - Coming Soon</h1></div></DocsLayout>} />
          <Route path="/images-vision" element={<DocsLayout><div className="p-8"><h1 className="text-3xl font-bold">Images & Vision - Coming Soon</h1></div></DocsLayout>} />
          <Route path="/audio-speech" element={<DocsLayout><div className="p-8"><h1 className="text-3xl font-bold">Audio & Speech - Coming Soon</h1></div></DocsLayout>} />
          <Route path="/structured-output" element={<DocsLayout><div className="p-8"><h1 className="text-3xl font-bold">Structured Output - Coming Soon</h1></div></DocsLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
