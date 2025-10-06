import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isAdminDashboard = location.pathname.startsWith("/admindashboard");

  // Hide Navbar and Footer on Dashboard and AdminDashboard pages
  if (isDashboard || isAdminDashboard) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && !isAdminDashboard && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isDashboard && !isAdminDashboard && <Footer />}
    </div>
  );
};

export default Layout;