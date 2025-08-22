import React from "react";
import { sendToBot, initBot } from "@/lib/chatbot";
import Footer from "@/components/Footer";
import MenubarMain from "@/components/ui/menubar";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Go to homepage">
            {/* <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div> */}
            <img src="logo_csm_png.png" alt="Logo" className="w-8 h-8 object-contain"/>
            <h1 className="text-xl font-bold text-foreground">C.M.S LABORAL</h1>
          </Link>
          <MenubarMain />
        </div>
      </header>

      <main className="flex-grow bg-background py-18 px-4">
        {children}
      </main>

  <Footer />

      {/* <ChatWidget /> */}
    </div>
  );
};

export default Layout;