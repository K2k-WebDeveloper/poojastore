import React from 'react'
import Navaratr from '../../Images/Navratri.jpg'
function Navratri() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Navratri
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Navaratr}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Navratri, meaning "nine nights," is a vibrant Hindu festival celebrated with immense fervor and devotion across India. It commemorates the victory of good over evil and honors the divine feminine energy, manifesting in the form of Goddess Durga and her various incarnations.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              October 3, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              Navratri is marked by vibrant Garba and Dandiya Raas dances, where people in traditional attire gather for lively celebrations. In South India, Golu displays showcase creativity with dolls depicting deities, while devotees observe fasts and perform puja rituals, offering prayers to Goddess Durga. Community festivities unite people with cultural programs, music concerts, and traditional food stalls, enhancing the joyous atmosphere of Navratri.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Navratri is celebrated with great enthusiasm across India, with notable celebrations in Gujarat, Maharashtra, West Bengal, Karnataka, Tamil Nadu, and other states.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Participate in Garba and Dandiya Raas dances, Visit Temples, Fasting and Puja
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navratri
