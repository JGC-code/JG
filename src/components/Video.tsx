import casaVideo from '../videos/casa.mp4';
import './Video.css';

const Video = () => {
  return (
    <div className="video-container">
      <video className="video-player" autoPlay muted loop controls playsInline>
        <source src={casaVideo} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default Video;
