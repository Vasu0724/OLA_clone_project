import React from "react";

export default function Performance() {
  return (
    <div className="performance-container">
      <div className="performance-left">
        <div className="performance-heading">
          <h1>Performance</h1>
          <p>Zip around. Look good.</p>
        </div>
        <div className="range-card">
          <h2>Range</h2>
          <p>242km</p>
          <p>GO far. And then some.</p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_p_web_image_01.webp"
            alt=""
          />
        </div>
      </div>
      <div className="performance-center">
        <div className="speed-card">
          <h2>Top Speed</h2>
          <p>125kmph</p>
          <p>Quicker than you think</p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_p_web_image_02.webp"
            alt=""
          />
          ;
        </div>
        <div className="center-bottom-card">
          <h2>
            Front disc <br />
            brake
          </h2>
          <p>EFficient. Relaible</p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_p_web_image_03.webp"
            alt=""
          />
        </div>
      </div>
      <div className="performance-right">
        <div className="power-card">
          <h2>11kW Peak power</h2>
          <p>Feel the power</p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_p_web_image_04.webp"
            alt=""
          />
        </div>

        <div className="acceleration-card">
          <h2>Acceleration</h2>
          <p>0-40km in 3sec</p>
          <p>Go fast, faster</p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_p_web_image_05.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
