import React from 'react';
import LanguageIcon from '/ProfileAssets/SettingsLanguageIcon.svg';
import CurrencyIcon from '/ProfileAssets/SettingsCurrencyIcon.svg';

const HeroSettings = ({ languageOptions, currencyOptions }) => {
  return (
    <div className="col-start-5 col-span-4 flex flex-col justify-center items-start">
      <h2 className="sfui2 text-textColorPrimary">Settings</h2>

      {/* Language Selection */}
      <div className="mt-10 w-full flex-col items-center">
        <div className="flex items-center space-x-2">
          <div className="sfui4 text-textColorPrimary">Language Selection</div>
          <img src={LanguageIcon} alt="Language" className="w-4" />
        </div>
        <div className="mt-4 border border-textColorTertiary/[0.5] rounded-[14px] px-4 py-3 text-textColorPrimary2">
          <select className="w-full bg-transparent border-none outline-none text-textColorPrimary2">
            {languageOptions.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Displayed Currency */}
      <div className="mt-10 w-full flex-col items-center">
        <div className="flex items-center space-x-2">
          <div className="sfui4 text-textColorPrimary">Displayed Currency</div>
          <img src={CurrencyIcon} alt="Currency" className="w-4" />
        </div>
        <div className="mt-4 border border-textColorTertiary/[0.5] rounded-[14px] px-4 py-3 text-textColorPrimary2">
          <select className="w-full bg-transparent border-none outline-none text-textColorPrimary2">
            {currencyOptions.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

    </div>
  );
}

export default HeroSettings;
