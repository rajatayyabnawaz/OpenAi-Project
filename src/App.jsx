import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Man from './Man';
import Help from './Help';
import History from './History';
import Setting from './Setting';
import ContextProvider from './Context';
import DarkModeProvider from './DarkModeContext';
import Footer from './Footer';

const App = () => {
  const [sidebarWidth, setSidebarWidth] = useState('w-44'); // default

  const handleSidebarToggle = (isOpen) => {
    setSidebarWidth(isOpen ? 'ml-44' : 'ml-20');
  };

  return (
    <ContextProvider>
      <DarkModeProvider>
        <Router>
          <div className="h-[90vh] flex bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen z-10`}>
              <Sidebar onToggle={handleSidebarToggle} />
            </div>

            {/* Main content with dynamic left margin */}
            <div className={`transition-all duration-300 ${sidebarWidth} w-full h-screen overflow-y-auto`}>
              <Routes>
                <Route path="/" element={<Man />} />
                <Route path="/help" element={<Help />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Setting />} />
              </Routes>
            </div>
          </div>
          <Footer/>
        </Router>
      </DarkModeProvider>
    </ContextProvider>
  );
};

export default App;
