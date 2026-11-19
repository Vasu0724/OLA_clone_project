import React from "react";

export default function Technology() {
  return (
    <div className="technology-container">
      <div className="technology-left">
        <div className="technology-heading">
          <h2>Technology</h2>
          <p>
            Advanced features. Upgraded riding experience. <br /> Enabled by
            MoveOS.
          </p>
        </div>
        <div className="mid-card">
          <h2>
            Mid drive <br /> motor
          </h2>
          <p>
            With integrated MCU <br /> and chain drive
          </p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_t_web_image_01.webp"
            alt=""
          />
        </div>
      </div>
      <div className="technology-centre">
        <div className="brake-card">
          <h2>Brake by wire</h2>
          <p>
            Patented braking <br /> system for better range <br /> and control
          </p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_t_web_image_02.webp"
            alt=""
          />
        </div>
      </div>
      <div className="technology-right">
        <div className="move-card">
          <h2>
            MoveOS5 <br /> features
          </h2>
          <p>
            Features like <br /> emergency SOS, smart <br /> park, smart watch
            app <br /> and much more
          </p>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/tabs/s1_x_gen3_tenets_t_web_image_03.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
