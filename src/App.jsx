import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./components/pages/AppContent";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
        <Analytics />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
