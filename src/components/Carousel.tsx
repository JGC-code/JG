import React, { useState, useEffect } from "react";
import "./Carousel.css";
import testeImage from "../assets/teste.png";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Carousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image: testeImage,
      title: "Obras de arte",
      description:
        "A criatividade de nossos artistas (Engenheiros e Construtores) fazem surgir espetáculos dentro da engenharia.",
    },
    {
      id: 2,
      image: testeImage,
      title: "Grandes Projetos",
      description:
        "Trabalhamos para transformar ideias em realidades incríveis para nossos clientes.",
    },
    {
      id: 3,
      image: testeImage,
      title: "Excelência na Engenharia",
      description:
        "Nossos projetos representam inovação, tecnologia e qualidade.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
            key={slide.id}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        ←
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default Carousel;
