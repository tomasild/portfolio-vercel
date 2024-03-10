import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./components/pages/AppContent";
import { ThemeProvider } from "@/components/ThemeProvider"


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
