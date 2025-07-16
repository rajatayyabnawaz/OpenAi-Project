import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Man from './Man';
import Help from './Help';
import History from './History';
import Setting from './Setting';
import ContextProvider from './Context';
import DarkModeProvider from './DarkModeContext';

const App = () => {
  return (
    <ContextProvider>
      <DarkModeProvider>
        <Router>
          
            <div className="flex fixed top-0 left-0 h-screen w-20 bg-white dark:bg-gray-800 shadow-md z-10">
              <Sidebar />
             
            

          
            <div >
              <Routes>
                <Route path='/' element={<Man/>}/>
                <Route path="/help" element={<Help />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Setting />} />
              </Routes>
              </div>
              </div>
          
        </Router>
      </DarkModeProvider>
    </ContextProvider>
  );
};

export default App;
