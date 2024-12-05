import React from 'react'
import Maha from '../../Images/Karwa Chauth.jpg'
function Karwa () {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Karwa Chauth
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Maha}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            Karwa Chauth is a traditional Hindu festival celebrated by married women with great devotion and enthusiasm. It is observed to pray for the long life, prosperity, and well-being of their husbands. This day holds immense significance in Hindu culture and is marked by fasting, prayers, and rituals.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              Karwa Chauth is celebrated on the fourth day (Chaturthi) of the Krishna Paksha (dark fortnight) of the Hindu lunisolar month of Kartik, which typically falls in October or November according to the Gregorian calendar i.e. October 20, 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              Karwa Chauth entails a day-long fast for married women, broken only after moonrise, following evening rituals. Before sunrise, they receive Sargi, a pre-dawn meal from their mothers-in-law, while dressing in traditional attire for puja rituals, and praying for their husbands' well-being. The fast concludes with the awaited moon sighting, as women offer water to the moon through a sieve, marking the end of their fast.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              Karwa Chauth is predominantly celebrated in North Indian states like Punjab, Haryana, Rajasthan, Uttar Pradesh, and Delhi, where it holds immense cultural significance. However, it is also observed in other parts of India by Hindu communities.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Observing Fast, prepare for the puja by gathering necessary items like Karwa (an earthen pot), idols or images of Goddess Parvati, and other puja essentials, await the sighting of the moon in the evening, perform puja rituals, offer prayers, and seek blessings for the well-being and longevity of husbands
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Karwa
