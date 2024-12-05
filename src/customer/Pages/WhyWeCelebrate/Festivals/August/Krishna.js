import React from 'react'
import Krishnaa from '../../Images/Krishna Janmashtami.jpg'
function Krishna() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Krishna Janmashtami
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Krishnaa}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Krishna Janmashtami, or Gokulashtami, is a major Hindu festival commemorating the birth of Lord Krishna who is the chief god of Hinduism. The whole nation is involved in this event rejoicing joyfully while all Hindus across the globe do too.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              August 26th, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              On midnight festivities devotees fast in temples while praying prayerful songs echo their voices in devotion. With colors streets and houses are beautified by diverse decorations as satsangs deepen Lord Krishna’s simple lessons about peace and worship.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Dispersed all over India, Krishna Janmashtami is predominantly celebrated in states like Uttar Pradesh, Maharashtra, Gujarat or Rajasthan where the temples dedicated to him are frequented by millions every year.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Fasting & Prayer, Festivals at Temples, Dahi Handi Function; Cultural Activities
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Krishna
