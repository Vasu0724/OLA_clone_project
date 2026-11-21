import React, { useState, useEffect } from 'react';
import './about_us.css';
import Navbar_ola_end from './navbar_ola/Navbar_ola_end';

const AboutPage = () => {
  const [futureSlide, setFutureSlide] = useState(0);
  const [journeySlide, setJourneySlide] = useState(0);
  const [blogSlide, setBlogSlide] = useState(0);

  const futureItems = [
    {
      title: 'Battery Innovation Centre',
      desc: 'A hub of battery innovation, housing some of the brightest minds from around the world.',
      link: 'More about Battery Innovation Centre →',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      title: 'Gigafactory',
      desc: "A factory that will develop and mass manufacture the world's most advanced cell tech. Right here in India.",
      link: 'More about Gigafactory →',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
    },
    {
      title: 'Design Studio',
      desc: 'Here imagination comes together with technology, turning innovative ideas into reality.',
      link: 'More about Design Studio →',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    }
  ];

  const blogs = [
    {
      year: '2023',
      title: 'A note on our 13th Foundation Day',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80'
    },
    {
      year: '2022',
      title: '2022: Beginning of the End for ICE Age',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80'
    },
    {
      year: '2022',
      title: 'Ola Electric Store',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80'
    }
  ];

  const news = [
    {
      year: '2023',
      title: 'Bhavish Aggarwal recognized on the inaugural TIME100 Climate List',
      logo: 'TIME'
    },
    {
      year: '2023',
      title: 'Ola electric rolls out last year end offers on S1 Air and S1 Pro',
      logo: 'HT Auto'
    },
    {
      year: '2023',
      title: 'Ola End Ice Age, Part 1 event: Bhavish Aggarwal launches EV scooters and...',
      logo: 'CNBC'
    },
    {
      year: '2023',
      title: 'Ola Continues To Rule 2-Wheeler EV Space In Nov',
      logo: 'Inc42'
    }
  ];

  const journey = [
    { date: 'MAR 21', title: 'Ola Futurefactory', sub: 'Breaking ground', icon: 'factory' },
    { date: 'OCT 21', title: 'Futurefactory Plant commissioned', sub: 'Built in 8 Months', icon: 'check' },
    { date: 'DEC 21', title: 'S1 Pro delivery started', sub: '', icon: 'scooter' },
    { date: 'SEP 22', title: '1st Ola Electric Store opened', sub: '', icon: 'store' },
    { date: 'SEP 22', title: 'R&D centre established', sub: 'Battery Innovation Centre', icon: 'rd' },
    { date: 'SEP 22', title: 'S1 Delivery started', sub: '', icon: 'scooter' }
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setFutureSlide((p) => (p + 1) % futureItems.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="ola-about">
      {/* Minimal Top Bar */}
      <header className="topbar">
        <div className="logo">OLA</div>
        <button className="menu-btn" aria-label="Menu">☰</button>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
            alt="Mountains landscape"
          />
        </div>
        <div className="hero-content">
          <h1>
            Making India the global epicentre<br />of EV revolution
          </h1>
        </div>
        <div className="hero-scooters">
          
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <p>
          We are an EV company building towards a brighter, safer and greener future.
          We are building towards making India the world's EV hub by creating an
          ecosystem with products, services and technology which will define the
          next frontier of innovation.
        </p>
      </section>

      {/* Building an All-electric Future */}
      <section className="all-electric">
        <h2>
          Building an All-electric Future.<br />
          From India. For the world.
        </h2>
        <div className="team-photo">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Ola team celebrating"
          />
        </div>
      </section>

      {/* DNA of R&D */}
      <section className="dna-section">
        <div className="dna-text">
          <p>
            Our DNA of R&D and technology including design, engineering and
            manufacturing are focussed on building high-quality and accessible
            EV products.
          </p>
          <p>
            From cell to electric vehicles, we are building the core technologies
            of the future which would drive this transition.
          </p>
        </div>
        <div className="dna-image">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
            alt="Engineer working on battery systems"
          />
        </div>
      </section>

      {/* Manufacturing Plant */}
      <section className="plant-section">
        <p className="plant-text">
          We have largest integrated and automated E2W manufacturing plant in
          India, spread across 400+ acres* in Krishanagiri, Tamil Nadu. We operate
          R&D facilities across India, UK and US including the Battery Innovation
          Centre where we are developing industry leading cell and battery technology.
        </p>
        <div className="plant-grid">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
            alt="Futurefactory exterior"
          />
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
            alt="Welder at work"
          />
          <img
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80"
            alt="Production line of scooters"
          />
        </div>
        <p className="footnote">
          *Leased land in Krishnagiri of 417.59 acres for the operation of our
          manufacturing facilities: Futurefactory and upcoming Ola Gigafactory
        </p>
      </section>

      {/* Engineering The Future - Stats */}
      <section className="stats-section">
        <div className="stats-header">
          <h2>Engineering The Future</h2>
          <p>
            From design to engineering and manufacturing, we are focussed on
            developing and owning all core EV technologies and components.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">959</div>
            <div className="stat-label">Employees in R&D</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏅</div>
            <div className="stat-number">304</div>
            <div className="stat-label">Patents in India*</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">®</div>
            <div className="stat-number">74</div>
            <div className="stat-label">Registered design</div>
          </div>
        </div>
        <p className="stats-note">*Registered & Pending, as of March 31, 2024.</p>
      </section>

      {/* Future Ready. Already. */}
      <section className="future-ready">
        <div className="future-header">
          <h2>Future Ready. Already.</h2>
          <div className="carousel-btns">
            <button onClick={() => setFutureSlide((p) => (p - 1 + futureItems.length) % futureItems.length)}>‹</button>
            <button onClick={() => setFutureSlide((p) => (p + 1) % futureItems.length)}>›</button>
          </div>
        </div>
        <div className="future-track" style={{ transform: `translateX(-${futureSlide * 100}%)` }}>
          {futureItems.map((item, i) => (
            <div className="future-card" key={i}>
              <img src={item.image} alt={item.title} />
              <div className="future-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#">{item.link}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our People */}
      <section className="people-section">
        <div className="people-header">
          <h2>Our People</h2>
          <p>
            Driven by boundless passion and ambition, our vision is simple: unite
            young, brilliant minds and shape the global EV future. We thrive on
            our tech excellence and engineering prowess. Our global talent pool
            fuels innovation, creating industry-leading products. Shaping today
            and tomorrow.
          </p>
        </div>
        <div className="people-photo">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
            alt="Ola team outdoors"
          />
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="journey-section">
        <div className="journey-header">
          <h2>Our journey</h2>
          <div className="carousel-btns">
            <button onClick={() => setJourneySlide((p) => Math.max(0, p - 1))}>‹</button>
            <button onClick={() => setJourneySlide((p) => Math.min(1, p + 1))}>›</button>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-line" />
          {journey.map((item, i) => (
            <div className={`timeline-item ${i % 2 === 0 ? 'top' : 'bottom'}`} key={i}>
              <div className="timeline-icon">{item.icon === 'factory' ? '🏭' : item.icon === 'check' ? '✅' : item.icon === 'scooter' ? '🛵' : item.icon === 'store' ? '🏪' : '🔬'}</div>
              <h4>{item.title}</h4>
              {item.sub && <span className="sub">{item.sub}</span>}
              <span className="date">{item.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="blogs-section">
        <div className="blogs-header">
          <h2><span className="blog-badge">Blogs</span></h2>
          <div className="carousel-btns">
            <button onClick={() => setBlogSlide((p) => (p - 1 + blogs.length) % blogs.length)}>‹</button>
            <button onClick={() => setBlogSlide((p) => (p + 1) % blogs.length)}>›</button>
          </div>
        </div>
        <div className="blogs-grid">
          {blogs.map((blog, i) => (
            <div className="blog-card" key={i}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-meta">
                <span className="year">{blog.year}</span>
                <h3>{blog.title}</h3>
                <a href="#">Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsroom */}
      <section className="newsroom-section">
        <h2>Newsroom</h2>
        <div className="news-grid">
          {news.map((item, i) => (
            <div className="news-card" key={i}>
              <div className="news-logo">{item.logo}</div>
              <div className="news-content">
                <span className="year">{item.year}</span>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="read-more">Read More →</a>
      </section>

      {/* Come Build The Future */}
      <section className="join-section">
        <h2>Come Build The Future With Us</h2>
        <p className="join-sub">
          Join us and be a part of a team that values collaboration, transparency, and accountability.
        </p>
        <div className="join-grid">
          <div className="join-card large">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80" alt="Team discussion" />
          </div>
          <div className="join-card">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80" alt="Factory floor" />
          </div>
          <div className="join-card">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80" alt="Workers in PPE" />
          </div>
          <div className="join-card">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80" alt="Outdoor meeting" />
          </div>
          <div className="join-card">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&q=80" alt="VR design" />
          </div>
          <div className="join-card wide">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Team lounge" />
          </div>
        </div>
      </section>

      <Navbar_ola_end />
    </div>
  );
};

export default AboutPage;
