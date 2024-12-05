import React from 'react'
import Hanumann from '../../Images/Hanuman Jayanti.jpg'
function Hanuman() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Hanuman Jayanti
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Hanumann}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Hanuman Jayanti is an important Hindu festival that commemorates the birth of Lord Hanuman, the devoted disciple of Lord Rama. It is celebrated by millions of devotees all over India and throughout different regions around the world where people belonging to this religion live with a lot of excitement and passion.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              April 23, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              For praying and reciting the Ramayana, devotees keep on visiting Hanuman temples where they pray praising the valor of Hanuman. Prasads are given after colorful processions with Hanuman idols, devotional songs are sung, and chants of Hanuman Chalisa are recited. The lessons from Hanuman’s life and deeds can be learned through spiritual discourses and satsangs.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              The celebration of the festival takes place in Northern Indian territories, especially Uttar Pradesh, Bihar, and Madhya Pradesh.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Visit temples; take part in processions; recite the Hanuman Chalisa; do charity work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hanuman
