import React from 'react'
import Vishwakarm from '../../Images/Vishwakarma Puja.jpg'
function Vishwakarma() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Vishwakarma Puja
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Vishwakarm}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Vishwakarma Puja is a festival that forms part of Hindu religion whereby respect is given to Lord Vishwakarma who is believed to be the architect and craftsman of the gods. This day is honored by many artisans, craftsmen, engineers, and those working in factories throughout the land of India who wish for them to prosper in their jobs.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              September 17th 2024.
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              During this period some devotees perform pujas worshiping Lord Vishwakarma so that they can get skills in their professions. Craftsmen beautify tools and machines with veneration while community festivities bring together workers for puja celebrations, cultural events, and feasts. Prayers are said so that workers can remain safe in their workplace environments without fear of accidents happening to them or causing harm to infrastructures.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Vishwakarma Puja is celebrated in India but it has great significance, especially among those states that have many artisans, craftsmen, and industrial workers such as West Bengal, Bihar, Uttar Pradesh, and Jharkhand.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Participate in puja rituals, offer prayers, and seek blessings from Lord Vishwakarma for success, prosperity, and safety in your profession.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vishwakarma
