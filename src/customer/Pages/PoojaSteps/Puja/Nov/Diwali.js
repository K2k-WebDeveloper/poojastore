import React from 'react'
import Diwal from '../../Images/Diwali.jpg'
function Diwali() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Diwali
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Diwal}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Diwali, also known as Deepavali, is one of the most significant Hindu festivals celebrated with immense enthusiasm and joy across India and by Hindu communities around the world. It symbolizes the victory of light over darkness, knowledge over ignorance, and good over evil. Diwali is a time of family gatherings, festive decorations, delicious sweets, and the exchange of gifts.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              Diwali is celebrated on the new moon day (Amavasya) of the Hindu lunar month of Kartik, which typically falls in October or November according to the Gregorian calendar, i.e. November 1, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              During Diwali, homes and public areas shimmer with rangoli, diyas, and decorative lights, symbolizing the triumph of light over darkness and inviting prosperity. Families perform Lakshmi Puja, invoking Goddess Lakshmi's blessings for wealth and abundance, while fireworks light up the sky, adding to the festive fervor. Indulging in an assortment of sweets like laddoos, barfis, and jalebis
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Diwali is celebrated with great fervor across India, with vibrant celebrations in states like Maharashtra, Gujarat, Rajasthan, Uttar Pradesh, and Delhi. It is also observed by Hindu communities worldwide.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Decorate homes and public spaces with rangoli designs, diyas, and lights, perform Lakshmi Puja, enjoy fireworks, indulge in a variety of sweets and savory treats, exchange gifts, and share the festive spirit with loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diwali
