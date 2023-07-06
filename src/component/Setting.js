import React, { useState, createContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const LanguageContext = createContext();

function Setting() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={language}>
      <div className={`min-h-screen mx-auto p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        <div className="mb-4 flex items-center">
          <label htmlFor="darkModeToggle" className="block font-semibold mr-2">
            Dark Mode
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <div
              className={`toggle-handle bg-white dark:bg-black w-4 h-4 rounded-full shadow-sm transform transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {darkMode ? <FiMoon size={16} color="#fff" /> : <FiSun size={16} color="#fff" />}
            </div>
            <input
              type="checkbox"
              id="darkModeToggle"
              className="custom-checkbox sr-only"
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
          </div>
          <span className="text-sm font-medium">{darkMode ? 'Enabled' : 'Disabled'}</span>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="notificationsToggle" className="block font-semibold mr-2">
            Notifications
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              id="notificationsToggle"
              className="toggle-checkbox"
              checked={notifications}
              onChange={handleNotificationsToggle}
            />
            <label
              htmlFor="notificationsToggle"
              className="toggle-label bg-gray-300 dark:bg-gray-600 absolute left-0 top-0 w-6 h-6 rounded-full transition-transform"
            ></label>
            <div className="toggle-handle bg-white dark:bg-gray-800 w-4 h-4 rounded-full shadow-sm transform transition-transform"></div>
          </div>
          <span className="text-sm font-medium">{notifications ? 'Enabled' : 'Disabled'}</span>
        </div>

        <div className="mb-4">
          <label htmlFor="language" className="block font-semibold mb-1">
            Language
          </label>
          <select
            id="language"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default Setting;
