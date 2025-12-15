import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Scholarships from "@/pages/scholarships";
import Enterprises from "@/pages/enterprises";
import Employment from "@/pages/employment";
import Apply from "@/pages/apply";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/scholarships" component={Scholarships} />
      <Route path="/enterprises" component={Enterprises} />
      <Route path="/employment" component={Employment} />
      <Route path="/apply" component={Apply} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
