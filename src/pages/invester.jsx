import React, { useState } from 'react';
import './invester.css';
import Navbar_ola_end from './navbar_ola/Navbar_ola_end';

const InvestorPage = () => {
  const [blogIndex, setBlogIndex] = useState(0);

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
      year: '2025',
      title: 'Ola Electric may gain mkt share due to less impact of rare earth magnet...',
      logo: 'THE WEEK',
      color: '#c41e3a'
    },
    {
      year: '2025',
      title: 'Five factors why Ola Electric Mobility shares surged 20% on Monday',
      logo: 'CNBC',
      color: '#000'
    },
    {
      year: '2025',
      title: 'Ola Electric revenue up 35.5 pc in Q1 auto biz turns EBITDA positive in June...',
      logo: 'THE WEEK',
      color: '#c41e3a'
    },
    {
      year: '2025',
      title: 'Ola Electric announces mass roll out of MoveOS 5. Check out the features',
      logo: 'HT Auto',
      color: '#1a73e8'
    }
  ];

  return (
    <div className="investor-page">
      {/* ========== HERO / INVESTOR RELATIONS ========== */}
      <section className="ir-hero">
        <div className="ir-hero-left">
          <p className="eyebrow">Investor Relations</p>
          <h1>
            Pioneering India's<br />Electric Revolution
          </h1>
          <button className="btn-dark">
            Q2 Earnings Call Invite →
          </button>
        </div>
        <div className="ir-hero-right">
          <p className="eyebrow">Investor Relations</p>
          <div className="ir-links">
            <a href="#" className="ir-link-card">
              <span className="icon">📄</span>
              Shareholders' Letter Q2
              <span className="arrow">→</span>
            </a>
            <a href="#" className="ir-link-card">
              <span className="icon">🎙️</span>
              Earnings Call Replay Q2
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========== MISSION ========== */}
      <section className="mission">
        <p>
          We are an EV company building towards a brighter, safer and greener
          future. We are building towards making India the world's EV hub by
          creating an ecosystem with products, services and technology which
          will define the next frontier of innovation.
        </p>
        <a href="#" className="link-green">Learn more about our business →</a>
      </section>

      {/* ========== MAKING INDIA ALL ELECTRIC ========== */}
      <section className="all-electric">
        <h2>
          Making India<br />all electric.
        </h2>

        <div className="product-grid">
          {/* Scooters */}
          <div className="product-card image-card">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80"
              alt="Ola Electric Scooters lineup"
            />
          </div>
          <div className="product-card text-card">
            <h3>Electric Scooters</h3>
            <p>
              With our diverse range of electric scooters, we're setting the
              stage for a sustainable and electrifying future of mobility in India.
            </p>
            <a href="#" className="link-green">Learn more →</a>
          </div>

          {/* Motorcycles */}
          <div className="product-card text-card">
            <h3>Electric Motorcycles</h3>
            <p>
              Marking a significant stride in defining the future of motorcycling.
            </p>
            <a href="#" className="link-green">Learn more →</a>
          </div>
          <div className="product-card image-card">
            <img
              src="https://images.unsplash.com/photo-1558981359-219d6364c9a5?w=800&q=80"
              alt="Ola Electric Motorcycle in desert"
            />
          </div>

          {/* 4680 Cell */}
          <div className="product-card image-card">
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80"
              alt="Ola 4680 Cell"
            />
          </div>
          <div className="product-card text-card">
            <h3>Indigenously developed 4680 Cell</h3>
            <p>
              Transforming the global energy landscape through core cell
              technology development, right here in India.
            </p>
          </div>
        </div>
      </section>

      {/* ========== INNOVATION ========== */}
      <section className="innovation">
        <h2>
          Innovation.<br />In everything we do.
        </h2>
        <div className="innovation-grid">
          <div className="innov-card design">
            <h3>Design</h3>
            <p>Perfect balance of Purity, Simplicity and Functionality.</p>
            <a href="#" className="link-green">Learn more →</a>
            <img
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&q=80"
              alt="Design scooters"
            />
          </div>
          <div className="innov-card performance">
            <h3>Performance</h3>
            <p>Pure Power, Acceleration and Range. Enabled by next gen 2-wheeler Platform.</p>
            <a href="#" className="link-green">Learn more →</a>
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80"
              alt="Performance scooter"
            />
          </div>
          <div className="innov-card technology">
            <h3>Technology</h3>
            <p>Advanced features for an upgraded riding experience. Enabled by MoveOS 5.</p>
            <a href="#" className="link-green">Learn more →</a>
            <img
              src="https://images.unsplash.com/photo-1558981359-219d6364c9a5?w=500&q=80"
              alt="Technology dashboard"
            />
          </div>
        </div>
      </section>

      {/* ========== GLOBAL EV HUB ========== */}
      <section className="ev-hub">
        <h2>
          Making India the<br />Global EV hub of the world
        </h2>
        <p className="subtitle">
          A hub for manufacturing quality EVs and to build a robust EV supply chain ecosystem.
        </p>
        <div className="hub-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80"
            alt="Ola Gigafactory aerial view"
          />
          <span className="illustration-note">The images shown is for illustration purposes only.</span>
        </div>

        <div className="factory-cards">
          <div className="factory-card">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80"
              alt="Futurefactory"
            />
            <h3>Futurefactory</h3>
            <p>Largest integrated and automated E2W manufacturing plant in India.</p>
            <a href="#" className="link-green">Learn more →</a>
          </div>
          <div className="factory-card">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"
              alt="Gigafactory"
            />
            <h3>Gigafactory</h3>
            <p>India's big leap in building the future of energy.</p>
            <a href="#" className="link-green">Learn more →</a>
          </div>
        </div>
      </section>

      {/* ========== D2C DISTRIBUTION ========== */}
      <section className="d2c">
        <h2>Our D2C Omnichannel distribution network</h2>
        <p className="subtitle">
          An integrated company-owned sales, service and charging network.
        </p>
        <div className="d2c-images">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80"
            alt="Ola Experience Centre"
          />
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=700&q=80"
            alt="Ola community ride"
          />
        </div>

        <div className="network-grid">
          <div className="network-item">
            <h3>Pan India retail network</h3>
            <p>India's largest automotive distribution network with 2701 Ola Electric Stores.</p>
            <a href="#" className="link-green">Learn more →</a>
          </div>
          <div className="network-item">
            <h3>Thriving Community</h3>
            <p>A large thriving community of Ola scooter owners</p>
            <a href="#" className="link-green">Learn more →</a>
          </div>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80"
              alt="Service centre"
            />
            <h3>Always at your service</h3>
            <p>Extensive network of 780 Ola service centers across all states.</p>
          </div>
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80"
              alt="Hypercharger"
            />
            <h3>Go anywhere. Go everywhere</h3>
            <p>Charge up with 248 hypercharging and 764 standard points.</p>
          </div>
        </div>
      </section>

      {/* ========== FINANCIAL METRICS ========== */}
      <section className="metrics">
        <h2>
          Key operating & financial<br />
          metrics <span className="highlight">Q2 FY 27</span>
        </h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="value">₹421 Cr</div>
            <div className="label">REVENUE FROM OPERATIONS</div>
          </div>
          <div className="metric-card">
            <div className="value">34,667</div>
            <div className="label">DELIVERIES</div>
          </div>
          <div className="metric-card">
            <div className="value">29.9%</div>
            <div className="label">CONSOL GROSS MARGIN</div>
          </div>
          <div className="metric-card">
            <div className="value">-58.5%</div>
            <div className="label">CONSOL ADJ. OP. EBITDA MARGIN*</div>
          </div>
        </div>
        <div className="metrics-footer">
          <a href="#" className="link-green">Know More about our financials →</a>
          <p className="note">
            *Adj. Operating EBITDA refers to Operating EBITDA (excluding other income) including the lease expenses.
          </p>
        </div>
      </section>

      {/* ========== BLOGS ========== */}
      <section className="blogs">
        <div className="blogs-header">
          <h2>Blogs</h2>
          <div className="carousel-btns">
            <button onClick={() => setBlogIndex((p) => (p - 1 + blogs.length) % blogs.length)}>‹</button>
            <button onClick={() => setBlogIndex((p) => (p + 1) % blogs.length)}>›</button>
          </div>
        </div>
        <div className="blogs-grid">
          {blogs.map((blog, i) => (
            <div className="blog-card" key={i}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-body">
                <span className="year">{blog.year}</span>
                <h3>{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="link-green">Read more →</a>
      </section>

      {/* ========== NEWSROOM ========== */}
      <section className="newsroom">
        <h2>Newsroom</h2>
        <div className="news-grid">
          {news.map((item, i) => (
            <div className="news-item" key={i}>
              <div className="news-logo" style={{ background: item.color }}>
                {item.logo}
              </div>
              <div className="news-text">
                <span className="year">{item.year}</span>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="link-green">Read More →</a>
      </section>

      <Navbar_ola_end />
    </div>
  );
};

export default InvestorPage;
