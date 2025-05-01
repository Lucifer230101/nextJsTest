'use client';

import '../app/styles/carousel.css';

import { useState } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/course1.jpg',
    '/images/course2.jpg',
    '/images/course3.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="homePage-container" style={{ padding: '1rem' }}>
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#fca65e' }}>Welcome to NEXAURA</h1>
        <p style={{ maxWidth: '600px', margin: '0.5rem auto' }}>
          Level Up your skills with bite-sized courses and personalized AI guidance.
        </p>
      </section>

      {/* Carousel Section */}
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Carousel Slide ${index}`} className="carousel-slide" />
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={prevSlide}>❮</button>
          <button className="carousel-button" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </main>
  );
}
