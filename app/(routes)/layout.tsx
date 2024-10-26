import React from "react";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

interface RouterLayoutProps {
  children: React.ReactNode;
}
const RouterLayout = ({ children }: RouterLayoutProps) => {
  return (
    <div>
      {/* Header Alanı */}
      <Header />

      <div className="min-h-screen">{children}</div>

      {/* Footer Alanı */}
      <Footer />
    </div>
  );
};

export default RouterLayout;
