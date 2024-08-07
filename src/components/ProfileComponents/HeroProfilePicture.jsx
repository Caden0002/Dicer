import '../../../static/fonts.css';
import Picture from '/ProfileAssets/HeroUserNFTPic.gif';

function HeroProfilePicture(props) {
  return (
    <div className="w-[128px] h-[128px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
        <img 
          src={Picture} 
          alt="Profile" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}

export default HeroProfilePicture;
