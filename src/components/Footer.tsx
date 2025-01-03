import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faCamera } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>CONTATO</h4>
        <p>
          <FontAwesomeIcon icon={faPhone} style={{ color: "#363636", marginRight: "8px" }} />
          (14) 99960-5608
        </p>
        <p>
          <FontAwesomeIcon icon={faCamera} style={{color : "#363636", marginRight: "8px" }}/>
          contato@exemplo.com
        </p>
      </div>
      <div className="footer-section">
        <h4>ENDEREÇO</h4>
        <p>
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#363636", marginRight: "8px" }} />
          Rua Durval Gonçalves, n. 348
        </p>
        <p>Residencial Paraíso</p>
        <p>Sta. Cruz do Rio Pardo - SP</p>
      </div>
    </footer>
  );
};

export default Footer;
