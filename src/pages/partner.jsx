import React, { useState } from 'react';
import './partner.css';
import Navbar_ola_end from './navbar_ola/Navbar_ola_end';

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    forWhom: 'myself',
    fullName: '',
    phone: '',
    email: '',
    associated: 'yes',
    associationType: '',
    businessName: '',
    city: '',
    state: '',
    businessType: '',
    yearsInRetail: '',
    turnover: '',
    preferredLocation: '',
    howHeard: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our partnerships team will contact you soon.');
  };

  return (
    <div className="partner-page">

      {/* ===== HERO ===== */}
      <section className="hero">
        <h1>
          Put your business at the centre<br />
          of India's electric future.
        </h1>
        <p className="hero-sub">Ola network partner program is now open</p>
        <div className="hero-btns">
          <a href="#form" className="btn-white">Express Interest →</a>
          <a href="#refer" className="btn-dark">Refer a Dealer →</a>
        </div>
        <div className="hero-products">
          
        </div>
      </section>

      {/* ===== 1 MILLION CUSTOMERS ===== */}
      <section className="customers">
        <h2>
          Start with over one million<br />
          Ola customers.
        </h2>

        <div className="customers-box">
          <div className="customers-img">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80"
              alt="Ola customers group"
            />
          </div>
          <div className="customers-text">
            <p>
              Become an Ola Network Partner and build on an established national
              brand, proven consumer demand and India's largest electric
              two-wheeler installed base.
            </p>
            <p>
              Every Ola in your market creates continuing commercial potential
              across service, upgrades, accessories and the customer's next purchase.
            </p>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat">
            <strong>1M+</strong>
            <span>Vehicle Deliveries</span>
          </div>
          <div className="stat">
            <strong>Strong</strong>
            <span>Brand Pull</span>
          </div>
          <div className="stat">
            <strong>Recurring</strong>
            <span>Service Revenue</span>
          </div>
          <div className="stat">
            <strong>Upgrade And Repeat</strong>
            <span>Purchase Potential</span>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATED SYSTEM ===== */}
      <section className="system">
        <h2>
          One integrated system.<br />
          multiple revenue streams.
        </h2>
        <p className="system-sub">
          The relationship continues long after the vehicle leaves the showroom.
        </p>

        <div className="system-cards">
          <div className="sys-card">
            <div className="sys-icon">⚡</div>
            <h3>Hypercharging</h3>
            <p>A growing charging ecosystem that keeps customers connected to Ola.</p>
          </div>
          <div className="sys-card">
            <div className="sys-icon">🛵</div>
            <h3>MoveOS</h3>
            <p>Continuous software upgrades that improve the ownership experience and create new commercial possibilities.</p>
          </div>
          <div className="sys-card">
            <div className="sys-icon">🔧</div>
            <h3>Hyperservice</h3>
            <p>Technology-enabled service for faster diagnostics, efficient operations and recurring customer relationships.</p>
          </div>
        </div>

        <p className="system-footer">
          Together, Ola's products, software, charging and service ecosystem give
          partners more ways to earn from every customer over time.
        </p>
      </section>

      {/* ===== MOBILITY + ENERGY ===== */}
      <section className="products">
        <h2>
          Mobility and energy, under<br />
          one Ola partnership.
        </h2>
        <p>
          Sell S1 scooters and Roadster motorcycles to India's vast two-wheeler market.
          Build a second business with Ola Shakti for homes and businesses seeking
          reliable energy storage.
        </p>
        <p>
          Two categories bring two distinct customer audiences, different purchase
          occasions and more opportunities for growth through the same trusted brand.
        </p>

        <div className="product-row">
          <div className="prod">
            <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&q=80" alt="S1 Scooters" />
            <h4>S1 Scooters</h4>
          </div>
          <div className="prod">
            <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&q=80" alt="Roadster Motorcycles" />
            <h4>Roadster Motorcycles</h4>
          </div>
          <div className="prod">
            <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=80" alt="OLA Shakti" />
            <h4>OLA Shakti Energy Storage</h4>
          </div>
        </div>
      </section>

      {/* ===== RELATIONSHIP BEYOND SALE ===== */}
      <section className="beyond">
        <h2>
          A relationship that<br />
          continues beyond the sale
        </h2>
        <p>
          Every Ola Network Partner gains access to MoveOS, Ola's connected vehicle
          platform, AI-powered service diagnostics, and the Hyperservice training
          infrastructure built to support partners as they grow their service
          capability alongside vehicle sales.
        </p>
        <div className="beyond-img">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80"
            alt="Partner with customer"
          />
        </div>
        <h3>Get sales support and training.</h3>
        <p>
          Start earning instantly, with sales support and training. Receive display
          & test ride scooters based on your business. Onboard now, and learn more.
        </p>
      </section>

      {/* ===== REFER A FRIEND ===== */}
      <section className="refer" id="refer">
        <h2>
          Know a friend who could be a<br />
          strong OLA Network Partner?
        </h2>
        <p>
          Apply for yourself or introduce a credible dealer, entrepreneur or business
          operator to OLA. Every submission is evaluated independently, and an
          introduction does not guarantee selection.
        </p>

        <div className="refer-box">
          <div className="refer-img">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80"
              alt="Riders on road"
            />
          </div>
          <div className="refer-text">
            <h3>
              Refer a Friend. Earn<br />
              <span className="green">₹1,00,000.</span>
            </h3>
            <p>
              Receive a ₹1,00,000 referral reward once the eligible dealer introduced
              by you goes live and completes 100 scooter deliveries, subject to
              verification and programme terms.
            </p>
            <p className="small">
              This journey can be shared across OLA sales and service teams, OLA cab
              drivers, fleet and driver vendors, and vehicle-leasing partners.
            </p>
            <a href="#" className="link">View terms and conditions</a>
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="form-section" id="form">
        <div className="form-left">
          <h2>
            Let's build the future<br />
            together
          </h2>
          <p>
            Retail partnerships are opening in select markets across India. Share
            your details and our partnerships team will reach out to discuss the
            opportunity in your city.
          </p>
          <p className="email-line">
            Or write to us directly at{' '}
            <a href="mailto:partner@olaelectric.com">partner@olaelectric.com</a>
          </p>
          <div className="note-box">
            One journey, two routes. You can apply for yourself or introduce a
            prospective dealer. Every submission is assessed independently.
          </div>
        </div>

        <div className="form-right">
          <h3>Express Interest: Ola Network Partner Program</h3>
          <p className="form-desc">
            Share a few details and our partnerships team will reach out to discuss
            the opportunity further.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="forWhom"
                  value="myself"
                  checked={formData.forWhom === 'myself'}
                  onChange={handleChange}
                />
                Myself (I want to become an OLA dealer)
              </label>
              <label>
                <input
                  type="radio"
                  name="forWhom"
                  value="someone"
                  checked={formData.forWhom === 'someone'}
                  onChange={handleChange}
                />
                Someone else (I want to refer a friend)
              </label>
            </div>

            <div className="row-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <p className="label-q">Are you currently associated with OLA in a professional capacity?</p>
            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="associated"
                  value="yes"
                  checked={formData.associated === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="associated"
                  value="no"
                  checked={formData.associated === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            <select name="associationType" value={formData.associationType} onChange={handleChange}>
              <option value="">Association type</option>
              <option value="dealer">Existing Dealer</option>
              <option value="service">Service Partner</option>
              <option value="fleet">Fleet Partner</option>
              <option value="other">Other</option>
            </select>

            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
            />

            <div className="row-2">
              <input
                type="text"
                name="city"
                placeholder="City / Town"
                value={formData.city}
                onChange={handleChange}
              />
              <select name="state" value={formData.state} onChange={handleChange}>
                <option value="">Select State</option>
                <option value="MH">Maharashtra</option>
                <option value="KA">Karnataka</option>
                <option value="TN">Tamil Nadu</option>
                <option value="DL">Delhi</option>
                <option value="GJ">Gujarat</option>
                <option value="other">Other</option>
              </select>
            </div>

            <select name="businessType" value={formData.businessType} onChange={handleChange}>
              <option value="">Current Business Type</option>
              <option value="auto">Automobile Dealership</option>
              <option value="retail">Retail Business</option>
              <option value="service">Service Centre</option>
              <option value="new">New Business</option>
            </select>

            <select name="yearsInRetail" value={formData.yearsInRetail} onChange={handleChange}>
              <option value="">Years in Retail Business</option>
              <option value="0-2">0–2 years</option>
              <option value="3-5">3–5 years</option>
              <option value="6-10">6–10 years</option>
              <option value="10+">10+ years</option>
            </select>

            <select name="turnover" value={formData.turnover} onChange={handleChange}>
              <option value="">Annual net turnover (₹ crore)</option>
              <option value="0-1">0–1 Cr</option>
              <option value="1-5">1–5 Cr</option>
              <option value="5-10">5–10 Cr</option>
              <option value="10+">10+ Cr</option>
            </select>

            <input
              type="text"
              name="preferredLocation"
              placeholder="Preferred Showroom City and Location (if known)"
              value={formData.preferredLocation}
              onChange={handleChange}
            />

            <select name="howHeard" value={formData.howHeard} onChange={handleChange}>
              <option value="">How did you hear about this opportunity?</option>
              <option value="website">Ola Website</option>
              <option value="friend">Friend / Referral</option>
              <option value="social">Social Media</option>
              <option value="news">News / Media</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="comments"
              placeholder="Additional Comments (optional)"
              rows="3"
              value={formData.comments}
              onChange={handleChange}
            />

            <div className="form-footer">
              <p className="disclaimer">
                By submitting this form, you agree to be contacted by the Ola Electric
                partnerships team. Your details will be used solely for the purpose of
                evaluating your application.
              </p>
              <button type="submit" className="btn-submit">Submit</button>
            </div>

            <a href="#" className="link terms">View terms and conditions</a>
          </form>
        </div>
      </section>
      <Navbar_ola_end />
    </div>
  );
};

export default PartnerPage;
