import React from "react";
import Rakhii from "../../../WhyWeCelebrate/Images/Raksha Bandhan.jpg";
function Raksha() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
          Raksha Bandhan
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Rakhii}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
              Devotees, who observe fast on Janmashtami, take Sankalpa for a
              day-long fast and break it on the next day when both Rohini
              Nakshatra and Ashtami Tithi are over. Devotees perform detailed
              ritualistic Pooja during Nishita Kaal (midnight) involving all
              Shodashopachara (षोडशोपचार) Pooja Vidhi steps.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Prepare Pooja Thali:-</span>
              At home, silver thali or ad-hoc pooja thali can be made by spreading new cotton cloth or banana leaves over the thali.
              <br />
              <span className="font-semibold text-[20px]">
              Items to keep in Pooja Thali – 
              </span>
              -	a small heap of unbroken white rice (Akshat) <br/>
              -	Pooja roli (Kumkum) for tilak<br/>
              -	unpeeled and unbroken coconut (nariyal)<br/>
              -	One small Kalash filled with fresh water<br/>
              -	Raksha Potli <br/>
              -	A pair of Rakhi <br/>
              -	Rakhi Sweets (Ghevar or any other sweet) <br/>

            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">How to do:-</span>
              The water from Kalash is used to make Roli paste. Draw a Swastik at the center of Thali.
Raksha Bandhan rituals itself begins with Roli Tilak on the forehead embellished with Akshat rice.
Put a few Akshat in a fist and tie the Raksha Potli on the right-hand wrist along with the chanting of Mantra. The Mantra which should be chanted while tying Raksha Potli is –

              <br />
              <br/>
              <span className=" font-semibold text-[17px] flex justify-center">Yen Baddho Bali Raja Danavendro Mahabalah।<br/>
Ten Tvaambbhibadhnaami Rakshe Maachal Maachal॥<br/>
येन बद्धो बली राजा दानवेन्द्रो महाबलः।<br/>
तेन त्वामभिबध्नामि रक्षे माचल माचल॥<br/>
</span>
<br/>
The meaning of Raksha Mantra: “I am tying on your hand this Raksha (amulet), with which the most powerful and generous King Bali himself was bound. O Raksha don’t go away; don’t go away.”
One can tie a designer Rakhi available in the market.
After the Tilak and Raksha thread, sweets are offered to the brothers. Then the sisters perform the Aarti of their brother by rotating the plate clockwise from right hand to left hand.
Nowadays, brothers use to give various gifts to their sisters.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Raksha;
