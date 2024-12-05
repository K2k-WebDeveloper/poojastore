import React from 'react'
import Dhantera from '../../Images/Dhanteras.jpg'
function Dhanteras() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Dhanteras
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Dhantera}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Dhanteras, also known as Dhanatrayodashi, is a significant Hindu festival celebrated two days before Diwali. It marks the beginning of the five-day Diwali festival and holds immense importance for Hindus, especially for wealth and prosperity. On this auspicious day, people worship Goddess Lakshmi and Lord Dhanvantari, seeking blessings for abundance and well-being.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              Dhanteras is celebrated on the thirteenth day (Trayodashi) of the Krishna Paksha (dark fortnight) of the Hindu lunar month of Kartik, which usually falls in October or November according to the Gregorian calendar i.e. October 29, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              Dhanteras ushers in prosperity as people shop for gold, silver, or utensils, believing it brings good fortune. Homes sparkle with rangoli decorations, hosting Lakshmi Puja for wealth while lighting diyas signifies dispelling darkness and welcoming happiness. Some regions also honor Lord Dhanvantari with puja, seeking health and well-being on Dhanteras.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Dhanteras is celebrated across India with great enthusiasm, with notable celebrations in states like Maharashtra, Gujarat, Rajasthan, Uttar Pradesh, and Delhi.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Purchase gold, silver, utensils, or other items symbolizing wealth and prosperity, Clean and decorate homes and workplaces and make arrangements for the Goddess Lakshmi puja, Illuminate earthen lamps (days) 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dhanteras
