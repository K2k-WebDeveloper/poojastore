import React from "react";
import BasantP from "../../Images/Basant Panchami.jpg";
function Basant() {
  return (
    <div className="px-5 lg:px-12">
      <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Basant Panchami
      </h2>
      <div className="py-2 lg:flex">
        <img
          src={BasantP}
          className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
        />
        <div className="mx-3">
          <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            One of the prominent Hindu festivals that is dedicated to the
            Goddess of knowledge, music, and arts - Goddess Saraswati is known
            as the festival of spring or the moment when spring comes. It
            commences with people dressing in yellow, giving her flowers, and
            singing her songs. Other than that, they await her blessings for
            wisdom and creativity while engaging in various cultural events all
            meant to honor her. This period also signifies a transition from
            winter to warm season on Earth. It was therefore always dear to many
            so it was celebrated by all generations of Indians.
          </p>
          <p className="py-3  text-[17px] ">
            <span className="font-semibold text-[20px]">Timing:-</span>
            14th February 2024
            <br />
            <span className="font-semibold text-[20px]">Key Attraction:-</span>
            Yellow-colored garments must be worn along with yellow dishes like sweet saffron rice and kadhi.
          </p>

          <p className="py-3 text-[17px] ">
            <span className="font-semibold text-[20px]">Where:-</span>
            The states of Bihar West Bengal, Assam, Odisha, Punjab as well as Haryana
            <br />
            <span className=" font-semibold text-[17px]">Things To Do:-</span>
            Attend Saraswati Puja and other celebrations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Basant;
