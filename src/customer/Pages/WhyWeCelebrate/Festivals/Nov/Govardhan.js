import React from 'react'
import Govardha from '../../Images/Govardhan.jpg'
function Govardhan() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Govardhan
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Govardha}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Govardhan Puja, also known as Annakut or Annakoot, is a Hindu festival celebrated the day after Diwali, marking the triumph of Lord Krishna over Indra, the god of rain and thunderstorms. It holds great significance in Hindu mythology and is observed with devotion and enthusiasm, particularly in North India.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              Govardhan Puja is celebrated on the first day of the bright fortnight (Shukla Paksha) of the Hindu lunar month of Kartik, which usually falls in October or November according to the Gregorian calendar i.e. November 2, 2024 
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              During Govardhan Puja, devotees present Annakut offerings resembling the Govardhan Hill, showcasing a variety of vegetarian delicacies. Special rituals entail puja ceremonies at homes and temples, honoring Lord Krishna and expressing gratitude for his protection. 
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Govardhan Puja is primarily celebrated in North Indian states like Uttar Pradesh, Rajasthan, Haryana, and Punjab, where it is observed with great fervor and enthusiasm.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Annakut Preparation, perform Govardhan Puja rituals, and Govardhan Parikrama, engage in community celebrations, and exchange greetings, sweets, and gifts 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Govardhan
