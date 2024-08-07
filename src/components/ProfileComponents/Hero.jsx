import '../../../static/fonts.css';
import CopyButton from '/ProfileAssets/HeroCopyButton.svg';
import TwitterButton from '/ProfileAssets/HeroTwitter.svg'; // Assuming the Twitter icon path is correct
import HeroProfilePicture from './HeroProfilePicture'; // Adjust the import path as needed

const background = "bg-backgroundColorPrimary";
const tab1 = 'Profile';
const tab2 = 'Settings';

const header = 'Profile Details';
const subheader1 = 'Username';
const subheader2 = 'Link Socials';
const subheader3 = 'Wallet Address';

const subheader1Data = 'Robbie';
const subheader2Data = 'Twitter';
const subheader3Data = '0xcC3eCcf3a756850D02C4c455547bA59f49595565';

function Hero(props) {
  // Format subheader3Data to show only first 6 and last 4 characters
  const formattedSubheader3Data = `${subheader3Data.slice(0, 6)}...${subheader3Data.slice(-4)}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(subheader3Data)
      .then(() => {
        // Optional: Provide feedback to user
        console.log('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className={`relative h-screen flex ${background}`}>
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative z-10 mx-24">
        <div className="grid grid-cols-12 w-full">
          {/* Tabs in column 3 */}
          <div className="col-start-3 col-span-1 flex flex-col justify-center items-start">
            <div className="sfui4 text-textColorPrimary">{tab1}</div>
            <div className="mt-6 sfui4 text-textColorSecondary">{tab2}</div>
          </div>

          {/* Vertical line in column 4 */}
          <div className="col-start-4 flex justify-center items-center">
            <div className="h-[70vh] w-[1px] bg-textColorTertiary" />
          </div>

          {/* Header and subheaders in column 5 */}
          <div className="col-start-5 col-span-4 flex flex-col justify-center items-start">
            <h2 className="sfui2 text-textColorPrimary">{header}</h2>
            <div className="mt-10 w-full">
              <div className="sfui4 text-textColorPrimary">{subheader1}</div>
              <div className="mt-2 border border-textColorTertiary/[0.5] rounded-[14px] px-4 py-3 text-textColorPrimary2">
                {subheader1Data}
              </div>
            </div>
            <div className="mt-12 w-full">
              <div className="sfui4 text-textColorPrimary">{subheader2}</div>
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
              <div className="sfui4 text-textColorPrimary">{subheader3}</div>
              <div className="mt-2 flex font-sfui font-light text-4xl text-textColorTertiary items-center">
                {formattedSubheader3Data}
                <img
                  src={CopyButton}
                  alt="Copy"
                  className="ml-2 cursor-pointer"
                  onClick={handleCopy}
                />
              </div>
            </div>
          </div>

          {/* Profile Picture in column 10 */}
          <div className="col-start-10 col-span-2 flex justify-center items-center">
            <HeroProfilePicture />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
