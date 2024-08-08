import React from 'react';
import CopyButton from '/ProfileAssets/ProfileCopyButton.svg';
import TwitterButton from '/ProfileAssets/ProfileTwitter.svg';

const HeroProfile = ({ username, twitterLink, walletAddress, handleCopy }) => {
  // Format to show only first 6 and last 4 characters
  const formattedWalletAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

  return (
    <div className="col-start-5 col-span-4 flex flex-col justify-center items-start mt-12 w-4/5 sm:w-full">
      <h2 className="sfui2 text-textColorPrimary">Profile Details</h2>
      <div className="mt-10 w-full">
        <div className="sfui4 text-textColorPrimary">Username</div>
        <div className="mt-4 border border-textColorTertiary/[0.5] rounded-[14px] px-4 py-3 text-textColorPrimary2">
          {username}
        </div>
      </div>
      <div className="mt-12 w-full">
        <div className="sfui4 text-textColorPrimary">Link Socials</div>
        <div className="mt-2 flex items-center w-full justify-between">
          <img src={TwitterButton} alt="Twitter" className="w-4 h-4" />
          <button
            className="sfui6 text-textColorPrimary2 border border-textColorTertiary rounded-[14px] py-3 px-4"
            onClick={() => console.log('Connect button clicked')}
          >
            Connect
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div className="sfui4 text-textColorPrimary">Wallet Address</div>
        <div className="mt-2 flex font-sfui font-light text-4xl text-textColorTertiary items-center mb-12">
          {formattedWalletAddress}
          <img
            src={CopyButton}
            alt="Copy"
            className="ml-2 cursor-pointer"
            onClick={handleCopy}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroProfile;
