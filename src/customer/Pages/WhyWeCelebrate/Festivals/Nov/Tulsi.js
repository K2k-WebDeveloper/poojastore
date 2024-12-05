import React from 'react'
import Tuls from '../../Images/Tulsi Vivah.jpg'
function Tulsi() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Tulsi Vivah
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Tuls}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Tulsi Vivah, also known as Tulsi Wedding, is a sacred Hindu festival celebrated to commemorate the ceremonial marriage of the Tulsi plant (holy basil) to Lord Vishnu or his avatar Lord Krishna. It marks the beginning of the Hindu wedding season and is observed with great reverence and devotion.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              Tulsi Vivah is celebrated on the Ekadashi (eleventh day) of the Shukla Paksha (bright fortnight) of the Hindu lunar month of Kartik, which typically falls in October or November according to the Gregorian calendar i.e. November 13, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              On Tulsi Vivah, devotees conduct a ceremonial wedding, uniting the Tulsi plant with an idol of Lord Vishnu or Krishna, amidst traditional Hindu rituals. Offerings of flowers, fruits, and prayers are made, seeking blessings for marital harmony and spiritual growth. Community celebrations include bhajans, kirtans, and religious discourses, fostering a joyous atmosphere of devotion and festivity.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Tulsi Vivah is predominantly celebrated in North Indian states like Uttar Pradesh, Rajasthan, Maharashtra, and Gujarat, where the festival holds significant cultural and religious importance.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Tulsi Plant Decoration, participate in or witness the Tulsi Vivah rituals, Community Participation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tulsi
