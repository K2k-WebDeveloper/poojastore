import React from "react";
import Maha from "../../Images/Maha Shivaratri.jpg";

function Shivaratri() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Maha Shivaratri
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Maha}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
              Maha Shivaratri is this sacred Hindu celebration which stands in
              honor of Lord Shiva and symbolizes light’s triumph over dark and
              ignorance. In such a spiritual context, fasting, praying and an
              all-night vigil help one reflect inwardly on oneself. This
              festival provides an opportunity for the heart to be cleansed to
              receive the divine grace of Lord Shiva through power from within
              and deepest knowledge.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              8th March 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              This holy period is observed by devotees through fasting and
              paying homage to Shiva shrines, performing Rudra Abhishekam in
              which milk, curd, honey, and many other divine substances take
              place by pouring over the Shiva Lingam.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Celebrated in states such as Madhya Pradesh, Uttar Pradesh,
              Maharashtra, Karnataka, Andhra Pradesh, and Tamil Nadu.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Participate in Shiva Puja, visit temples or do meditation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shivaratri;
