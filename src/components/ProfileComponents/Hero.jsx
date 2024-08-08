import React, { useState, useEffect } from 'react';
import HeroProfile from './HeroProfile'; 
import HeroSettings from './HeroSettings';
import HeroProfilePicture from './HeroProfilePicture'; 

const background = "bg-backgroundColorPrimary";
const tab1 = 'Profile';
const tab2 = 'Settings';

// Data variables to be used in the HeroProfile and HeroSettings components
const profileData = {
  username: 'OmeletteX',
  twitterLink: 'Twitter',
  walletAddress: '0xcC3eCcf3a756850D02C4c455547bA59f49595565'
};

const settingData = {
  languageOptions: ['English', '中文'],
  currencyOptions: ['ETH', 'USD', 'CNY']
};

function Hero(props) {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(profileData.walletAddress)
      .then(() => {
        console.log('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className={`relative min-h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex flex-col sm:items-center sm:justify-center relative z-10 mx-24">
        {isMobile ? (
          // Mobile View
          <div className="mt-36 flex flex-col justify-center items-center">
            <HeroProfilePicture />
            <div className="mt-20 flex space-x-12">
              <div
                className={`sfui4 ${activeTab === 'Profile' ? 'text-textColorPrimary' : 'text-textColorTertiary'} cursor-pointer`}
                onClick={() => setActiveTab('Profile')}
              >
                {tab1}
              </div>
              <div
                className={`sfui4 ${activeTab === 'Settings' ? 'text-textColorPrimary' : 'text-textColorTertiary'} cursor-pointer`}
                onClick={() => setActiveTab('Settings')}
              >
                {tab2}
              </div>
            </div>
            {activeTab === 'Profile' && (
              <HeroProfile
                username={profileData.username}
                twitterLink={profileData.twitterLink}
                walletAddress={profileData.walletAddress}
                handleCopy={handleCopy}
              />
            )}
            {activeTab === 'Settings' && (
              <HeroSettings
                languageOptions={settingData.languageOptions}
                currencyOptions={settingData.currencyOptions}
              />
            )}
          </div>
        ) : (
          // Desktop View
          <div className="grid grid-cols-12 w-full">
            {/* Tabs in column 3 */}
            <div className="col-start-3 col-span-1 flex flex-col justify-center items-start">
              <div
                className={`sfui4 ${activeTab === 'Profile' ? 'text-textColorPrimary' : 'text-textColorSecondary'} cursor-pointer`}
                onClick={() => setActiveTab('Profile')}
              >
                {tab1}
              </div>
              <div
                className={`mt-6 sfui4 ${activeTab === 'Settings' ? 'text-textColorPrimary' : 'text-textColorSecondary'} cursor-pointer`}
                onClick={() => setActiveTab('Settings')}
              >
                {tab2}
              </div>
            </div>

            {/* Vertical line in column 4 */}
            <div className="col-start-4 flex justify-center items-center">
              <div className="h-[70vh] w-[1px] bg-textColorTertiary" />
            </div>

            {/* Conditional Section Rendering */}
            {activeTab === 'Profile' && (
              <HeroProfile
                username={profileData.username}
                twitterLink={profileData.twitterLink}
                walletAddress={profileData.walletAddress}
                handleCopy={handleCopy}
              />
            )}
            {activeTab === 'Settings' && (
              <HeroSettings
                languageOptions={settingData.languageOptions}
                currencyOptions={settingData.currencyOptions}
              />
            )}

            {/* Profile Picture in column 10 */}
            <div className="col-start-10 col-span-2 flex justify-center items-center">
              <HeroProfilePicture />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
