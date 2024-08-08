import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageIcon from '/ProfileAssets/SettingsLanguageIcon.svg';
import CurrencyIcon from '/ProfileAssets/SettingsCurrencyIcon.svg';
import DownArrow from '/ProfileAssets/SettingsDownArrow.svg';
import UpArrow from '/ProfileAssets/SettingsUpArrow.svg';

const HeroSettings = ({ languageOptions, currencyOptions }) => {
  // State to manage dropdown visibility
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  // Manage selected values
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('ETH');

  // Refs for dropdown containers
  const languageDropdownRef = useRef(null);
  const currencyDropdownRef = useRef(null);

  // Format options
  const formatOptions = (options, selectedOption) => {
    return options
      .filter(option => option !== selectedOption) // Remove selected option from the list
      .map(option => ({
        value: option,
        label: option
      }));
  };

  const languageOptionsFormatted = formatOptions(languageOptions, selectedLanguage);
  const currencyOptionsFormatted = formatOptions(currencyOptions, selectedCurrency);

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target)) {
        setIsCurrencyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="col-start-5 col-span-4 flex flex-col justify-center items-start mt-12 w-4/5 sm:w-full">
      <h2 className="sfui2 text-textColorPrimary">Settings</h2>

      {/* Language Selection */}
      <div className="mt-10 w-full flex-col items-center">
        <div className="flex items-center space-x-2">
          <div className="sfui4 text-textColorPrimary">Language Selection</div>
          <img src={LanguageIcon} alt="Language" className="w-4" />
        </div>
        <div ref={languageDropdownRef} className="relative mt-4 border border-textColorTertiary/[0.5] rounded-[14px] px-4 py-3 text-textColorPrimary2">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="w-full bg-transparent border-none outline-none text-textColorPrimary2 text-left flex items-center justify-between"
          >
            {selectedLanguage}
            <img
              src={isLanguageDropdownOpen ? UpArrow : DownArrow}
              alt="Toggle Dropdown"
              className="w-4 ml-2"
            />
          </button>
          <AnimatePresence>
            {isLanguageDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full border border-textColorTertiary/[0.5] rounded-[14px] mt-1 bg-transparent z-10"
              >
                {languageOptionsFormatted.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedLanguage(option.value);
                      setIsLanguageDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-textColorPrimary2 text-left hover:bg-textColorTertiary/[0.2]"
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Displayed Currency */}
      <div className="mt-16 w-full flex-col items-center">
        <div className="flex items-center space-x-2">
          <div className="sfui4 text-textColorPrimary">Displayed Currency</div>
          <img src={CurrencyIcon} alt="Currency" className="w-4" />
        </div>
        <div ref={currencyDropdownRef} className="relative mt-4 border border-textColorTertiary/[0.5] rounded-[14px] px-4 py-3 text-textColorPrimary2 mb-36">
          <button
            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
            className="w-full bg-transparent border-none outline-none text-textColorPrimary2 text-left flex items-center justify-between"
          >
            {selectedCurrency}
            <img
              src={isCurrencyDropdownOpen ? UpArrow : DownArrow}
              alt="Toggle Dropdown"
              className="w-4 ml-2"
            />
          </button>
          <AnimatePresence>
            {isCurrencyDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full border border-textColorTertiary/[0.5] rounded-[14px] mt-1 bg-transparent z-10"
              >
                {currencyOptionsFormatted.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCurrency(option.value);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-textColorPrimary2 text-left hover:bg-textColorTertiary/[0.2]"
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default HeroSettings;
