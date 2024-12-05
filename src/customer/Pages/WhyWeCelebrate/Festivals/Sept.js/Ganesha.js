import React from 'react'
import Ganesh from '../../Images/Ganesha Chaturthi.jpg'
function Ganesha() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Ganesha Chaturthi
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Ganesh}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Ganesha Chaturthi, also known as Vinayaka Chaturthi, is a revered Hindu festival that celebrates the birth of Lord Ganesha, the elephant-headed deity of wisdom, prosperity, and removal of obstacles. It is observed with great zeal and devotion across India, particularly in the states of Maharashtra, Karnataka, and Andhra Pradesh.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              Ganesha Chaturthi is celebrated on the fourth day (Chaturthi) of the Hindu lunisolar month of Bhadrapada, which usually falls in August or September according to the Gregorian calendar i.e. September 7, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              Ganesha Chaturthi commences with the installation of clay idols in homes and pandals, adorned with flowers and ornaments. Devotees perform puja ceremonies, offering fruits, sweets, and modak to Lord Ganesha amidst recitations of hymns and mantras. The festival culminates in Ganesh Visarjan, with fervent chants during the procession, fostering community unity with cultural programs and social activities in public pandals.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              While Ganesha Chaturthi is celebrated across India, the most vibrant and elaborate celebrations are witnessed in Maharashtra, especially in cities like Mumbai, Pune, and Nagpur, where the festival is observed on a grand scale.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              While Ganesha Chaturthi is celebrated across India, the most vibrant and elaborate celebrations are witnessed in Maharashtra, especially in cities like Mumbai, Pune, and Nagpur, where the festival is observed on a grand scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ganesha
