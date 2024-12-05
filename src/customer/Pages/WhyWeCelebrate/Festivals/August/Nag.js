import React from 'react'
import Nagg from '../../Images/Nag Panchami.jpg'
function Nag() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Nag Panchami
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Nagg}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Nag Panchami is a traditional Hindu feast day which is about serpent worship. It is most sacred in the places where Snake worship is embraced, such as India’s Hindus. During snake worship, devotees offer prayers and milk to snake idols placed in anthills or under trees where they live. Special rituals involve reciting mantras and offering milk, water, and flowers as an act of honoring snakes.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              9th August 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              You’ll find a lot of temples dedicated to snake gods such as the Naga Devata Temple, adorned with painted rangoli designs on houses and temples.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Nag Panchami is observed especially in Maharashtra, Karnataka, and West Bengal among others.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Snake Worship, ritual Offerings, visit Temples, participate in educational programs about the importance of snake conservation and safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nag
