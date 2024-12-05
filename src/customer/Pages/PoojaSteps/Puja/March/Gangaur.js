import React from "react";
import Gangaurr from "../../Images/Gangaur.jpg";
function Gangaur() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">Gangaur</h2>
        <div className="py-2 lg:flex">
          <img
            src={Gangaurr}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
              The festival of Gangaur, which is primarily a celebration in
              Rajasthan, India, is also significant in other parts of Northern
              India. The term ‘Gangaur’ can be traced back to Lord Shiva’s name
              ‘Gan’ while another explanation points to Goddess Gauri’s name or
              another form of her by that name (Parvati). Married women are the
              primary participants during celebrations dedicated to Goddess
              Gauri (an incarnation of Goddess Parvati), who has emerged with a
              major focus in their rituals that are quite vigorous and full of
              devotion.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              25th March 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              The Gangaur festival opens with a colorful procession where women
              carry earthen pots carrying out folk songs while praying to
              Goddess Gauri. They fast during the daytime and perform complex
              puja ceremonies that involve worship as well as dressing up clay
              images of the goddess in colorful attires and ornaments. This
              occasion is a unique combination of Ghoomar and Kalbelia dance
              where dance houses are well decorated with intricate rangolis
              while also covering roads.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Gangaur has been seen in cities such as Jaipur, Udaipur, Jodhpur, and Bikaner and other parts of Gujarat, Madhya Pradesh, and Uttar Pradesh also celebrate it.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Gauri Puja, Gangaur Procession, taste traditional music and dance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gangaur;
