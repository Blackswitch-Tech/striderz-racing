import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollIndicator from '../components/ScrollIndicator';
const MainLayout = ({ children }) => {
  const location = useLocation();
 

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <ScrollIndicator />
      <main className="">{children}</main>
      
      
    </div>
  );
};

export default MainLayout;
