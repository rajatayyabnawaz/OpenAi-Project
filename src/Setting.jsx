import React from 'react';
import { useDarkMode } from './DarkModeContext';

const Setting = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="font-medium">Dark Mode</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
          </label>
        </div>

        <div>
          <p className="font-medium">Privacy</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Your data is not stored or shared with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default Setting;
