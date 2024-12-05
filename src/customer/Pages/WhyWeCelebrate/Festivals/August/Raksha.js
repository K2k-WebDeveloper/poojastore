import React from 'react'
import Rakhii from '../../Images/Raksha Bandhan.jpg'
function Raksha() {
  return (
    <div>
      <div className="px-5 lg:px-12">
        <h2 className="py-5 font-bold text-[20px] text-[#f0a709] ">
        Raksha Bandhan
        </h2>
        <div className="py-2 lg:flex">
          <img
            src={Rakhii}
            className="w-full h-auto lg:w-1/3 lg:h-[300px] object-cover"
          />
          <div className="mx-3">
            <p className="py-3 lg:pb-3 lg:py-0 text-[17px]">
            More often than not, people think of brotherhood when they hear of Raksha Bandhan or simply Rakhi. The festival is celebrated to cherish the bond between brothers and sisters. It is usually a day filled with joy, and it is marked by sisters tying a sacred thread called Rakhi on their brothers’ wrists that signifies their love for them and also how they will stay connected for life.
            </p>
            <p className="py-3  text-[17px] ">
              <span className="font-semibold text-[20px]">Timing:-</span>
              This festival falls on the full moon day (Purnima) of Shravana month which is the Hindu lunisolar calendar that usually falls between July-August according to the Gregorian calendar i.e.19th Aug 2024
              <br />
              <span className="font-semibold text-[20px]">
                Key Attraction:-
              </span>
              Sisters drape their brothers’ wrists with Rakhis during Raksha Bandhan while conducting aarti and tilak ceremonies which symbolize security and blessings. Brothers return with gifts as an expression of gratitude and love; thereby uniting families through love that goes on forevermore while sharing sweets and eating together.
            </p>

            <p className="py-3 text-[17px] ">
              <span className="font-semibold text-[20px]">Where:-</span>
              In India people celebrate Raksha Bandhan with lots of enthusiasm and even outside India there exist Indian communities where it is celebrated fervidly.
              <br />
              <span className=" font-semibold text-[17px]">Things To Do:-</span>
              Rakhi shopping, spend quality time with family, express gratitude
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Raksha
