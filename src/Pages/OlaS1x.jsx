import React, { useState } from "react";
import Tabs from "../Components/Tabs";

export default function OlaS1x() {
   const [activeTab, setActiveTab] = useState("Performance");
  return (
    <div>
      <section className="page1">
        <div className="page1-content">
          <h1>
            <h6>
              Introducing <br />
            </h6>
            Ola S1 X+ 5.2 kWh
          </h1>
          <p>
            Powered by India's most advanced cell, 4680 Bharat Cell. <br /> 320
            Kms of range for every Indian.
          </p>
          <a href="#">Buy Now →</a>
        </div>
        <div className="page1-stats">
          <h3>
            320km <br /> Range(Idc)
          </h3>
          <h3>
            11kw <br /> Peak Power
          </h3>
          <h3>
            125km/h <br /> Top Speed
          </h3>
        </div>
        <img
          src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_x_gen3_plus_banner_web_image_v2.webp"
          alt="Scooty banner"
        />
      </section>
      <section className="page2">
        <div className="page2-content">
          <h1>The all new S1 X+</h1>
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/s1x/gen3_s1x_plus_product_web_image.webp"
            alt=""
          />
        </div>
        <div className="page2-feature">
          <div className="feature">
            <span>✦</span>
            <p>
              Mid-drive motor with
              <br /> integrated MCU
            </p>
          </div>

          <div className="feature">
            <span>✦</span>
            <p>
              Front disc
              <br /> brake
            </p>
          </div>

          <div className="feature">
            <span>✦</span>
            <p>
              Brake by wire tech with
              <br /> patented sensors
            </p>
          </div>

          <div className="feature">
            <span>✦</span>
            <p>
              Physical
              <br /> key
            </p>
          </div>
        </div>
        <div className="feature-img">
          <img
            src="https://cdn.olaelectric.com/sites/evdp/pages/gen3/s1_pro_plus_strip_banner_mweb_v3.webp"
            alt=""
          />
        </div>
        <Tabs/>
      </section>
    </div>
  );
}
