import React, { useState, useEffect } from 'react';
import './design.css';
import Navbar_ola_end from './navbar_ola/Navbar_ola_end';

const DesignPhilosophy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Mixed Reality",
      description: "Mixed Reality tech is engaged for in-depth design assessments. This helps teams generate collaborative reviews, with multiple stakeholders across geographies.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
    },
    {
      title: "Digital Designing",
      description: "Teams leverage digital design to envision products that not only align with the demands of the modern world, but also resonate with the future.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
    },
    {
      title: "Contextual Visualisation",
      description: "We use modern, innovative design tech in AI, including Meta Humans, to address our design challenges. AI enables rapid idea generation and referencing.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="ola-design-page">
      {/* Design Philosophy Section */}
      <section className="philosophy-section">
        <h1 className="section-title">Our Design Philosophy</h1>
        
        <div className="cards-grid">
          {/* Purity Card */}
          <div className="philosophy-card">
            <div className="card-content">
              <h2>Purity</h2>
              <p>We ensure our designs stay true to their core category identity. So you can never miss them.</p>
            </div>
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" 
                alt="Ola Electric Motorcycle - Purity" 
              />
            </div>
          </div>

          {/* Simplicity Card */}
          <div className="philosophy-card">
            <div className="card-content">
              <h2>Simplicity</h2>
              <p>Simplicity in design enhances not only the aesthetics but also elevates the overall user experience.</p>
            </div>
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80" 
                alt="Ola Electric Scooter - Simplicity" 
              />
            </div>
          </div>

          {/* Functional Card */}
          <div className="philosophy-card">
            <div className="card-content">
              <h2>Functional</h2>
              <p>Design in both form and function. Prioritising usability, safety, and performance to enhance user satisfaction and value.</p>
            </div>
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" 
                alt="Functional Storage - Helmet & Bottle" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Technology Carousel */}
      <section className="future-tech-section">
        <div className="carousel-header">
          <h2>Future Technology. Today.</h2>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="control-btn">‹</button>
            <button onClick={nextSlide} className="control-btn">›</button>
          </div>
        </div>

        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="carousel-slide" key={index}>
                <img src={slide.image} alt={slide.title} />
                <div className="slide-overlay">
                  <h3>{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designing The Future */}
      <section className="designing-future">
        <div className="section-header">
          <h2>Designing The Future</h2>
          <p>Our cutting edge design infrastructure empowers innovation through tech.</p>
        </div>

        <div className="gravity-section">
          <div className="gravity-image">
            <img 
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80" 
              alt="Designer using VR Gravity Sketching" 
            />
          </div>
          <div className="gravity-content">
            <h3>Gravity Sketching</h3>
            <p>
              Using VR, Gravity Sketching empowers designers to intuitively create 
              complex 3D vehicle sketches in a true-to-scale digital environment.
            </p>
            <div className="small-images">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&q=80" alt="Sketch" />
            </div>
          </div>
        </div>
      </section>

      {/* Come Build The Future */}
      <section className="join-section">
        <div className="join-content">
          <h2>Come Build The Future With Us</h2>
          <p>
            Be a part of a company that thrives on challenging the status quo, 
            nurturing creativity in design, and pushing the boundaries of innovation.
          </p>
          <button className="join-btn">
            Join the revolution →
          </button>
        </div>

        <div className="team-grid">
          <div className="team-card large">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Team collaboration" />
          </div>
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" alt="Robot arm clay modeling" />
          </div>
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80" alt="Sketching process" />
          </div>
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" alt="Team outdoor" />
          </div>
        </div>
      </section>

      <Navbar_ola_end />
    </div>
  );
};

export default DesignPhilosophy;