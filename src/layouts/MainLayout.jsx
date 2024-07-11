import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollIndicator from '../components/ScrollIndicator';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <ScrollIndicator />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;