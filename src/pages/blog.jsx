import React, { useState } from 'react';
import './blog.css';
import Navbar_ola_end from './navbar_ola/Navbar_ola_end';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showArticle, setShowArticle] = useState(false);

  const categories = [
    'All',
    'EV Basics & Comparisons',
    'Government & Policy',
    'Charging & Range',
    'Ownership & Maintenance',
    'Design & Performance',
    'Stories & Milestones'
  ];

  const blogs = [
    {
      id: 1,
      title: 'Electric Bike vs Petrol Bike: Which Is Right for Your Daily Travel',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80',
      category: 'EV Basics & Comparisons'
    },
    {
      id: 2,
      title: 'Two-Wheeler Buying Guide: Perfect Bike or Scooter for Your Needs',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      category: 'EV Basics & Comparisons'
    },
    {
      id: 3,
      title: 'Guidelines to Choose the Best Electric Scooter for Women',
      image: 'https://images.unsplash.com/photo-1558981359-219d6364c9a5?w=600&q=80',
      category: 'EV Basics & Comparisons'
    },
    {
      id: 4,
      title: 'How to Choose the Best Budget Electric Scooter in India',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80',
      category: 'EV Basics & Comparisons'
    },
    {
      id: 5,
      title: 'The Era of EV',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80',
      category: 'Stories & Milestones'
    },
    {
      id: 6,
      title: 'The Era of EV Day 2',
      image: 'https://images.unsplash.com/photo-1558981359-219d6364c9a5?w=600&q=80',
      category: 'Stories & Milestones'
    },
    {
      id: 7,
      title: "Here's how the subsidies have changed in Maharashtra",
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80',
      category: 'Government & Policy'
    },
    {
      id: 8,
      title: 'Ola signs PLI agreement with Ministry of Heavy Industries for local battery cell manufacturing',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
      category: 'Government & Policy'
    },
    {
      id: 9,
      title: 'Ola to invest USD 500 million in battery innovation and indigenous cell R & D',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      category: 'Stories & Milestones'
    },
    {
      id: 10,
      title: 'Government Subsidy for Electric Bikes in India: A Complete 2025 Guide',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
      category: 'Government & Policy'
    },
    {
      id: 11,
      title: 'Ride stress-free with our extended warranty',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      category: 'Ownership & Maintenance'
    },
    {
      id: 12,
      title: 'Ola rolls out limited time offers for Diwali, announces exciting warranty and exchange deals',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
      category: 'Stories & Milestones'
    },
    {
      id: 13,
      title: 'Registration for Two-Wheeler: Everything You Need to Know',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80',
      category: 'Ownership & Maintenance'
    },
    {
      id: 14,
      title: 'Introducing the Freedom Edition Khaki Ola S1 Pro!',
      image: 'https://images.unsplash.com/photo-1558981359-219d6364c9a5?w=600&q=80',
      category: 'Design & Performance'
    },
    {
      id: 15,
      title: 'Our Engineering facts - busting myths and narratives',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      category: 'Design & Performance'
    },
    {
      id: 16,
      title: 'A note on our 13th Foundation Day',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80',
      category: 'Stories & Milestones'
    },
    {
      id: 17,
      title: 'Indian Army Goes on Himalayan expedition with Ola S1 Pro',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
      category: 'Stories & Milestones'
    },
    {
      id: 18,
      title: 'Ola Electric Scooters Under ₹2 Lakh: Price & Variants',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80',
      category: 'EV Basics & Comparisons'
    },
    {
      id: 19,
      title: 'Ola Electric Store: Visit the Nearest Stores',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      category: 'Ownership & Maintenance'
    },
    {
      id: 20,
      title: "Ola unveils India's first indigenously made lithium ion-cell",
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80',
      category: 'Stories & Milestones'
    },
    {
      id: 21,
      title: 'Ola launches MoveOS 2 for 50,000+ customers',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      category: 'Design & Performance'
    }
  ];

  const filteredBlogs =
    activeCategory === 'All'
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  // ========== ARTICLE DETAIL VIEW ==========
  if (showArticle) {
    return (
      <div className="blog-page">
        <article className="article-detail">
          <button className="back-btn" onClick={() => setShowArticle(false)}>
            ← Back to Guides
          </button>

          <h1>
            Electric Bike vs Petrol Bike: Which<br />
            Is Right for Your Daily Travel
          </h1>
          <p className="article-lead">
            Confused between an electric bike and a petrol bike? This guide
            compares cost, performance, maintenance, and eco-friendliness to
            help you choose the right ride for your lifestyle.
          </p>

          <div className="article-hero-img">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&q=80"
              alt="Electric vs Petrol Bike"
            />
          </div>

          <div className="article-body">
            <div className="toc">
              <h3>Table of Contents</h3>
              <ol>
                <li>Electric Bike vs. Petrol Bike – Which is Better for You in 2025</li>
                <li>An Overview of Electric Bikes and Fuel Bikes</li>
                <li>Why Electric Bikes Offer More Comfort</li>
                <li>Does an Electric Bike Need Insurance?</li>
                <li>Conclusion</li>
              </ol>
            </div>

            <h2>Electric Bike vs. Petrol Bike – Which is Better for You in 2025</h2>
            <p>
              When deciding between an <strong>electric bike vs. petrol bike in 2025</strong>,
              think about cost, convenience, and sustainability. <strong>Electric bikes</strong> win
              with lower running costs, government subsidies, and eco-friendly performance.{' '}
              <strong>Petrol bikes</strong> still offer quick refueling and wide availability but
              come with higher fuel and maintenance expenses. For most daily commuters,
              choosing an electric bike in 2025 is the smarter, future-ready decision.
            </p>

            <h2>An Overview of Electric Bikes and Fuel Bikes</h2>
            <p>
              <strong>Electric bikes</strong> run on rechargeable batteries and electric motors,
              offering quiet rides, zero emissions, and very low running costs. They're
              gaining popularity in India due to government subsidies, growing charging
              infrastructure, and eco-friendly benefits.
            </p>
            <p>
              <strong>Fuel bikes (petrol bikes)</strong>, on the other hand, use internal
              combustion engines powered by petrol. They've been the traditional choice
              for decades, with advantages like quick refueling and widespread service
              stations, but they come with rising fuel costs and higher emissions.
            </p>

            <h2>Why Electric Bikes Offer More Comfort</h2>
            <p>
              <strong>Electric bikes offer more comfort</strong> because they deliver instant
              torque without gear shifting, run almost silently, and produce zero vibration.
              Modern electric two-wheelers also feature smooth acceleration, regenerative
              braking, and connected features that make daily commuting less stressful.
            </p>

            <h2>Does an Electric Bike Need Insurance?</h2>
            <p>
              Yes. Just like petrol bikes, electric bikes in India require insurance.
              Third-party liability insurance is mandatory, while comprehensive cover is
              highly recommended to protect against theft, damage, and battery-related
              risks.
            </p>

            <h2>Conclusion</h2>
            <p>
              For daily city travel in 2025, electric bikes generally offer better long-term
              value through lower running costs, government support, and a quieter, cleaner
              ride. Petrol bikes remain useful where long-range travel without charging is
              essential. Evaluate your daily distance, access to charging, and budget to
              decide which is right for you.
            </p>
          </div>
        </article>
      </div>
    );
  }

  // ========== MAIN BLOG LISTING ==========
  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <h1>
          Your Complete Guide to<br />Electric Mobility in India
        </h1>
        <p>
          Explore the latest insights on electric scooters, charging, policy
          updates, and sustainable innovation driving India's mobility future.
        </p>
      </section>

      {/* Featured Article */}
      <section className="featured">
        <div className="featured-card" onClick={() => setShowArticle(true)}>
          <div className="featured-img">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80"
              alt="Electric Bike vs Petrol Bike"
            />
          </div>
          <div className="featured-content">
            <h2>
              Electric Bike vs Petrol Bike:<br />
              Which Is Right for Your Daily<br />Travel
            </h2>
            <span className="arrow">→</span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="categories">
        <div className="category-list">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="blog-card"
              onClick={() => blog.id === 1 && setShowArticle(true)}
            >
              <div className="blog-img">
                <img src={blog.image} alt={blog.title} />
              </div>
              <h3>{blog.title}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="subscribe">
        <div className="subscribe-inner">
          <h2>Subscribe to learn about our latest news</h2>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">→</button>
          </div>
        </div>
      </section>
      <Navbar_ola_end />
    </div>
  );
};

export default BlogPage;
