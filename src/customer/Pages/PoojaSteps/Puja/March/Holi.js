import React from "react";
import Holii from "../../Images/Holi Dahan.jpg";

function Holi() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">Holi</h2>
        <div className="py-2 lg:flex">
          <img
            src={Holii}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
              Also recognized as the festival of colors, Holi Dahan is among the
              popular festivals observed throughout India passionately. People
              light huge bonfires called Holika on the eve of Holi after singing
              and dancing around them. This joyous day for every Hindu sees
              friends and family members come together at parks or riversides,
              paving each other’s faces with dry or wet powders of varying
              colors using water pistols filled with painted water. For this
              reason, it is distinctive from other important traditional
              festivals such as Diwali and Ganesh Chaturthi whose happiness
              knows no limits around the world.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              24th March 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              Burning Holika, playing with colors, drinking bhang thandai.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              It can be seen almost everywhere across the country; vibrant celebrations are primarily witnessed in Northern Indian states.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Holika bonfires: sing/dance around them, play with colors, and eat sweets such as Gujiya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Holi;
