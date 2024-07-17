import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollIndicator from '../components/ScrollIndicator';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideFooterRoutes = ['/gallery']; // Add any routes where you don't want to show the footer

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <ScrollIndicator />
      <main className="flex-grow">{children}</main>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default MainLayout;
