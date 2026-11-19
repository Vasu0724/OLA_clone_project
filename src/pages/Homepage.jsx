import React from "react";

export default function Homepage() {
  return (
    <div>
      <div className="homepage-container">
        <div className="homepage-content">
          <h1>This festive season, light up your life.</h1>
          <p>Ride into the future. Ride electric!</p>
          <button>Book Now →</button>
        </div>
        <img
          src="https://cdn.olaelectric.com/sites/evdp/pages/home_banner/hpb_navratri_web_image.webp"
          alt=""
        />
      </div>
      <div className="homepage-container2">
        <h1>Introducing Ola S1 3rd Gen Portfolio</h1>
        <div className="homepage-content2">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1pro_plus_gen3_web_image_v2.webp"
            alt=""
          />
          <h1>Ola S1 pro+ 3rd Gen</h1>
          <p>Our most powerful scooter yet</p>
          <p>Starting at</p>
          <p id="price">
            Rs 2,870/month <br /> or Rs 1,49,999
          </p>
          <button>Explore S1 pro+ →</button>
        </div>
        <div className="homepage-content2">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1pro_gen3_web_image.webp"
            alt=""
          />
          <h1>Ola S1 pro 3rd Gen</h1>
          <p>Pure power. Peak performance</p>
          <p>Starting at</p>
          <p id="price">
            Rs 2,237/month <br /> or Rs 1,30,999
          </p>
          <button>Explore S1 pro →</button>
        </div>
        <div className="homepage-content2">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1x_plus_gen3_web_image.webp"
            alt=""
          />
          <h1>Ola S1X 3rd Gen</h1>
          <p>Upgrade to electric with style</p>
          <p>Starting at</p>
          <p id="price">
            Rs 1,584/month <br /> or Rs 80,999
          </p>
          <button>Explore S1 x →</button>
        </div>
      </div>
      <div className="homepage-container3">
        <h1>The future of motorcycling</h1>
        <div className="homepage-content3">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/roadster-x/mrx_product_web_image_01.webp"
            alt=""
          />
          <h1>ROADSTER X</h1>
          <p>Upgrade to electric with style</p>
          <p>Starting at</p>
          <p id="price">Rs 95,280</p>
          <button>Explore Roadster X →</button>
        </div>
        <div className="homepage-content3">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/ola_s1pro_gen3_web_image.webp"
            alt=""
          />
          <h1>ROADSTER X+</h1>
          <p>India's ultimate electric upgrade</p>
          <p>Starting at</p>
          <p id="price">Rs 1,23,999</p>
          <button>Explore Roadster X+ →</button>
        </div>
      </div>
      <div className="homepage-container4">
        <h1>Explore our product range</h1>
        <div className="homepage-content4">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/bess/ola_shakti_gen2_product_image_03.webp"
            alt=""
          />
          <h1>OLA Solar Charge Controller</h1>
          <p>MPPT</p>
          <p>3 kW & 6 kW</p>
          <p id="price1">
            High-efficiency <br /> standalone MPPT solar <br />
            charge controller.
          </p>
        </div>
        <div className="homepage-content4">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/bess/ola_shakti_gen2_product_image_01_v2.webp"
            alt=""
          />
          <h1>OLA Shakti</h1>
          <div className="p">
            <p>
              4.6 kWh <br /> Battery Capacity
            </p>
            <p>
              3kW <br />
              Power
            </p>
            <p>
              1.5 hrs (Full Load) <br /> Power Back-Up
            </p>
          </div>
          <p>Introductory offer</p>
          <p id="price2">Rs 99,999</p>
          <button>Reserve at rs 999 →</button>
          <p>Offer valid till 31 Dec 2026</p>
        </div>
      </div>
      <div className="homepage-container5">
        <h1>The all-new Gen-3 platform</h1>
        <div className="homepage-content5">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/hp_gen2_sankalp_web_image_v3.webp"
            alt=""
          />
        </div>
        <div className="homepage-container6">
          <div className="homepage-content6">
            <h1>
              Making India the <br />
              Global EV hub of the world
            </h1>
            <p>
              A hub for manufacturing quality EVs and to build a <br /> robust
              EV supply chain ecosystem.
            </p>
            <a href="#">Learn more →</a>
            <div className="homepage-content-img">
              <img
                src="https://cdn.olaelectric.com/sites/evdp/pages/homeall/pre_prod_home_all_global_ola_ev_web.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="homepage-container7">
          <div className="homepage-content7">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cdn.olaelectric.com/sites/evdp/pages/ev_hub/ev_hub_ourfacility_web_image01.webp"
                  alt=""
                />
              </div>
              <h2>FutureFactory</h2>
              <p>
                Largest Integrated and automated E2W manufacturing plant in
                india.
              </p>
              <a href="#">Learn more →</a>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cdn.olaelectric.com/sites/evdp/pages/ev_hub/ev_hub_gigafactory_web.webp"
                  alt=""
                />
              </div>
              <h2>Gigafactory</h2>
              <p>India's big leap in building the future of energy.</p>
              <a href="#">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}