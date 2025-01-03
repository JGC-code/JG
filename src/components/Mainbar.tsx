import jgLogo from '../assets/jgconstrucoes_logo.png';
import './Mainbar.css';

const Mainbar = () => {
  return (
    <div>
      <div className="Logo">
        <div className="img">
          <img src={jgLogo} alt="JG Construções Logo" />
        </div>
        <div className="info">
          <p>Construções/Reformas e Pintura</p>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
