import React from "react";
import DurgaPujaa from "../../Images/happy makar sankranti.jpg";
function Makar() {
  return (
    <div className="px-5 lg:px-12">
      <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Makar Sankranti
      </h2>
      <div className="py-2 lg:flex">
        <img
          src={DurgaPujaa}
          className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
        />
        <div className="mx-3">
          <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Makar Sankranti is an expected happy festival when the Sun changes
            its position from Sagittarius to Capricorn. It signals the end of
            winter with the return of longer days. This is a celebration where
            people worship the Sun god (Surya), give thanks to nature for
            providing them with bountiful harvests, and homage to Sun God Surya.
            During this time, families meet, kites are flown in the sky, and til
            or laddoo are among other sweets eaten by the people to refresh
            themselves. This is why kites fly very high in the heavens and why
            many different foods were eaten that brought about gatherings for
            joyous occasions.
          </p>
          <p className="py-3  text-[17px] ">
            <span className="font-semibold text-[20px]">Timing:-</span>
            15th January 2025 
            <br />
            <span className="font-semibold text-[20px]">Key Attraction:-</span>
            Kite flying
          </p>

          <p className="py-3 text-[17px] ">
            <span className="font-semibold text-[20px]">Where:-</span>
            Celebrated throughout Northern India by Sikh communities
            <br />
            <span className=" font-semibold text-[17px]">
            Things To Do:-
            </span>
            Participate in festivities, visit temples and sacred sites
          </p>
        </div>
      </div>
    </div>
  );
}

export default Makar;
