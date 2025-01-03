import instaLogo from '../assets/insta_logo.png';
import whatsappLogo from '../assets/whatsapp_logo.png';
import facebookLogo from '../assets/facebook_logo.png';
import locationLogo from '../assets/location_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="telephone">
      <div>
      <a 
      href="https://wa.me/5514996095608" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: "#363636", textDecoration: "none" }}>
      <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "8px" }} />
      (14) 99609-5608
    </a>
      </div>
    </div>
      <div className="logos">
        <div>
        <a 
            href="https://www.instagram.com/guedes236/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={instaLogo} alt="Instragram" />
          </a>
        </div>
        <div>
        <a
          href="https://wa.me/5514996095608" 
          target="_blank" 
          rel="noopener noreferrer">
          <img src={whatsappLogo} alt="WhatsApp" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/guedes.pinturas"
          target='_blank'
          rel='noopener noreferrer'>
          <img src={facebookLogo} alt="Facebook" /></a>
        </div>
        <div>
          <a 
            href="https://www.google.com.br/maps/place/R.+Durval+Gon%C3%A7alves+dos+Santos,+348+-+Santa+Cruz+do+Rio+Pardo,+SP,+18900-000/@-22.889938,-49.6662408,15z/data=!3m1!4b1!4m10!1m2!2m1!1sRua+Durval+Gon%C3%A7alves+n.+348.!3m6!1s0x94c06ba7d4b64427:0x22ebd17e0bb37e69!8m2!3d-22.8899588!4d-49.6477869!15sCh1SdWEgRHVydmFsIEdvbsOnYWx2ZXMgbi4gMzQ4LpIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F11jnsswgxr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer">
            <img src={locationLogo} alt="Location" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
